import axios from "@/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    userData: {},
    token: "",
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
            console.log('response', response)
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
          .post("/user/register", payload)
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

