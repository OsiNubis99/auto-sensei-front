import { regexEmail, regexPassword } from "../utils/Regex";


export const validationsDealerBidding = (form, step, amount, from, showPayment, payment,user) => {
    let error = {};
    if (step.step1) {
        if (from == 'autoBid') {
            if (!form.placeyourbid) {
                error.placeyourbid = 'Required field'
            } else if (form.placeyourbid == 0) {
                error.placeyourbid = 'Required field'
            } else if (form.placeyourbid <= amount) {
                error.placeyourbid = 'Your bid is less than the minimum bid'
            }
            if (!form.notify) {
                error.notify = 'Required field'
            }
        }
        if (from == 'bidNow') {
            if (!form.placeyourbid) {
                error.placeyourbid = 'Required field'
            } else if (form.placeyourbid == 0) {
                error.placeyourbid = 'Required field'
            } else if (form.placeyourbid <= amount) {
                error.placeyourbid = 'Your bid is less than the minimum bid'
            }
        }

    }
    if (step.step2) {
        console.log('showPayment', showPayment)
        if (!showPayment) {
            if (!form.termsConditions) {
                error.termsConditions = 'Required field'
            }
            if (!payment?.card?.last4) {
                error.creditCard = 'Required field'
            }
        } else {
            if (!form.cardNumber) {
                error.cardNumber = 'Required field'
            }
            if (!form.nameOnCard) {
                error.nameOnCard = 'Required field'
            }
            if (!form.expiryDate) {
                error.expiryDate = 'Required field'
            }
            if (!form.cvv) {
                error.cvv = 'Required field'
            }
            if (!form.saveCard) {
                error.saveCard = 'Required field'
            }
            if (!form.termsConditions) {
                error.termsConditions = 'Required field'
            }
        }
    }
    return error;
};

export const validationsAutoBids = (form, step, amount, from, user) => {
    let error = {};

    if (!form.placeyourbid) {
        error.placeyourbid = 'Required field'
    } else if (form.placeyourbid <= amount) {
        error.placeyourbid = 'Your bid is less than the minimum bid'
    }
    if (!form.notify) {
        error.notify = 'Required field'
    }
    return error;
};

