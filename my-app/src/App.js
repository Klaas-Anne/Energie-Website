import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterModel from "./models/RegisterModel";
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import SelectDeviceModel from "./models/SelectDeviceModel";

// Import routing components


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={RegisterModel}/>
                        <Route path="/select" component={SelectDeviceModel}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
