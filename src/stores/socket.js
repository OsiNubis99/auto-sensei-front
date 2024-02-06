import axios from "@/axios";
import { defineStore } from "pinia";


export const useSockethStore = defineStore("socketStore", {

    state: () => ({
        socket: null,
    }),
    actions: {
        connectIo(sockets) {
            if (sockets) {
                this.socket = sockets
            }
        },
    },
});

