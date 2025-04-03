import axios from "@/axios";
import { defineStore } from "pinia";
import moment from "moment";
import { enumState } from "../utils/auction-status.enum";
import { useAuthStore } from "@/stores/auth";
export const useAuctionSellerStore = defineStore("useAuctionSellerStore", {
  state: () => ({
    data: {},
    draft: [],
    unapproved: [],
    upcoming: [],
    live: [],
    completed: [],
    completedDelaer: [],
    canceled: [],
    currentBids: [],
    autionById: [],
    upcomingAmin: [],
    rejected: [],
    declined: [],
    stats: null,
  }),
  actions: {
    indexSeller(payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auction/find-my-auctions")
          .then((response) => {
            console.log("response ALLLLLLLLLLLLL =>", response);
            response.data.map((date, index) => {
              date.createHour = moment(date.createdAt).format("HH:mm A");
              date.createDay = moment(date.createdAt).format("LL");
              date.dropOffDateForma = moment(date.dropOffDate).format("LL");
              return date;
            });
            this.draft = response.data.filter((item) => item.status == enumState.draft);
            this.rejected = response.data.filter((item) => item.status == enumState.rejected);
            this.declined = response.data.filter((item) => item.status == enumState.declined);
            this.unapproved = response.data.filter((item) => item.status == enumState.unapproved);
            this.upcomingAmin = response.data.filter((item) => item.status == enumState.upcoming);
            this.upcoming = response.data.filter((item) => item.status == enumState.upcoming || item.status == enumState.unapproved);
            this.live = response.data.filter((item) => item.status == enumState.live);
            this.completed = response.data.filter((item) => item.status == enumState.completed || item.status == enumState.reviewed || item.status == enumState.bidsCompleted || item.status == enumState.dropOff);
            this.canceled = response.data.filter((item) => item.status == enumState.canceled);
            this.data = response.data;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
