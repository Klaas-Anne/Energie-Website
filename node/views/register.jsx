var React = require('react');
var RegisterController = require('../controllers/RegisterController');

class RegisterView extends React.Component {

    render() {

        var c = new RegisterController(null);


        return React.createElement('form', {class: 'ContactForm', onSubmit: c.handleSubmit},
            React.createElement('div', {class: 'input-group'},
                <h1> Number </h1>,
                React.createElement('input', {
                    type: 'number',
                    name: 'number',
                    class: 'form-control',
                    onChange: c.handleInputChange
                })

            ),
            React.createElement('div', {class: 'input-group'},
                <h1> Email </h1>,
                React.createElement('input', {
                    type: 'email',
                    name: 'email',
                    class: 'form-control',
                    onChange: c.handleInputChange
                })
            ),
            React.createElement('div', {class: 'input-group'},
                <h1> Street </h1>,
                React.createElement('input', {
                    type: 'text',
                    name: 'street',
                    class: 'form-control',
                    onChange: c.handleInputChange
                })
            ),
            React.createElement('div', {class: 'input-group'},
                <h1> Zipcode </h1>,
                React.createElement('input', {
                    type: 'text',
                    name: 'Zipcode',
                    class: 'form-control',
                    onChange: c.handleInputChange
                })
            ),
            React.createElement('div', {class: 'input-group'},
                <h1> Place </h1>,
                React.createElement('input', {
                    type: 'text',
                    name: 'place',
                    class: 'form-control',
                    onChange: c.handleInputChange
                })
            ),
            React.createElement('button', {type: 'submit', class: 'btn btn-danger'}, "RegisterModel"))
    }
}

module.exports = RegisterView;


