import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const stepsSignUp = defineStore('stepsSignUp', () => {
    const formData = ref({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsconditions: null
    })
    const formAccount = ref({
        img: '',
        dealerName: '',
        registrationNumber: '',
        address: '',
        phoneNumber: '',
        preview: '',
        firtName: '',
        lastName: '',
        driverLicense: '',
        numberCode: '',
        previewDriverLicense: ''

    })
    const getSendData = ref(null)

    return { formData, formAccount, getSendData }
})
