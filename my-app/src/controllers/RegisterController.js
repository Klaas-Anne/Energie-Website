import React from 'react';
import FormController from "./FormController";

//import axios from 'axios';


class RegisterController extends FormController {


    handleSubmit(e) {
        //super.handleSubmit(e);

        /*
            Onderstaande data moet worden opgeslagen in de database:

            LETOP: Deze tabel bestaat nog niet als het goed is.
         */
        const dataToSend = {
            numberOfResidents: this.model.state.number, // Aantal inwoners in een huis
            email: this.model.state.email, // Email van een gebruiker
            street: this.model.state.street, // Straatnaam
            zipcode: this.model.state.zipcode, // Postcode
            place: this.model.state.place // Plaats
        };


        this.model.storeToState('registered', true);
    }

}

export default RegisterController;