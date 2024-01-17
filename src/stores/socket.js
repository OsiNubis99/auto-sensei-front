import axios from "@/axios";
import { defineStore } from "pinia";
import { io } from "socket.io-client";


export const useSockethStore = defineStore("socketStore", {

    state: () => ({
        connected: false,
        socket: null,
    }),
    actions: {
        connectIo(user) {
            const URL = import.meta.env.VITE_BASE_URL_API
            if (user) {
                this.socket = io(`${URL}message`, {
                    auth: {
                        userId: user._id
                    }
                });

            }

        },

    },
});

