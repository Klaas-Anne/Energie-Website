import React, {Component} from 'react';
import StateModel from "./StateModel";
import SelectDeviceView from "../views/SelectDeviceView";

class SelectDeviceModel extends StateModel {

    getAllDevices() {

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
            }, {"id": "3", "naam": "mobiel zonnepaneel", "max": "100", "merk": "Bosch", "type_fk": "2"}, {
                "id": "4",
                "naam": "groot zonnepaneel",
                "max": "6000",
                "merk": "Bosch",
                "type_fk": "2"
            }, {"id": "5", "naam": "windmolen op dak", "max": "4500", "merk": "Mills4Ever", "type_fk": "3"}, {
                "id": "6",
                "naam": "windmolen in tuin",
                "max": "4200",
                "merk": "Siemens",
                "type_fk": "3"
            },
            {
                "id": "7",
                "naam": "windmolen op akker",
                "max": "6000", "merk": "YourMill",
                "type_fk": "3"
            }
        ];
    }

    render() {
        return (
            new SelectDeviceView(this).render()
        )
    }
}

export default SelectDeviceModel