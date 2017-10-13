import React, {Component} from 'react';
import Model from "./Model";
import EnergyOverviewView from "../views/EnergyOverviewView";

class EnergyOverviewModel extends Model {

    getMeasurements() {
        return [{
            device: {
                "id": "1",
                "naam": "roeimachine",
                "max": "20",
                "merk": "fit4u",
                "type_fk": "1"
            },
            energies: [
                {
                    "time": 9,
                    'kw': 2,
                },
                {
                    "time": 10,
                    'kw': 3,
                },
                {
                    "time": 11,
                    'kw': 1,
                }
            ]
        },
            {
                device: {
                    "id": "2",
                    "naam": "roeimachine2",
                    "max": "20",
                    "merk": "fit4u",
                    "type_fk": "1"
                },
                energies: [
                    {
                        "time": 9,
                        'kw': 3,
                    },
                    {
                        "time": 10,
                        'kw': 8,
                    },
                    {
                        "time": 11,
                        'kw': 1,
                    }
                ]
            }
        ]
    }

    render() {
        return (
            new EnergyOverviewView(this).render()
        )
    }

}

export default EnergyOverviewModel;