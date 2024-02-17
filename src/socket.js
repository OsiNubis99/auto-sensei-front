import { io } from "socket.io-client";
import { reactive } from "vue";
import axios from "@/axios";
const URL = import.meta.env.VITE_BASE_URL_API;
let token = null;
token = localStorage.getItem('token')
let user = null;
let socketChat = null;
let socketNotifications = null

if (token) {
    axios
        .get("/auth/profile")
        .then((response) => {
            socketNotifications = io(`${URL}notification`, {
                auth: {
                    userId: response.data._id
                }
            })
        })
        .catch((error) => {
            reject(error);
        });
}

socketNotifications.on("auctionUpdate", (response) => {
    console.log('auctionUpdate', response)

});
socketNotifications.on("subscribedAuctionStarted", (response) => {
    console.log('subscribedAuctionStarted', response)

});
socketNotifications.on("bidExeeded", (response) => {
    console.log('bidExeeded', response)

});
socketNotifications.on("bidsFiniched", (response) => {
    console.log('bidsFiniched', response)

});
export { socketNotifications };

