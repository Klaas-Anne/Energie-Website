import React, {Component} from 'react';

class Model extends Component {

    storeToState(key, value) {
        this.setState({
            [key]: value
        });
    }

}

export default Model;