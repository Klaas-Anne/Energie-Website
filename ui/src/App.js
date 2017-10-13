import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SelectDeviceModel from "./models/SelectDeviceModel";
import EnergyRegistrationModel from "./models/EnergyRegistrationModel";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <EnergyRegistrationModel/>
            </div>
        );
    }
}

export default App;
