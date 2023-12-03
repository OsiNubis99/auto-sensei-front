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
  },
});

export const validateToken = () => {
  return new Promise((resolve, reject) => {
    axios.get("api/user/auth")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
