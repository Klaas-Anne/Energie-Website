import React, {Component} from 'react';

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            number: 1,
            email: '',
            street: '',
            zipcode: '',
            place: ''
        };

        console.log(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit() {

    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
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