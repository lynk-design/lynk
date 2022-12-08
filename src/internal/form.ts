import './formdata-event-polyfill';
import type LynkButton from '../components/button/button';
import type { LynkFormControl } from '../internal/lynk-element';
import type { ReactiveController, ReactiveControllerHost } from 'lit';

//
// We store a WeakMap of forms + controls so we can keep references to all Lynk controls within a given form. As
// elements connect and disconnect to/from the DOM, their containing form is used as the key and the form control is
// added and removed from the form's set, respectively.
//
const formCollections: WeakMap<HTMLFormElement, Set<LynkFormControl>> = new WeakMap();

//
// We store a WeakMap of controls that users have interacted with. This allows us to determine the interaction state
// without littering the DOM with additional data attributes.
//
const userInteractedControls: WeakMap<LynkFormControl, boolean> = new WeakMap();

//
// We store a WeakMap of reportValidity() overloads so we can override it when form controls connect to the DOM and
// restore the original behavior when they disconnect.
//
const reportValidityOverloads: WeakMap<HTMLFormElement, () => boolean> = new WeakMap();

export interface FormSubmitControllerOptions {
  /** A function that returns the form containing the form control. */
  form: (input: LynkFormControl) => HTMLFormElement | null;
  /** A function that returns the form control's name, which will be submitted with the form data. */
  name: (input: LynkFormControl) => string;
  /** A function that returns the form control's current value. */
  value: (input: LynkFormControl) => unknown | unknown[];
  /** A function that returns the form control's default value. */
  defaultValue: (input: LynkFormControl) => unknown | unknown[];
  /** A function that returns the form control's current disabled state. If disabled, the value won't be submitted. */
  disabled: (input: LynkFormControl) => boolean;
  /**
   * A function that maps to the form control's reportValidity() function. When the control is invalid, this will
   * prevent submission and trigger the browser's constraint violation warning.
   */
  reportValidity: (input: LynkFormControl) => boolean;
  /** A function that sets the form control's value */
  setValue: (input: LynkFormControl, value: unknown) => void;
}

export class FormSubmitController implements ReactiveController {
  host: LynkFormControl & ReactiveControllerHost;
  form?: HTMLFormElement | null;
  options: FormSubmitControllerOptions;

  constructor(host: ReactiveControllerHost & LynkFormControl, options?: Partial<FormSubmitControllerOptions>) {
    (this.host = host).addController(this);
    this.options = {
      form: input => input.closest('form'),
      name: input => input.name,
      value: input => input.value,
      defaultValue: input => input.defaultValue,
      disabled: input => input.disabled ?? false,
      reportValidity: input => (typeof input.reportValidity === 'function' ? input.reportValidity() : true),
      setValue: (input, value: string) => (input.value = value),
      ...options
    };
    this.handleFormData = this.handleFormData.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.reportFormValidity = this.reportFormValidity.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  hostConnected() {
    this.form = this.options.form(this.host);

    if (this.form) {
      // Add this element to the form's collection
      if (formCollections.has(this.form)) {
        formCollections.get(this.form)!.add(this.host);
      } else {
        formCollections.set(this.form, new Set<LynkFormControl>([this.host]));
      }

      this.form.addEventListener('formdata', this.handleFormData);
      this.form.addEventListener('submit', this.handleFormSubmit);
      this.form.addEventListener('reset', this.handleFormReset);

      // Overload the form's reportValidity() method so it looks at Lynk form controls
      if (!reportValidityOverloads.has(this.form)) {
        reportValidityOverloads.set(this.form, this.form.reportValidity);
        this.form.reportValidity = () => this.reportFormValidity();
      }
    }

    this.host.addEventListener('lynk-input', this.handleUserInput);
  }

  hostDisconnected() {
    if (this.form) {
      // Remove this element from the form's collection
      formCollections.get(this.form)?.delete(this.host);

      this.form.removeEventListener('formdata', this.handleFormData);
      this.form.removeEventListener('submit', this.handleFormSubmit);
      this.form.removeEventListener('reset', this.handleFormReset);

      // Remove the overload and restore the original method
      if (reportValidityOverloads.has(this.form)) {
        this.form.reportValidity = reportValidityOverloads.get(this.form)!;
        reportValidityOverloads.delete(this.form);
      }

      this.form = undefined;
    }

    this.host.removeEventListener('lynk-input', this.handleUserInput);
  }

  hostUpdated() {
    //
    // We're mapping the following "states" to data attributes. In the future, we can use ElementInternals.states to
    // create a similar mapping, but instead of [data-invalid] it will look like :--invalid.
    //
    // See this RFC for more details: https://github.com/shoelace-style/shoelace/issues/1011
    //
    const host = this.host;
    const hasInteracted = Boolean(userInteractedControls.get(host));
    const invalid = Boolean(host.invalid);
    const required = Boolean(host.required);

    if (this.form?.noValidate) {
      // Form validation is disabled, remove the attributes
      host.removeAttribute('data-required');
      host.removeAttribute('data-optional');
      host.removeAttribute('data-invalid');
      host.removeAttribute('data-valid');
      host.removeAttribute('data-user-invalid');
      host.removeAttribute('data-user-valid');
    } else {
      // Form validation is enabled, set the attributes
      host.toggleAttribute('data-required', required);
      host.toggleAttribute('data-optional', !required);
      host.toggleAttribute('data-invalid', invalid);
      host.toggleAttribute('data-valid', !invalid);
      host.toggleAttribute('data-user-invalid', invalid && hasInteracted);
      host.toggleAttribute('data-user-valid', !invalid && hasInteracted);
    }
  }

  handleFormData(event: FormDataEvent) {
    const disabled = this.options.disabled(this.host);
    const name = this.options.name(this.host);
    const value = this.options.value(this.host);

    if (!disabled && typeof name === 'string' && typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        (value as unknown[]).forEach(val => {
          event.formData.append(name, (val as string | number | boolean).toString());
        });
      } else {
        event.formData.append(name, (value as string | number | boolean).toString());
      }
    }
  }

