import React, {Component} from 'react';

class Overview extends Component {

    getEnergies() {
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
            this.getEnergies().map((info) => (
                <EnergieTable info={info}/>
            ))
        )
    }

}

const EnergieTable = ({info}) => {
    var kwData = [];
    var kwhData = [];
    var times = [];

    info.energies.forEach(function (k, v) {
        kwData.push(<td>{k.kw}</td>);
        times.push(<th>{k.time}</th>)
        if (kwhData.length > 0) {
            const last = kwhData[kwhData.length - 1]
            kwhData.push(last + k.kw);
        } else {
            kwhData.push(k.kw);
        }
    });

    var kwhtableData = [];
    kwhData.forEach(function (k) {
        kwhtableData.push(<td>{k}</td>)
    });

    return (
        <table>
            <tr>
                <th></th>
                {times}
            </tr>
            <tr>
                <th>kw</th>
                {kwData}
            </tr>
            <tr>
                <th>kwh</th>
                {kwhtableData}
            </tr>
        </table>
    )
}


export default Overview;