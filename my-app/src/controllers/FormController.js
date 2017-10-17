import Controller from "./Controller";

class FormController extends Controller {

    constructor(model) {
        super(model);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); // Prevent the forms being posted.
        // Call model to store something in api
        // I.e. this.model.save();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const key = target.name;
        this.model.storeToState(key, value);
    }
}

export default FormController;