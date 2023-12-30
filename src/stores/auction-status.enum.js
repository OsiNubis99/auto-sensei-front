import { ref } from 'vue'
import { defineStore } from 'pinia'

export const AuctionStatus = defineStore('AuctionStatus', () => {
    const num = ref(
        {
            deleted: 0,
            canceled: 1,
            draft: 2,
            unapproved: 3,
            upcoming: 4,
            live: 5,
            completed: 6,
        }
    )
    return { num }
})
