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
    aution: null,
    isSocketConnected: false,
  }),
  persist: true,

  getters: {
    isLogued: (state) => state.token !== "",
  },

  actions: {
    // Inicializar los sockets cuando se carga el store
    initSockets() {
      // Solo inicializa los sockets si el usuario está autenticado y tiene el rol adecuado
      if (this.userData?._id) {
        this.connectSockets();
      }
    },

    // Conectar sockets
    connectSockets() {
      if (!this.userData?._id) return;

      // Cerrar sockets existentes si los hay
      this.closeSockets();

      // Crear nuevos sockets
      this.socketChat = io(`${URL}message`, {
        auth: {
          userId: this.userData._id,
        },
      });

      this.socketNotification = io(`${URL}notification`, {
        auth: {
          userId: this.userData._id,
        },
      });

      // Configurar listeners del socket de notificaciones
      this.setupNotificationListeners();

      // Manejar la reconexión
      this.socketNotification.on("connect", () => {
        this.isSocketConnected = true;
      });

      this.socketNotification.on("disconnect", () => {
        this.isSocketConnected = false;
      });

      this.socketChat.on("connect", () => {});
    },

    // Configurar listeners para notificaciones
    setupNotificationListeners() {
      if (!this.socketNotification) return;

      this.socketNotification.on("auctionUpdate", (response) => {
        this.aution = response;
      });

      this.socketNotification.on("subscribedAuctionStarted", (response) => {});

      this.socketNotification.on("bidExceeded", (response) => {
        response.bidExceeded = true;
        this.notifications = [...this.notifications, response];
      });

      this.socketNotification.on("bidsFinished", (response) => {
        response.bidsFinished = true;
        this.notifications = [...this.notifications, response];
      });
    },

    // Cerrar sockets
    closeSockets() {
      if (this.socketChat) {
        this.socketChat.disconnect();
        this.socketChat = null;
      }

      if (this.socketNotification) {
        this.socketNotification.disconnect();
        this.socketNotification = null;
      }

      this.isSocketConnected = false;
    },

    login(payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/login", payload)
          .then((response) => {
            this.token = response.data.access_token;
            localStorage.setItem("token", this.token);
            axios.defaults.headers["Authorization"] = `Bearer ${this.token}`;

            // Cargar el perfil del usuario después de iniciar sesión
            this.authProfile()
              .then(() => {
                // Inicializar sockets después de cargar el perfil
                this.initSockets();
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    logout() {
      // Cerrar los sockets antes de cerrar sesión
      this.closeSockets();

      // Limpiar datos de usuario
      this.token = "";
      this.userData = {};
      this.rol = null;
      this.notifications = [];
      this.aution = null;

      // Limpiar localStorage
      localStorage.removeItem("token");

      // Limpiar headers de axios
      delete axios.defaults.headers["Authorization"];
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
      const token = payload?.token || this.token;
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      return new Promise((resolve, reject) => {
        axios
          .get("/auth/profile", token ? config : null)
          .then((response) => {
            this.userData = response.data;
            if (localStorage.getItem("rol")) {
              this.rol = response.data.type;
            }

            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    verifiedCodeEmail({ code, email }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/auth/validate-email/${code}`, {
            email: email,
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
