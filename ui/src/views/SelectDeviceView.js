import React, {Component} from 'react';
import View from "./View";
import FormController from "../controllers/FormController";

class SelectDeviceView extends View {

    render() {

        const controller = new FormController(this.model);
        const devices = this.model.getAllDevices();

        return (

            React.createElement('form', {className: 'devices-form', onSubmit: controller.handleSubmit},
                devices.map((device) => (
                    <DeviceCheckBox device={device} handler={controller.handleInputChange}/>
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

export default SelectDeviceView