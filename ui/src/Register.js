import Form from "./Helpers/Form";
import React, {Component} from 'react';

class Register extends Form {

    constructor() {
        super();

        this.state = {
            number: 1,
            email: '',
            street: '',
            zipcode: '',
            place: ''
        };
    }

    handleSubmit(e) {
        super.handleSubmit(e);
        // Content is stored in this.state
        // Perform API logic here.
    }

    render() {

        return (
            React.createElement('form', {className: 'ContactForm', onSubmit: this.handleSubmit},
                React.createElement('input', {
                    type: 'number',
                    name: 'number',
                    placeholder: 'Inwoners',
                    value: this.state.number,
                    onChange: this.handleInputChange
                }),
                React.createElement('input', {
                    type: 'email',
                    name: 'email',
                    placeholder: 'Email',
                    value: this.state.email,
                    onChange: this.handleInputChange
                }),
                React.createElement('input', {
                    type: 'text',
                    name: 'street',
                    placeholder: 'Street',
                    value: this.state.street,
                    onChange: this.handleInputChange
                }),
                React.createElement('input', {
                    type: 'text',
                    name: 'zipcode',
                    placeholder: 'Zipcode',
                    value: this.state.zipcode,
                    onChange: this.handleInputChange
                }),
                React.createElement('input', {
                    type: 'text',
                    name: 'place',
                    placeholder: 'Place',
                    value: this.state.place,
                    onChange: this.handleInputChange
                }),
                React.createElement('button', {type: 'submit'}, "Register")
            )
        );
    }
}

export default Register