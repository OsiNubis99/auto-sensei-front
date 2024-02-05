import axios from "@/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    userData: {},
    token: "",
    cards: [
     /*  {
        bin: "424242",
        expirationMonth: "12",
        expirationYear: "2020",
        last4: "4242",
        cardType: "Visa",
        cardholderName: "Visa",
        expirationDate: "12/2020",
        maskedNumber: "**** **** **** 1423",
        nameCard: 'John Cenna'
      },
      {
        bin: "424242123123",
        expirationMonth: "06",
        expirationYear: "2021",
        last4: "4242",
        cardType: "MasterCard",
        cardholderName: "MasterCard",
        expirationDate: "06/2021",
        maskedNumber: "**** **** **** 7521",
        nameCard: 'Alfa Romeo'
      },
      {
        bin: "424242123123",
        expirationMonth: "06",
        expirationYear: "2021",
        last4: "4242",
        cardType: "MasterCard",
        cardholderName: "MasterCard",
        expirationDate: "06/2021",
        maskedNumber: "**** **** **** 6514",
        nameCard: 'Audi Ayunda'
      },
      {
        bin: "424242123123",
        expirationMonth: "06",
        expirationYear: "2021",
        last4: "4242",
        cardType: "MasterCard",
        cardholderName: "MasterCard",
        expirationDate: "06/2021",
        maskedNumber: "**** **** **** 5577",
        nameCard: 'Jessica Christie'
      } */
    ]
  }),
  persist: true,

  getters: {
    isLogued: (state) => state.token !== "",
  },
  actions: {
    login(payload) {
      console.log('payload', payload)
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/login", payload)
          .then((response) => {
            console.log('login', response)
            this.token = response.data.access_token
            localStorage.setItem('token', this.token)
            axios.defaults.headers['Authorization'] = `Bearer ${this.token}`;
            resolve(response);
          })
          .catch((error) => {
            console.log('error', error)
            reject(error);
          });
      });
    },
    register(payload) {
      console.log('payload', payload)
      return new Promise((resolve, reject) => {
        axios
          .post("/user", payload)
          .then((response) => {
            console.log('register', response)
            resolve(response);
          })
          .catch((error) => {
            console.log('error', error)
            reject(error);
          });
      });
    },
    recoverPassword(payload) {
      console.log('payload', payload)
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/forgotten-password", payload)
          .then((response) => {
            console.log('Recover password', response)

            resolve(response);
          })
          .catch((error) => {
            console.log('error', error)
            reject(error);
          });
      });
    },
    resendEmail(payload) {
      console.log('payload', payload)
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/send-email-validation", payload)
          .then((response) => {
            console.log('send-email-validation', response)

            resolve(response);
          })
          .catch((error) => {
            console.log('error', error)
            reject(error);
          });
      });
    },
    authProfile(payload) {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${payload.token}`

        }
      };
      console.log('PERAA', config)
      return new Promise((resolve, reject) => {
        axios
          .get("/auth/profile", config)
          .then((response) => {
            console.log('pepitooooooooooooooooooooo', response)
            response.data.payments = this.cards
            this.userData = response.data
            console.log('authProfile', response)
            resolve(response);
          })
          .catch((error) => {
            console.log('error', error)
            reject(error);
          });
      });
    },

  },
});

