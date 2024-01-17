import { regexEmail, regexPassword } from "../utils/Regex";


export const validationsDealerBidding = (form, step, amount) => {
    console.log('form', form)
    console.log('amount', amount)
    let error = {};
    if (step.step1) {
        if (!form.placeyourbid) {
            error.placeyourbid = 'Required field'
        } else if (form.placeyourbid == 0) {
            error.placeyourbid = 'Required field'
        } else if (form.placeyourbid <= amount) {
            error.placeyourbid = 'Your bid is less than the minimum bid'
        }
    }
    if (step.step2) {
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




    return error;
};
