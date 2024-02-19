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
    console.log('main auctionUpdate', response)

});
socketNotifications.on("subscribedAuctionStarted", (response) => {
    console.log('main subscribedAuctionStarted', response)

});
socketNotifications.on("bidExceeded", (response) => {
    console.log('main bidExeeded', response)

});
socketNotifications.on("bidsFinished", (response) => {
    console.log('main bidsFiniched', response)

});
export { socketNotifications };

