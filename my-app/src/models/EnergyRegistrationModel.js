import React, {Component} from 'react';
import Model from "./Model";
import EnergyRegistrationView from "../views/EnergyRegistrationView";
import axios from 'axios';

class EnergyRegistrationModel extends Model {

    getValidRegistrationTimes() {
        return {
            from: 9,
            to: 18
        }
    }

    getUserDevices() {

        /*
            Hier moet een call komen die apparaten teruggeeft die bij een bepaald
            huishouden hoort.

            Input is: hh_id

            Response format:

            [
                {
                    "id": "1",
                    "naam": "roeimachine",
                    "max": "20", "merk":
                    "fit4u", "type_fk": "1"
                },
                ....
            ]


         */

        // const BASE_URL = 'url';
        //
        // axios.get(BASE_URL, {
        //     params: {
        //         hh: 1
        //     }
        // }).then(function (response) {
        //     return response;
        // }).catch(function (error) {
        //     console.log(error);
        // })

        return [
            {
                "id": "1",
                "naam": "roeimachine",
                "max": "20", "merk":
                "fit4u", "type_fk": "1"
            },
            {
                "id": "2",
                "naam": "roeimachinessss",
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