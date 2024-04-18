import axios from "@/axios";
import { defineStore } from "pinia";
export const useContactStore = defineStore("contactStore", {
    state: () => ({}),
    actions: {
        sendContact(data) {
            return new Promise((resolve, reject) => {
                axios.post("/contact", data)
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
