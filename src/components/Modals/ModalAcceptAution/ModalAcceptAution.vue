<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 flex items-end md:items-center z-50 md:justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-xl w-full overflow-hidden  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class=" p-2 md:p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p v-if="steps.step1" class=" text-sm md:text-xl text-white">Accept Auction</p>
                <p v-if="steps.step2" class=" text-sm md:text-xl text-white">Contract Auction</p>
                <p v-if="steps.step3" class=" text-sm md:text-xl text-white">Download Contract</p>
                <svg @click="close" xmlns="http://www.w3.org/2000/svg" class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer"
                    fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <template v-if="loading">
                <div class="w-full h-[30vh]">
                    <div class=" w-full h-full flex justify-center items-center">
                        <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                            <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
                                <div class="animate-bounce">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861"
                                        stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                        </path>
                                    </svg>
                                </div>
                                <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
                            </div>
                        </div>
                    </div>
                </div>

            </template>

            <template v-else>
                <div v-if="steps.step1" class=" p-2 md:p-4 flex md:gap-3 flex-col  ">
                    <div class="flex justify-start items-center gap-2">
                        <div class="flex gap-3 items-start ">
                            <div class=" w-[80px] md:w-[120px]   md:h-[90px]">
                                <img v-if="statusModal.dataAutiont?.photos"
                                    class="w-full h-full shadow-xl rounded-lg object-cover"
                                    :src="bucket + statusModal.dataAutiont?.photos[0].url" alt="">
                                <img class=" shadow-xl w-full h-full rounded-lg object-cover " v-else
                                    src="@/assets/img/jpg/image.jpg" alt="">
                            </div>
                            <div class="flex justify-between flex-col h-full">
                                <p class=" font-semibold capitalize md:text-base text-sm  ">{{
        statusModal.dataAutiont?.vehicleDetails?.year }} {{
        statusModal.dataAutiont?.vehicleDetails?.make }} {{
        statusModal.dataAutiont?.vehicleDetails?.model }}</p>
                                <p class="capitalize text-sm md:text-base ">Final Bid</p>
                                <p class="font-medium text-sm text-base-black md:text-2xl">${{
        statusModal.dataAutiont?.bids[0]?.amount }}/<span
                                        class="text-[#666666] mt-1 text-xs md:text-base ">{{
        statusModal.dataAutiont?.bids?.length }} Bids</span> </p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 border-[#E0E0E0] border-t-[1px]">
                        <div class="pt-4 ">
                            <p class="text-xs md:text-base">Are you sure you want to accept the final bid for the
                                <strong>
                                    {{ statusModal.dataAutiont?.vehicleDetails?.model }} </strong>?
                            </p>
                            <div class="flex pt-4 gap-2 items-center justify-between">
                                <button @click="close" class="btn w-full border border-[#E0E0E0] ">No</button>
                                <button @click="next(1)" class="btn w-full bg-primary rounded-md ">Yes</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-show="steps.step2">
                    <div id="pspdfkit" style="width: 100%; height: 70vh;"></div>

                </div>

                <div v-if="steps.step3" class="p-4 flex justify-center items-center flex-col gap-3">
                    <p class=" font-semibold capitalize md:text-xl">Final Bid Approved!</p>
                    <p class="capitalize text-xs md:text-base ">Download the Actual Sheet Below and Hand It to the Buyer
                        During the Vehicle
                        Drop-Off
                        Process.</p>
                    <div class="w-full">
                        <iframe class="w-full h-[60vh]" :src="showPdf" frameborder="0"></iframe>
                    </div>

                    <button @click="pdfDonwload" class="btn w-full bg-primary rounded-md">
                        Download PDF
                    </button>

                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { ModalAcceptAution } from '@/stores/modalAcceptAution';
import PSPDFKit from 'pspdfkit';
import axios from "@/axios";
export default {
    props: {
        form: {
            type: Object,
        },
        acceptAution: {
            type: Function
        },
        index: {
            type: Function
        }

    },
    setup(props) {
        const formData = ref(props.form)
        const getPdf = ref(null)
        const loading = ref(false)
        const statusModal = ModalAcceptAution()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const showPdf = ref('')
        const dataBuffer = ref(null)

        const sutmibPDF = async (pdf) => {
            console.log('recivied', pdf)
            loading.value = true
            try {
                const blob = new Blob([pdf], { type: 'application/pdf' }, { name: Date.now() + '.' + pdf.extension });
                const formData = new FormData();
                formData.append("file", blob);
                formData.append("location", 'test/pdf');
                const options = {
                    url: "/uploader/create",
                    method: 'POST',
                    headers: { 'content-type': 'multipart/form-data' },
                    data: formData
                };
                let result = await axios(options);
                if (result.data) {
                    let res = await props.acceptAution(result.data)
                    console.log('res', res)
                    if (res) {
                        showPdf.value = 'https://apidev.autosensei.ca/files/' + result.data
                        steps.value.step1 = false
                        steps.value.step2 = false
                        steps.value.step3 = true
                    }
                }
                console.log(result);
            } catch (e) {
                loading.value = false
                console.error("error", e);
            } finally {
                loading.value = false
            }
        }
        const steps = ref({
            step1: true,
            step2: false,
            step3: false
        })
        const pdfDonwload = () => {
            const supportsDownloadAttribute = HTMLAnchorElement.prototype.hasOwnProperty("download");
            const blob = new Blob([dataBuffer.value], { type: "application/pdf" });
            sutmibPDF(blob)
            if (navigator.msSaveOrOpenBlob) {
                navigator.msSaveOrOpenBlob(blob, "download.pdf");
            } else if (!supportsDownloadAttribute) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    const dataUrl = reader.result;

                    downloadPdf(dataUrl);
                };
                reader.readAsDataURL(blob);
            } else {
                const objectUrl = window.URL.createObjectURL(blob);
                downloadPdf(objectUrl);
                window.URL.revokeObjectURL(objectUrl);
            }
            function downloadPdf(blob) {
                const a = document.createElement("a");
                a.href = blob;
                a.style.display = "none";
                a.download = "download.pdf";
                a.setAttribute("download", "download.pdf");
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                close()
            }

        }
        const next = async (step) => {
            console.log('statusModal.dataAutiont', statusModal.dataAutiont)
            if (step == 1) {
                steps.value.step1 = false
                steps.value.step2 = true
                loading.value = true
                if (steps.value.step2) {
                    const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;
                    let pdf = null;
                    if (statusModal.dataAutiont.contract) {
                        let res = await props.acceptAution(statusModal.dataAutiont.contract)
                        if (res) {
                            showPdf.value = 'https://apidev.autosensei.ca/files/' + statusModal.dataAutiont.contract
                            steps.value.step1 = false
                            steps.value.step2 = false
                            steps.value.step3 = true
                            loading.value = false
                        }
                    } else {
                        axios
                            .get(`/auction/contract/${statusModal.dataAutiont._id}`)
                            .then(async (response) => {
                                console.log('resPDF', response)
                                let res = await props.acceptAution(response.data.contract)
                                if (res) {
                                    showPdf.value = 'https://apidev.autosensei.ca/files/' + response.data.contract
                                    steps.value.step1 = false
                                    steps.value.step2 = false
                                    steps.value.step3 = true
                                    loading.value = false
                                }

                            })
                    }
                    /*   if (!loading.value && steps.value.step2) {
                          PSPDFKit.load({
                              baseUrl,
                              container: "#pspdfkit",
                              document: 'https://apidev.autosensei.ca/files/' + pdf,
                          }).then(async function (instance) {
                              steps.value.step2 = true
                              const widget = new PSPDFKit.Annotations.WidgetAnnotation({
                                  id: PSPDFKit.generateInstantId(),
                                  pageIndex: 0,
                                  isEditable: false,
                                  locked: false,
                                  lockedContents: false,
                                  isReadOnly: true,
                                  boundingBox: new PSPDFKit.Geometry.Rect({
                                      left: 125,
                                      top: 740,
                                      width: 100,
                                      height: 20
                                  }),
                                  formFieldName: "my signature form field"
                              })
                              const formField = new PSPDFKit.FormFields.SignatureFormField({
                                  name: "my signature form field",
                                  annotationIds: new PSPDFKit.Immutable.List([widget.id])
                              });
                              await instance.create([widget, formField]);
                              instance.addEventListener("annotations.create", async (e) => {
                                  const buffer = await instance.exportPDF({ flatten: true });
                                  dataBuffer.value = buffer
                                  sutmibPDF(buffer)
  
                              });
                              instance.addEventListener("document.saveStateChange", async (event) => { })
                              steps.value.step1 = false
                              steps.value.step2 = true
                              loading.value = false
                          })
                      } */



                }

            }


        }
        const close = () => {
            statusModal.closeModal(false)
            if (steps.value.step2) {
                props.index()
            }

        }
        return {
            formData,
            statusModal,
            bucket,
            steps,
            next,
            close,
            loading,
            showPdf,
            pdfDonwload
        };
    },
};
</script>