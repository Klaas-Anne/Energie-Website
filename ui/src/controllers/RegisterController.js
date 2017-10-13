import FormController from "./FormController";

class RegisterController extends FormController {


    handleSubmit(e) {
        super.handleSubmit(e);

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
        }


        /*
            Doe hier de API call om te registreren.
         */

        const BASE_URL = 'url';

        axios.post(BASE_URL,
            dataToSend,
        ).then(function (response) {
            // Geef in de response bijv. een id van het gemaakte entities mee.
        }).catch(function (error) {
            console.log(error);
        })
    }

}

export default RegisterController;