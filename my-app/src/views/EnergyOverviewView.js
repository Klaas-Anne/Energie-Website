import React, {Component} from 'react';
import View from "./View";

class EnergyOverviewView extends View {

    render() {
        return (
            this.model.getMeasurements().map((info) => (
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


export default EnergyOverviewView;