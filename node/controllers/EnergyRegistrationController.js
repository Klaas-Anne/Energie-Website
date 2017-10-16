import FormController from "./FormController";

import axios from 'axios';

class EnergyRegistrationController extends FormController {


    handleSubmit(e) {
        super.handleSubmit(e);

        /*
            Onderstaande data moet worden opgeslagen in de database:

            Deze is in de volgende format:

            {
                hh: 1,
                data : {
                    9: 12,
                    10: 1,
                    etc....
                }
            }

            hh: 1 is het huishouden nummer dat gemaakt is in de registratie
            data ->9,10 Militaire uren. Dus 9 en 10 uur in de ochtend
            data -> 12,1 Metingen. (kw)

         */
        const dataToSend = {
            hh: 1,
            data: this.model.state
        };


        /*
            Doe hier de API call om hh apparaten aan te maken.
         */

        const BASE_URL = 'url';

        console.log(this.model.state);


        axios.post(BASE_URL,
            dataToSend,
        ).then(function (response) {
            // Geef in de response bijv. een id van het gemaakte entities mee.
        }).catch(function (error) {
            console.log(error);
        })
    }

}

export default EnergyRegistrationController;