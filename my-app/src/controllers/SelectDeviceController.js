import FormController from "./FormController";

import axios from 'axios';

class SelectDeviceController extends FormController {


    handleSubmit(e) {
        super.handleSubmit(e);

        /*
            Onderstaande data moet worden opgeslagen in de database:

            Deze is in de volgende format:

            {
                hh: 1,
                data : {
                    1: true,
                    2: false,
                    etc....
                }
            }

            hh: 1 is het huishouden nummer dat gemaakt is in de registratie
            data ->1,2: Zijn de id's van de apparaten.
            true of false zegt of een huishouden iets bevat of niet.

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

export default SelectDeviceController;