import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterModel from "./models/RegisterModel";
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                    <RegisterModel/>
            </div>
        );
    }
}

export default App;
