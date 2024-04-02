import { regexEmail, regexPassword } from "../utils/Regex";

export const createAccount = (form, rol) => {
    let error = {};

    if (rol == 'dealers') {
        /*  if (!form.name) {
             error.name = 'Required field'
         } */
        if (!form.lastName) {
            error.lastName = 'Required field'
        }
        if (!form.firtName) {
            error.firtName = 'Required field'
        }
        if (!form.email) {
            error.email = 'Required field'
        } else if (!regexEmail.test(form.email.trim())) {
            error.email = 'Invalid email'
        }
        if (!form.password) {
            error.password = 'Required field'
        } else if (form.password.length < 8) {
            error.password = 'Verify that your password is 8 characters long'
        } else if (!form.confirmPassword) {
            error.confirmPassword = 'Required field'
        } else if (form.password !== form.confirmPassword) {
            error.confirmPassword = 'Passwords do not match'
        }
        if (!form.termsconditions) {
            error.termsconditions = 'You must accept terms and conditions.'
        }
    } else {
        if (!form.email) {
            error.email = 'Required field'
        } else if (!regexEmail.test(form.email.trim())) {
            error.email = 'Invalid email'
        }
        if (!form.password) {
            error.password = 'Required field'
        } else if (form.password.length < 8) {
            error.password = 'Verify that your password is 8 characters long'
        } else if (!form.confirmPassword) {
            error.confirmPassword = 'Required field'
        } else if (form.password !== form.confirmPassword) {
            error.confirmPassword = 'Passwords do not match'
        }
        if (!form.termsconditions) {
            error.termsconditions = 'You must accept terms and conditions.'
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
        if (!form.linea1) {
            error.linea1 = 'Required field'
        }
        if (!form.linea2) {
            error.linea2 = 'Required field'
        }
        if (!form.zipCode) {
            error.zipCode = 'Required field'
        }
        if (!form.province) {
            error.province = 'Required field'
        }
        if (!form.city) {
            error.city = 'Required field'
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
