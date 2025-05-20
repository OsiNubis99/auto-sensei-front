import axios from "axios";
import router from "@/router";

const authStore = localStorage.getItem("token");
let token = null;

if (authStore) {
  token = authStore;
}

const axiosIns = axios.create({
  // ================================
  // use BASE_URL_API
  baseURL: import.meta.env.VITE_BASE_URL_API,

  //   timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + token,
  },
});
// Add a response, si no hay token, redirige a login o si se recibe un 401
axiosIns.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if ((error.response.status === 401 && error.response.data.message === "Unauthenticated.") || error.message == "Network Error") {
      localStorage.removeItem("authStore");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosIns;
