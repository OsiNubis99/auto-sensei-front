import { regexEmail, regexPassword } from "../utils/Regex";

export const generalsInfo = (form) => {
    console.log("DATA VALIDACION generalsInfo ==>", form);
    let error = {};
    if (!form.numberVin) {
        error.numberVin = 'Required field'
    }
    if (!form.date) {
        error.date = 'Required field'
    }
    if (!form.province) {
        error.province = 'Required field'
    }
    if (!form.city) {
        error.city = 'Required field'
    }
    if (!form.keys) {
        error.keys = 'Required field'
    }
    if (!form.currently) {
        error.currently = 'Required field'
    }

    return error;
};

export const vehicleDetails = (form) => {
    console.log("DATA VALIDACION generalsInfo ==>", form);
    let error = {};
    if (!form.numberVin) {
        error.numberVin = 'Required field'
    }
    if (!form.year) {
        error.year = 'Required field'
    }
    if (!form.make) {
        error.make = 'Required field'
    }
    if (!form.model) {
        error.model = 'Required field'
    }
    if (!form.series) {
        error.series = 'Required field'
    }
    if (!form.bodyType) {
        error.bodyType = 'Required field'
    }
    if (!form.cylinder) {
        error.cylinder = 'Required field'
    }
    if (!form.transmission) {
        error.transmission = 'Required field'
    }
    if (!form.odometer) {
        error.odometer = 'Required field'
    }
    if (!form.doors) {
        error.doors = 'Required field'
    }
    if (!form.color) {
        error.color = 'Required field'
    }
    if (!form.driveTrain) {
        error.driveTrain = 'Required field'
    }
    if (!form.additionalPackages) {
        error.additionalPackages = 'Required field'
    }
    if (!form.tireCondition) {
        error.tireCondition = 'Required field'
    }
    if (!form.lastReplacement) {
        error.lastReplacement = 'Required field'
    }
    if (!form.brakePads) {
        error.brakePads = 'Required field'
    }
    if (!form.lastReplacement2) {
        error.lastReplacement2 = 'Required field'
    }
    if (!form.rotorCondition) {
        error.rotorCondition = 'Required field'
    }
    if (!form.lastReplacement3) {
        error.lastReplacement3 = 'Required field'
    }

    return error;
};