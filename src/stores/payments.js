import axios from "@/axios";
import { defineStore } from "pinia";
import moment from 'moment';
export const usePayments = defineStore("payments", {
    state: () => ({
        data: [],
    }),
    actions: {
        getCountry(params) {
            var config = {
                method: 'get',
                url: 'https://api.countrystatecity.in/v1/countries/CA/states/AB',
                headers: {
                    'X-CSCAPI-KEY': 'N1dCMW1kc3U1cG1wdkZTNVBGcHZaY0w5ekhQSnkyNkRVMXZkRGFSSA=='
                }
            };
            return new Promise((resolve, reject) => {
                axios(config)
                    .then((response) => {
                        console.log('HOLAAAAAAAAAAAAAAAAAAAA', JSON.stringify(response.data))
                        /*   this.data = response.data */
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        addPayment(payload) {
            console.log('BERRRR', payload)
            return new Promise((resolve, reject) => {
                axios
                    .post(`/user/payment_method`, payload)
                    .then((response) => {
                        console.log('response', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
});