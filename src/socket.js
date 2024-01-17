/* import { reactive } from "vue";
import { io } from "socket.io-client";
export const state = reactive({
    connected: false,
    fooEvents: [],
    barEvents: []
});
const URL = import.meta.env.VITE_BASE_URL_API ? import.meta.env.VITE_BASE_API_URL : "http://127.0.0.1:5173";
export const socket = io(`${URL}/messages`, {
    auth: {
        userId: 15447
    }
});

socket.on("connect", (io) => {
    console.log('connected')
    state.connected = true;
});

socket.on("disconnect", () => {
    console.log('disconnect')
    state.connected = false;
}); */