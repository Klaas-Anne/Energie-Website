import React, {Component} from 'react';
import Form from "../Helpers/Form";

class EnergyRegistration extends Form {


    constructor() {
        super();
    }

    times = {
        from: 9,
        to: 18
    };

    getDevices() {
        return [
            {
                "id": "1",
                "naam": "roeimachine",
                "max": "20", "merk":
                "fit4u", "type_fk": "1"
            },
            // {
            //     "id": "2",
            //     "naam": "zonnepaneel op dak",
            //     "max": "4000",
            //     "merk": "Siemens",
            //     "type_fk": "2"
            // },
        ]
    }

    render() {
        return ([
            this.getDevices().map((device) => ([
                React.createElement('form', {className: 'energy-form', onSubmit: this.handleSubmit}, [
                    <Energytimes times={this.times} handle={this.handleInputChange}/>,
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

export default EnergyRegistration;