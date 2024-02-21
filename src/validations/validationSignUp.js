import { regexEmail, regexPassword } from "../utils/Regex";

export const createAccount = (form, rol) => {
    let error = {};

    if (rol == 'dealers') {
        if (!form.name) {
            error.name = 'Required field'
        }
        if (!form.lastName) {
            error.lastName = 'Required field'
        }
        if (!form.email) {
            error.email = 'Required field'
        } else if (!regexEmail.test(form.email.trim())) {
            error.email = 'Invalid email'
        }
        if (!form.password) {
            error.password = 'Required field'
        } else if (!regexPassword.test(form.password.trim())) {
            error.password = 'Verify that your password is 8 characters long containing only characters, numeric digits, lower case and capital letters'
        } else if (!form.confirmPassword) {
            error.confirmPassword = 'Required field'
        } else if (form.password !== form.confirmPassword) {
            error.confirmPassword = 'Passwords do not match'
        }
    } else {
        if (!form.email) {
            error.email = 'Required field'
        } else if (!regexEmail.test(form.email.trim())) {
            error.email = 'Invalid email'
        }
        if (!form.password) {
            error.password = 'Required field'
        } else if (!form.confirmPassword) {
            error.confirmPassword = 'Required field'
        } else if (!regexPassword.test(form.password.trim())) {
            error.password = 'Verify that your password is 8 characters long containing only characters, numeric digits, lower case and capital letters'
        } else if (form.password !== form.confirmPassword) {
            error.confirmPassword = 'Passwords do not match'
        }
    }

    return error;
};
export const infoAccount = (form, rol) => {

    let error = {};

    if (rol == "dealers") {
       /*  if (!form.img) {
            error.img = 'Required field'
        } */
        if (!form.dealerName) {
            error.dealerName = 'Required field'
        }
        if (!form.registrationNumber) {
            error.registrationNumber = 'Required field'
        }
        if (!form.address) {
            error.address = 'Required field'
        }
        if (!form.phoneNumber) {
            error.phoneNumber = 'Required field'
        }
    } else {
       /*  if (!form.img) {
            error.img = 'Required field'
        } */
        if (!form.firtName) {
            error.firtName = 'Required field'
        }
        if (!form.lastName) {
            error.lastName = 'Required field'
        }
        if (!form.phoneNumber) {
            error.phoneNumber = 'Required field'
        }
    }

    return error;
};
