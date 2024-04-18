import { regexEmail, regexPassword } from "../utils/Regex";

export const validationContactUs = (form) => {
    let error = {};

    if (!form.name) {
        error.name = 'Required field name'
    }
    if (!form.phone) {
        error.phone = 'Required field phone number'
    }
    if (!form.email) {
        error.email = 'Required field email'
    } else if (!regexEmail.test(form.email.trim())) {
        error.email = 'Invalid email'
    }
    if (!form.description) {
        error.description = 'Required field description'
    }
    return error;
};

