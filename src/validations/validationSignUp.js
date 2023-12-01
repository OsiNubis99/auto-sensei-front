export const createAccount = (form, rol) => {
    console.log("DATA VALIDACION ==>", form);
    console.log("DATA ROL ==>", rol);
    let error = {};

    if (rol == 'dealers') {
        if (!form.name) {
            error.name = 'Requerido'
        }
        if (!form.lastName) {
            error.lastName = 'Requerido'
        }
        if (!form.email) {
            error.email = 'Requerido'
        }
        if (!form.password) {
            error.password = 'Requerido'
        } else if (!form.confirmPassword) {
            error.confirmPassword = 'Requerido'
        } else if (form.password !== form.confirmPassword) {
            error.confirmPassword = 'Las contrasenas no coinciden'
        }
    } else {
        if (!form.email) {
            error.email = 'Requerido'
        }
        if (!form.password) {
            error.password = 'Requerido'
        } else if (!form.confirmPassword) {
            error.confirmPassword = 'Requerido'
        } else if (form.password !== form.confirmPassword) {
            error.confirmPassword = 'Las contrasenas no coinciden'
        }
    }

    return error;
};
export const infoAccount = (form, rol) => {
    console.log("DATA VALIDACION ==>", form);
    console.log("DATA ROL ==>", rol);

    let error = {};
    if (!form.img) {
        error.img = 'Requerido'
    }
    if (!form.dealerName) {
        error.dealerName = 'Requerido'
    }
    if (!form.registrationNumber) {
        error.registrationNumber = 'Requerido'
    }
    if (!form.address) {
        error.address = 'Requerido'
    }
    if (!form.phoneNumber) {
        error.phoneNumber = 'Requerido'
    }
    return error;
};
