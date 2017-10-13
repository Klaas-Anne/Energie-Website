import React, {Component} from 'react';
import RegisterView from "../views/RegisterView";
import StateModel from "./StateModel";

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
        return (
            new RegisterView(this).render()
        )
    }
}

export default RegisterModel