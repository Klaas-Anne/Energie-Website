import React, {Component} from 'react';
import View from "./View";
import RegisterController from "../controllers/RegisterController";

class RegisterView extends View {

    render() {

        const controller = new RegisterController(this.model);

        return (
            React.createElement('form', {className: 'ContactForm', onSubmit: controller.handleSubmit},
                React.createElement('input', {
                    type: 'number',
                    name: 'number',
                    placeholder: 'Inwoners',
                    value: this.model.state.number,
                    onChange: controller.handleInputChange
                }),
                React.createElement('input', {
                    type: 'email',
                    name: 'email',
                    placeholder: 'Email',
                    value: this.model.state.email,
                    onChange: controller.handleInputChange
                }),
                React.createElement('input', {
                    type: 'text',
                    name: 'street',
                    placeholder: 'Street',
                    value: this.model.state.street,
                    onChange: controller.handleInputChange
                }),
                React.createElement('input', {
                    type: 'text',
                    name: 'zipcode',
                    placeholder: 'Zipcode',
                    value: this.model.state.zipcode,
                    onChange: controller.handleInputChange
                }),
                React.createElement('input', {
                    type: 'text',
                    name: 'place',
                    placeholder: 'Place',
                    value: this.model.state.place,
                    onChange: controller.handleInputChange
                }),
                React.createElement('button', {type: 'submit'}, "RegisterModel")
            )
        );

    }
}

export default RegisterView;