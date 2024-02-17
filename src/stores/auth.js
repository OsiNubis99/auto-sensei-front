import axios from "@/axios";
import { defineStore } from "pinia";
import { io } from "socket.io-client";
const URL = import.meta.env.VITE_BASE_URL_API;
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
    ],
    rol: null,
    socketChat: null,
    socketNotification: null
  }),
  persist: true,

  getters: {
    isLogued: (state) => state.token !== "",
  },
  actions: {
    login(payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/login", payload)
          .then((response) => {
            this.token = response.data.access_token
            localStorage.setItem('token', this.token)
            axios.defaults.headers['Authorization'] = `Bearer ${this.token}`;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    register(payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/user", payload)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    recoverPassword(payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/forgotten-password", payload)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    resendEmail(payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/send-email-validation", payload)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    authProfile(payload) {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${payload?.token}`

        }
      };
      return new Promise((resolve, reject) => {
        axios
          .get("/auth/profile", payload && config)
          .then((response) => {
            response.data.payments = this.cards
            this.userData = response.data
            this.rol = response.data.type
            if (response.data.type !== 0) {
              this.socketChat = io(`${URL}message`, {
                auth: {
                  userId: response.data._id
                }
              })
              this.socketNotification = io(`${URL}notification`, {
                auth: {
                  userId: response.data._id
                }
              })
            }

            console.log(' this.userData', this.userData)
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

