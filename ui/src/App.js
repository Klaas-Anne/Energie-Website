import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-table/react-table.css'


import Register from './model/RegisterModel';
import SelectDevices from './views/SelectDevices';
import EnergyRegistration from "./views/EnergyRegistration";
import Overview from "./views/EnergyOverview";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
            <Register/>
      </div>
    );
  }
}

export default App;
