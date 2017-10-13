import View from "./View";
import React, {Component} from 'react';
import EnergyRegistrationController from "../controllers/EnergyRegistrationController";

class EnergyRegistrationView extends View {

    render() {

        const controller = new EnergyRegistrationController(this.model);

        return ([
            this.model.getUserDevices().map((device) => ([
                React.createElement('form', {className: 'energy-form', onSubmit: controller.handleSubmit}, [
                    <Energytimes times={this.model.getValidRegistrationTimes()} handle={controller.handleInputChange}/>,
                    React.createElement('button', {type: 'submit'}, "Save")
                ])
            ]))
        ]);
    }
}

const Energytimes = ({times, handle}) => {
    const data = [];
    const from = times.from;
    const to = times.to;
    for (var i = from; i < (to + 1); i++) {
        data.push(EnergyTime(i, {handle}))
    }
    return data;
};

const EnergyTime = (time, {handle}) => {
    return (
        [
            <p>
                {time}:00
            </p>,
            React.createElement('input', {
                type: 'text',
                name: time,
                placeholder: 'kw',
                onChange: handle
            })
        ]
    )
};

export default EnergyRegistrationView
