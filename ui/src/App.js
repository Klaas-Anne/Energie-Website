import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SelectDeviceModel from "./models/SelectDeviceModel";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <SelectDeviceModel/>
            </div>
        );
    }
}

export default App;
