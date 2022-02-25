import React, { ReactNode } from 'react';

abstract class FormProps {
    state: FormState;

    constructor(state: FormState) {
        this.state = state;
    }
}

abstract class FormState {}

abstract class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);
        this.state = props.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    abstract handleChange(event: React.ChangeEvent<HTMLInputElement>): void;

    abstract handleSubmit(event: React.FormEvent<HTMLFormElement>): void;

    abstract render(): ReactNode;
}


export {Form, FormProps, FormState};