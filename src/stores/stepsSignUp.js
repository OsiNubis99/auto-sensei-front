import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const stepsSignUp = defineStore('stepsSignUp', () => {
    const formData = ref({
        name: '',
        firtName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsconditions: null,

    })
    const formAccount = ref({
        img: '',
        dealerName: '',
        registrationNumber: '',
        address: '',
        linea1: '',
        linea2: '',
        zipCode: '',
        province: null,
        getState: null,
        city: null,
        getCities: null,
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
