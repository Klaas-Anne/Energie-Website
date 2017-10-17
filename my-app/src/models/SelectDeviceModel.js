import React, {Component} from 'react';
import StateModel from "./StateModel";
import SelectDeviceView from "../views/SelectDeviceView";
import axios from 'axios';

class SelectDeviceModel extends StateModel {

    getAllDevices() {

        /*
            Onderstaande is de format van een response die hier verwacht wordt.
            Dit is letterlijk een select * van apparaten.
        */

         return [
            {
                "id": "1",
                "naam": "roeimachine",
                "max": "20", "merk":
                "fit4u", "type_fk": "1"
            },
            {
                "id": "2",
                "naam": "zonnepaneel op dak",
                "max": "4000",
                "merk": "Siemens",
                "type_fk": "2"
            }
        ]
        //*/

        // const BASE_URL = 'url';
        //
        // axios.get(BASE_URL).then(function (response) {
        //     return response;
        // }).catch(function (error) {
        //     console.log(error);
        //     return [];
        // })
    }

    render() {
        return (
            new SelectDeviceView(this).render()
        )
    }
}

export default SelectDeviceModel