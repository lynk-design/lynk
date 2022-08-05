import './formdata-event-polyfill';
const reportValidityOverloads = new WeakMap();
export class FormSubmitController {
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = Object.assign({ form: (input) => input.closest('form'), name: (input) => input.name, value: (input) => input.value, disabled: (input) => input.disabled, reportValidity: (input) => {
                return typeof input.reportValidity === 'function' ? input.reportValidity() : true;
            } }, options);
        this.handleFormData = this.handleFormData.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.reportFormValidity = this.reportFormValidity.bind(this);
    }
    hostConnected() {
        this.form = this.options.form(this.host);
        if (this.form) {
            this.form.addEventListener('formdata', this.handleFormData);
            this.form.addEventListener('submit', this.handleFormSubmit);
            if (!reportValidityOverloads.has(this.form)) {
                reportValidityOverloads.set(this.form, this.form.reportValidity);
                this.form.reportValidity = () => this.reportFormValidity();
            }
        }
    }
    hostDisconnected() {
        if (this.form) {
            this.form.removeEventListener('formdata', this.handleFormData);
            this.form.removeEventListener('submit', this.handleFormSubmit);
            if (reportValidityOverloads.has(this.form)) {
                this.form.reportValidity = reportValidityOverloads.get(this.form);
                reportValidityOverloads.delete(this.form);
            }
            this.form = undefined;
        }
    }
    handleFormData(event) {
        const disabled = this.options.disabled(this.host);
        const name = this.options.name(this.host);
        const value = this.options.value(this.host);
        if (!disabled && typeof name === 'string' && typeof value !== 'undefined') {
            if (Array.isArray(value)) {
                value.forEach(val => {
                    event.formData.append(name, val.toString());
                });
            }
            else {
                event.formData.append(name, value.toString());
            }
        }
    }
    handleFormSubmit(event) {
        const disabled = this.options.disabled(this.host);
        const reportValidity = this.options.reportValidity;
        if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    reportFormValidity() {
        if (this.form && !this.form.noValidate) {
            const elements = this.form.querySelectorAll('*');
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
    submit(submitter) {
        if (this.form) {
            const button = document.createElement('button');
            button.type = 'submit';
            button.style.position = 'absolute';
            button.style.width = '0';
            button.style.height = '0';
            button.style.clipPath = 'inset(50%)';
            button.style.overflow = 'hidden';
            button.style.whiteSpace = 'nowrap';
            if (submitter) {
                ['formaction', 'formmethod', 'formnovalidate', 'formtarget'].forEach(attr => {
                    if (submitter.hasAttribute(attr)) {
                        button.setAttribute(attr, submitter.getAttribute(attr));
                    }
                });
            }
            this.form.append(button);
            button.click();
            button.remove();
        }
    }
}
