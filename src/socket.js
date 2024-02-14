import { reactive } from "vue";
import { io } from "socket.io-client";
import axios from "@/axios";
const URL = import.meta.env.VITE_BASE_URL_API;
let token = null;
token = localStorage.getItem('token')
let user = null;
let socket = null;

if (token) {
    axios
        .get("/auth/profile")
        .then((response) => {
            console.log('response USER IO', response.data._id)
            socket = io(`${URL}message`, {
                auth: {
                    userId: response.data._id
                }
            })
        })
        .catch((error) => {
             
            reject(error);
        });
}

export { socket };

/* import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
    connected: false,
    fooEvents: [],
    barEvents: []
});
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
 */

