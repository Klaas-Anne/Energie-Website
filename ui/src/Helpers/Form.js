import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value);
        this.setState({
            [target.name]: value
        });
    }
}

export default Form;