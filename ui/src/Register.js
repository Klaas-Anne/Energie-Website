import React, {Component} from 'react';

class Register extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            React.createElement('form', {className: 'ContactForm'},
                React.createElement('input', {
                    type: 'number',
                    placeholder: 'Inwoners',
                    //value: this.props.value.name,
                }),
                React.createElement('input', {
                    type: 'email',
                    placeholder: 'Email',
                    //value: this.props.value.email,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Street',
                    //value: this.props.value.description,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Zipcode',
                    //value: this.props.value.description,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Place',
                    //value: this.props.value.description,
                }),
                React.createElement('button', {type: 'submit'}, "Register")
            )
        );
    }
}

export default Register