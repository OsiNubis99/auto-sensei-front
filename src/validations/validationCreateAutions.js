import { regexEmail, regexPassword } from "../utils/Regex";


export const validateData = (form, step) => {
    console.log('form', form)
    let error = {};
    if (step == 'generalInformation') {
        if (!form.numberVinGenerals) {
            error.numberVinGenerals = 'Required field'
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
    }

    if (step == 'vehiclesDetails') {
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
    }
    if (step == 'UploadPhotos') {
        if (!form.document) {
            error.document = 'Required field'
        }
        if (!form.driverDocument) {
            error.driverDocument = 'Required field'
        }
        if (!form.frontPhoto) {
            error.frontPhoto = 'Required field'
        }
        if (!form.front) {
            error.front = 'Required field'
        }
        if (!form.driverSide) {
            error.driverSide = 'Required field'
        }
        if (!form.back) {
            error.back = 'Required field'
        }
        if (!form.passengerSide) {
            error.passengerSide = 'Required field'
        }
        if (!form.tireAndRim) {
            error.tireAndRim = 'Required field'
        }
        if (!form.driversDisplay) {
            error.driversDisplay = 'Required field'
        }
        if (!form.driversSide) {
            error.driversSide = 'Required field'
        }
        if (!form.centerConsole) {
            error.centerConsole = 'Required field'
        }
        if (!form.rearSeats) {
            error.rearSeats = 'Required field'
        }
        if (!form.vehicleDamage) {
            error.vehicleDamage = 'Required field'
        }
        if (!form.additionalDocuments) {
            error.additionalDocuments = 'Required field'
        }

        if (!form.vehicleVideo) {
            error.vehicleVideo = 'Required field'
        }
    }

    if (step == 'confirmation') {
        if (!form.numberVinGenerals) {
            error.numberVinGenerals = 'Required field'
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
        if (!form.document) {
            error.document = 'Required field'
        }
        if (!form.driverDocument) {
            error.driverDocument = 'Required field'
        }
        if (!form.frontPhoto) {
            error.frontPhoto = 'Required field'
        }
        if (!form.front) {
            error.front = 'Required field'
        }
        if (!form.driverSide) {
            error.driverSide = 'Required field'
        }
        if (!form.back) {
            error.back = 'Required field'
        }
        if (!form.passengerSide) {
            error.passengerSide = 'Required field'
        }
        if (!form.tireAndRim) {
            error.tireAndRim = 'Required field'
        }
        if (!form.driversDisplay) {
            error.driversDisplay = 'Required field'
        }
        if (!form.driversSide) {
            error.driversSide = 'Required field'
        }
        if (!form.centerConsole) {
            error.centerConsole = 'Required field'
        }
        if (!form.rearSeats) {
            error.rearSeats = 'Required field'
        }
        if (!form.vehicleDamage) {
            error.vehicleDamage = 'Required field'
        }
        if (!form.additionalDocuments) {
            error.additionalDocuments = 'Required field'
        }

        if (!form.vehicleVideo) {
            error.vehicleVideo = 'Required field'
        }
    }

    return error;
};
