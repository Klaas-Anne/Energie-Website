import React, {Component} from 'react';
import Model from "./Model";

class StateModel extends Model {

    storeToState(key, value) {
        this.setState({
            [key]: value
        });
    }

    initState(data) {
        this.state = data;
    }

}

export default StateModel;