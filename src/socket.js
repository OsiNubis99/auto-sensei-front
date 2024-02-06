import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
    connected: false,
    fooEvents: [],
    barEvents: []
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.VITE_BASE_URL_API;
export const socketConnects = (user) => {
    let socket = null
    socket = io(`${URL}message`, {
        auth: {
            userId: user._id
        }
    });
    return socket
}


