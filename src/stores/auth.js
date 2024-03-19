import axios from "@/axios";
import { defineStore } from "pinia";
import { io } from "socket.io-client";
const URL = import.meta.env.VITE_BASE_URL_API;
export const useAuthStore = defineStore("authStore", {
  state: () => ({
    userData: {},
    token: "",
    rol: null,
    socketChat: null,
    socketNotification: null,
    notifications: [],
    aution: null
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
            this.userData = response.data
            if (localStorage.getItem('rol')) {
              this.rol = response.data.type
            }

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
              this.socketNotification.on("connect", () => {
                this.socketNotification.on("auctionUpdate", (response) => {
                  this.aution = response
                  console.log('auth auctionUpdate', response)

                });
                this.socketNotification.on("subscribedAuctionStarted", (response) => {
                  console.log('auth subscribedAuctionStarted', response)

                });
                this.socketNotification.on("bidExceeded", (response) => {
                  this.notifications = [...this.notifications, response]
                  const result = this.notifications.reduce((accumulator, current) => {
                    let exists = accumulator.find(item => {
                      return item.id === current.id;
                    });
                    if (!exists) {
                      accumulator = accumulator.concat(current);
                    }
                    return accumulator;
                  }, []);
                  this.notifications = result
                  console.log('auth bidExeeded', response)

                });
                this.socketNotification.on("bidsFinished", (response) => {
                  this.notifications = [...this.notifications, response]

                });
              });
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
    verifiedCodeEmail({ code, email }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/auth/validate-email/${code}`, {
            email: email
          })
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});

