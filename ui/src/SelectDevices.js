import React, {Component} from 'react';
import Form from './Helpers/Form';

class SelectDevices extends Form {

    handleSubmit(e) {
        super.handleSubmit(e);
        // Content is stored in this.state
        // Perform API logic here.
    }

    static getAllDevices() {

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

        var devices = SelectDevices.getAllDevices();

        return (

            React.createElement('form', {className: 'devices-form', onSubmit: this.handleSubmit},
                devices.map((device) => (
                    <DeviceCheckBox device={device} handler={this.handleInputChange}/>
                )),
                React.createElement('button', {type: 'submit'}, "Save")
            ))
    }
}

const DeviceCheckBox = ({device, handler}) => {
    return ([
        <label>{device.naam}</label>,
        React.createElement('input', {
            type: 'checkbox',
            name: device.id,
            onChange: handler
        })
    ])
};

export default SelectDevices