  handleFormSubmit(event: Event) {
    const disabled = this.options.disabled(this.host);
    const reportValidity = this.options.reportValidity;

    // Update the interacted state for all controls when the form is submitted
    if (this.form && !this.form.noValidate) {
      formCollections.get(this.form)?.forEach(control => {
        this.setUserInteracted(control, true);
      });
    }

    if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  handleFormReset() {
    this.options.setValue(this.host, this.options.defaultValue(this.host));
    this.setUserInteracted(this.host, false);
  }

  async handleUserInput() {
    await this.host.updateComplete;
    this.setUserInteracted(this.host, true);
  }

  reportFormValidity() {
    //
    // Lynk form controls work hard to act like regular form controls. They support the Constraint Validation API
    // and its associated methods such as setCustomValidity() and reportValidity(). However, the HTMLFormElement also
    // has a reportValidity() method that will trigger validation on all child controls. Since we're not yet using
    // ElementInternals, we need to overload this method so it looks for any element with the reportValidity() method.
    //
    // We preserve the original method in a WeakMap, but we don't call it from the overload because that would trigger
    // validations in an unexpected order. When the element disconnects, we revert to the original behavior. This won't
    // be necessary once we can use ElementInternals.
    //
    // Note that we're also honoring the form's novalidate attribute.
    //
    if (this.form && !this.form.noValidate) {
      // This seems sloppy, but checking all elements will cover native inputs, Lynk inputs, and other custom
      // elements that support the constraint validation API.
      const elements = this.form.querySelectorAll<HTMLInputElement>('*');

      for (const element of elements) {
        if (typeof element.reportValidity === 'function') {
          if (!element.reportValidity()) {
            return false;
          }
        }
      }
    }

    return true;
  }

  setUserInteracted(el: LynkFormControl, hasInteracted: boolean) {
    userInteractedControls.set(el, hasInteracted);
    el.requestUpdate();
  }

  doAction(type: 'submit' | 'reset', invoker?: HTMLInputElement | LynkButton) {
    if (this.form) {
      const button = document.createElement('button');
      button.type = type;
      button.style.position = 'absolute';
      button.style.width = '0';
      button.style.height = '0';
      button.style.clipPath = 'inset(50%)';
      button.style.overflow = 'hidden';
      button.style.whiteSpace = 'nowrap';

      // Pass form attributes through to the temporary button
      if (invoker) {
        ['formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget'].forEach(attr => {
          if (invoker.hasAttribute(attr)) {
            button.setAttribute(attr, invoker.getAttribute(attr)!);
          }
        });
      }

      this.form.append(button);
      button.click();
      button.remove();
    }
  }

  /** Resets the form, restoring all the control to their default value */
  reset(invoker?: HTMLInputElement | LynkButton) {
    this.doAction('reset', invoker);
  }

  /** Submits the form, triggering validation and form data injection. */
  submit(invoker?: HTMLInputElement | LynkButton) {
    // Calling form.submit() bypasses the submit event and constraint validation. To prevent this, we can inject a
    // native submit button into the form, "click" it, then remove it to simulate a standard form submission.
    this.doAction('submit', invoker);
  }
}
