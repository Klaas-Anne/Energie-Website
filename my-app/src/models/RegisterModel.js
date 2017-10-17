import React, {Component} from 'react';
import RegisterView from "../views/RegisterView";
import StateModel from "./StateModel";
import * as ReactDOM from "react-dom";
import Redirect from "react-router-dom/es/Redirect";
import SelectDeviceModel from "./SelectDeviceModel";

class RegisterModel extends StateModel {

    constructor() {
        super();

        this.initState({
            number: 1,
            email: '',
            street: '',
            zipcode: '',
            place: ''
        });
    }

    render() {
        if(!this.state.registered) {
            return (
                new RegisterView(this).render()
            )
        } else {
            return (
                <Redirect to="/select"/>
            )
        }
    }
}

export default RegisterModel