import React, {Component} from 'react';
import View from "./View";
import RegisterController from "../controllers/RegisterController";
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";

class RegisterView extends View {

    render() {

        const controller = new RegisterController(this.model);

        return (
            React.createElement('form', {class: 'ContactForm', onSubmit: controller.handleSubmit},
                <FormGroup>
                    <ControlLabel>
                        Inwoners
                    </ControlLabel>
                    <FormControl
                        type="number"
                        name="number"
                        value={this.model.state.number}
                        onChange={controller.handleInputChange}
                    >
                    </FormControl>
                </FormGroup>,
                <FormGroup>
                    <ControlLabel>
                        Email
                    </ControlLabel>
                    <FormControl
                        type="email"
                        name="email"
                        value={this.model.state.email}
                        onChange={controller.handleInputChange}
                    >
                    </FormControl>
                </FormGroup>,
                <FormGroup>
                    <ControlLabel>
                        Street
                    </ControlLabel>
                    <FormControl
                        type="text"
                        name="street"
                        value={this.model.state.street}
                        onChange={controller.handleInputChange}
                    >
                    </FormControl>
                </FormGroup>,
                <FormGroup>
                    <ControlLabel>
                        Zipcode
                    </ControlLabel>
                    <FormControl
                        type="text"
                        name="zipcode"
                        value={this.model.state.zipcode}
                        onChange={controller.handleInputChange}
                    >
                    </FormControl>
                </FormGroup>,
                <FormGroup>
                    <ControlLabel>
                        Place
                    </ControlLabel>
                    <FormControl
                        type="text"
                        name="place"
                        value={this.model.state.place}
                        onChange={controller.handleInputChange}
                    >
                    </FormControl>
                </FormGroup>,
                React.createElement('button', {type: 'submit'}, "RegisterModel")
            )
        );

    }
}

export default RegisterView;