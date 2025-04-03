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
                <!--  <div v-show="steps.step2">
                    <div id="pspdfkit" style="width: 100%; height: 90vh;"></div>

                </div> -->

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
        const pdf = ref(null)
        const dataBuffer = ref(null)

        const sutmibPDF = async (pdf) => {
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
                    if (res) {
                        showPdf.value = 'https://apidev.autosensei.ca/files/' + result.data
                        steps.value.step1 = false
                        steps.value.step2 = false
                        steps.value.step3 = true
                    }
                }
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
            const link = document.createElement('a');
            link.href = showPdf.value;
            link.target = '_blank';
            link.download = 'contect-file.pdf';

            // Simulate a click on the element <a>
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        }
        const next = async (step) => {
            if (step == 1) {
                steps.value.step1 = false
                steps.value.step2 = true
                loading.value = true
                if (steps.value.step2) {
                    //SIN LIBRERIA
                    let res = await props.acceptAution(pdf.value)
                    if (res) {
                        steps.value.step1 = false
                        steps.value.step2 = false
                        steps.value.step3 = true
                        loading.value = false
                    }
                    //CON LIBRERIA
                    /*  const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;
                     loading.value = false
                     if (!loading.value && steps.value.step2) {
                         PSPDFKit.load({
                             baseUrl,
                             licenseKey: 'HO2dV-bDcn32RCF6j2nDeKYNGqP1EOSnmSLLmbDrrdWJGwDq5yWsJs8pr31-EOKWXetRmJoBjUgv4AoEicoPgQw6Htu9foJBCUCWNZ2n7EvLcpMfoNLqokulJv87rHwmB9jnVIBTKGCZ7RKjGpERaDOl-JXfBFqdP6tSA07KKrsGh0k22IcAfwlevAAZNBOe72mr8i6D5tjXisarqg3a4vsSFuWyrmidugVCVPQsARlTZ5phlM3p4WSi032q6k3C7Zkt2UwLkGu6xfMy0u8wTOYLpjE8AMl5p4PC7j2I0WTVtrjYHLVyTJ-H0-bUUh1M_5pDIsK3YwHZNA5o5I0pnL70uk4nRPsvKL5hAxzI5e_PSWj8Oek73s6pf-htNu4PrL8YMfaX2KOo4tv3Q7Xsu6fhHOmkdvRn-UyCqQz8aJam2BZFpzXYndnfTToNV3v2PZ8ixUAzk03lKFvcThJg6wGTv1lo_AQ1zOx96eqaU069ZXuduPThRxd_i0zhEkGDfVKFaZWd03UaD0ZCDPWk5lSl0AuZJWFEKVyLQBLX2SDAf6z4m699tJ4jggOZoiQjD6rceOZUGAMCYAIMi4Z_6spoyIaAM4reyti70sY_K-Ccji1VNQKFlm0ne381Pyy298BJH2xQZnEPAWEtnFp1Xw==',
                             container: "#pspdfkit",
                             document: showPdf.value,
                         }).then(async function (instance) {
                             const items = instance.toolbarItems;
                             instance.setToolbarItems(items.filter((item) =>
                                 item.type !== "export-pdf" &&
                                 item.type !== "search" &&
                                 item.type !== "annotate" &&
                                 item.type !== "multi-annotations-selection" &&
                                 item.type !== "signature" &&
                                 item.type !== "debug" &&
                                 item.type !== "document-crop" &&
                                 item.type !== "document-editor" &&
                                 item.type !== "print" &&
                                 item.type !== "polyline" &&
                                 item.type !== "cloudy-polygon" &&
                                 item.type !== "polygon" &&
                                 item.type !== "ellipse" &&
                                 item.type !== "arrow" &&
                                 item.type !== "link" &&
                                 item.type !== "line" &&
                                 item.type !== "callout" &&
                                 item.type !== "note" &&
                                 item.type !== "rectangle" &&
                                 item.type !== "stamp" &&
                                 item.type !== "image" &&
                                 item.type !== "ink-eraser" &&
                                 item.type !== "text-highlighter" &&
                                 item.type !== "text" &&
                                 item.type !== "highlighter" &&
                                 item.type !== "ink" &&
                                 item.type !== "pan" &&
                                 item.type !== "pager" &&
                                 item.type !== "sidebar-layers" &&
                                 item.type !== "sidebar-thumbnails" &&
                                 item.type !== "sidebar-document-outline" &&
                                 item.type !== "sidebar-bookmarks" &&
                                 item.type !== "sidebar-signatures" &&
                                 item.type !== "sidebar-annotations"
 
                             ));
 
                             steps.value.step2 = true
                             const widget = new PSPDFKit.Annotations.WidgetAnnotation({
                                 id: PSPDFKit.generateInstantId(),
                                 pageIndex: 0,
                                 boundingBox: new PSPDFKit.Geometry.Rect({
                                     left: 108,
                                     top: 758,
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
 
                             instance.addEventListener("storedSignatures.create", async (annotation) => {
                                 const buffer = await instance.exportPDF({ flatten: true });
                                 dataBuffer.value = buffer
                                 sutmibPDF(buffer)
                             });
                             steps.value.step1 = false
                             steps.value.step2 = true
                             loading.value = false
                         })
                     }
 
                     
  */

                }

            }


        }
        const close = () => {
            statusModal.closeModal(false)
            if (steps.value.step2) {
                props.index()
            }

        }
        onMounted(() => {
            console.log("statusModal.dataAutiont", statusModal.dataAutiont);
            loading.value = true
            if (statusModal.dataAutiont.contract) {
                showPdf.value = 'https://apidev.autosensei.ca/files/' + statusModal.dataAutiont.contract;
                pdf.value = statusModal.dataAutiont.contract;
                loading.value = false;
            } else {
                axios
                    .get(`/auction/contract/${statusModal.dataAutiont._id}`)
                    .then(async (response) => {
                        pdf.value = response.data.contract;
                        showPdf.value = 'https://apidev.autosensei.ca/files/' + response.data.contract;
                        loading.value = false

                    })
            }
        })
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