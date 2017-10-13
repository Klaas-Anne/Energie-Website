import React, {Component} from 'react';
import Model from "./Model";
import EnergyRegistrationView from "../views/EnergyRegistrationView";

class EnergyRegistrationModel extends Model {


    constructor() {
        super();
    }

    getValidRegistrationTimes() {
        return {
            from: 9,
            to: 18
        }
    }

    getUserDevices() {
        return [
            {
                "id": "1",
                "naam": "roeimachine",
                "max": "20", "merk":
                "fit4u", "type_fk": "1"
            }
        ]
    }

    render() {
        return (
            new EnergyRegistrationView(this).render()
        )
    }
}

export default EnergyRegistrationModel