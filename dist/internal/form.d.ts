import './formdata-event-polyfill';
import type LynkButton from '../components/button/button';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
export interface FormSubmitControllerOptions {
    form: (input: unknown) => HTMLFormElement | null;
    name: (input: unknown) => string;
    value: (input: unknown) => unknown | unknown[];
    disabled: (input: unknown) => boolean;
    reportValidity: (input: unknown) => boolean;
}
export declare class FormSubmitController implements ReactiveController {
    host?: ReactiveControllerHost & Element;
    form?: HTMLFormElement | null;
    options: FormSubmitControllerOptions;
    constructor(host: ReactiveControllerHost & Element, options?: Partial<FormSubmitControllerOptions>);
    hostConnected(): void;
    hostDisconnected(): void;
    handleFormData(event: FormDataEvent): void;
    handleFormSubmit(event: Event): void;
    reportFormValidity(): boolean;
    submit(submitter?: HTMLInputElement | LynkButton): void;
}
