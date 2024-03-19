<template>
  <div class="w-screen h-screen flex flex-col justify-center gap-4 items-center">
    <div class="flex flex-col gap-2 w-[40vw] relative">
      <div v-if="loading"
        class="w-full h-full bg-[#000000a6] z-[10000]  absolute left-0 flex justify-center items-center">
        <div class="text-indigo-700">
          <div class="h-[80px] w-[80px] ">
            <div class="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff" stroke-width="0"
                viewBox="0 0 16 16">
                <path
                  d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                </path>
              </svg>
            </div>
            <p class="  font-medium pl-2 text-primary ">Loading...</p>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Card number</label>
        <input class="form-control" v-cardformat:formatCardExpiry>
      </div>
      <div v-if="arrayName.length > 0" v-for="(nameUpload, index) in arrayName" :key="index">
        <div class="flex justify-between border-b border-[#e5e5e5] pb-2 items-start gap-4 w-full">
          <div v-if="nameUpload.preview" class="w-16">
            <img class="w-15 object-cover h-15 rounded-lg shadow-lg" :src="nameUpload.preview" alt="">
          </div>
          <div v-if="!nameUpload.completed" class="w-full flex flex-col gap-2">
            <p class="capitalize">{{ nameUpload.name }}</p>
            <div class="bg-[#E5E5E5] whitespace-pre shadow-sm w-full rounded-full  h-4">
              <div :style="{ width: porcertanje + '%' }"
                class=" h-4 bg-primary flex justify-center items-center rounded-full shadow-progreess ">
                <p class="text-[10px] ">{{ porcertanje }} %</p>
              </div>
            </div>
          </div>
          <div v-else class="w-full flex flex-col gap-2">
            <p class="capitalize">{{ nameUpload.name }}</p>
            <div class="bg-[#E5E5E5] rounded-full  shadow-xl h-4">
              <div class=" w-full h-4 bg-primary flex justify-center items-center rounded-full">
                <p class="text-[10px]">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input v-if="!form.img.preview" type="file" @change="previewFiles($event, 'imagen')">
      <input v-if="!form.img1.preview" type="file" @change="previewFiles($event, 'imagen1')">
      <input v-if="!form.img2.preview" type="file" @change="previewFiles($event, 'imagen2')">
      <input v-if="!form.img3.preview" type="file" @change="previewFiles($event, 'imagen3')">
      <input v-if="!form.img4.preview" type="file" @change="previewFiles($event, 'imagen4')">
      <input v-if="!form.img5.preview" type="file" @change="previewFiles($event, 'imagen5')">
      <input v-if="!form.img6.preview" type="file" @change="previewFiles($event, 'imagen6')">
      <input v-if="!form.img7.preview" type="file" @change="previewFiles($event, 'imagen7')">
      <input v-if="!form.img8.preview" type="file" @change="previewFiles($event, 'imagen8')">
      <input v-if="!form.img9.preview" type="file" @change="previewFiles($event, 'imagen9')">
      <div class="space-y-1">
        <label htmlFor="password" class="block text-sm font-medium text-gray-700">
          Ingresa la ruta
        </label>
        <div class="mt-1">
          <input v-model="form" type="text" placeholder="/uploader/create"
            class="appearance-none block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
      </div>
      <button class="btn bg-primary" @click="sutmit">TEST</button>
      <p v-if="error" class="mt-6 rounded-lg h-2"> IDIOTA INGRESA LA <span class="text-error">URL</span> O <span
          class="text-error"> LA IMAGEN</span>
        PARA QUE NO TE DE ERROR</p>
    </div>
    <div>
   <!--    {{ dateTomorrow(9) }}
      <button @click="dateTomorrow(9)">probar fecha</button> -->
      {{ moment("2024-03-19T13:00:00.000Z").format('MMMM DD, h:mm: A') }}
      

    </div>

  </div>
  <div style="padding: 100px;">
    <h1>AQUI ESTA EL PDF</h1>
    <br>
    <br>
    <br>
    <br>
    <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; flex-direction: column; gap: 5px; justify-content: flex-start; align-items: start;">
        <h1 style="font-size: x-large; font-weight: 500;">Audi Queensway (2304718 Ontario Inc.)</h1>
        <p>1635 The Queensway</p>
        <p>Toronto, ON</p>
        <div style="display: flex; align-items: center; gap: 20px;">
          <p> M8Z 1T8 </p>
          <div style="display: flex; align-items: center; gap: 10px;">
            <p>Phone: (416) 259-7128</p>
            <p>Fax: (416) 259-2215</p>
          </div>

        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <p style="font-size: x-large; font-weight: 500;">Quote</p>
        <p>Wholesale Invoice #: <span style="letter-spacing: -3px;">________________________</span> </p>
      </div>
    </div>
    <div>
      <p style="font-weight: 600;">Sold to Purchaser:</p>
      <div style="display: flex; justify-content: space-between; width: 100%;">
        <div style=" width: 70%; display: flex; ">
          <div
            style=" width: 60%; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid black;">
            <p>ARI Financial Services</p>
            <p>1270 Central Parkway West</p>
            <p>Mississauga, ON</p>
            <p>L5C 4P4 </p>
            <p>Phone: (905) 803-8000 Fax:</p>
          </div>
          <div
            style="display: flex; width: 20%; justify-content: space-between; align-items: flex-end; flex-direction: column; border: 1px solid black;">
            <p>Dealer #</p>
            <p style="opacity: 0;">-------------------</p>
            <p>PST #</p>
            <p>GST/HST #</p>
            <p>RIN #</p>
          </div>
          <div style="display: flex; width: 20%; flex-direction: column; border: 1px solid black;">
            <p style="opacity: 0;">-------------------</p>
            <p style="opacity: 0;">-------------------</p>
            <p style="opacity: 0;">-------------------</p>
            <p style="opacity: 0;">-------------------</p>
          </div>
        </div>
        <div style="width: 30%;">
          <div style="display: grid; grid-template-columns: 1fr 1fr;">
            <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Quote #</p>
            <p style="font-size: medium;">558871</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr;">
            <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Invoice Date</p>
            <p style="font-size: medium;">3/27/2014</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr;">
            <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Our GST/HST Number</p>
            <p style="font-size: medium;">841194681</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr;">
            <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Our Dealer Number</p>
            <p style="font-size: medium;">5386354</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr;">
            <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Sales Rep</p>
            <p style="font-size: medium;">Mark Webber</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr;">
            <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Sales Rep Reg #</p>
            <p style="font-size: medium;">3224486</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p style="font-weight: 600;">Customer / Driver Information:</p>
      <div style="height: 180px; display: flex;align-items: center;">
        <div style=" width: 70%; height: 100%; border: 1px solid black; ">
          <p>Not Applicable</p>
        </div>
        <div style="width: 0%;">
          <p style="opacity: 0;">------------------</p>
        </div>

      </div>
      <div style="width: 100%; display: flex; position: relative;">
        <div
          style="display: grid; margin-top: 15px; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr; width: 70%; height: 180px; border: 1px solid black; ">
          <div
            style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; justify-content: center; grid-column: 1/3;">
            <p style=" text-align: center;  font-weight: 600;">Stock#:</p>
          </div>
          <div
            style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; grid-column: 3/7;">
            <p style=" font-weight: 600;">Vehicle:</p>
          </div>
          <div
            style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; justify-content: center; grid-column: 7/11;">
            <p style=" text-align: center;  font-weight: 600;">Serial#:</p>
          </div>
          <div
            style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; justify-content: center; grid-column: 11/13;">
            <p style="  text-align: center; font-weight: 600;">Total KMs</p>
          </div>
          <div
            style=" border: 1px solid black; grid-row: 2/5; grid-column: 1/3; width: 100%; height: 100%; align-items: center; justify-content: center;">
            <p style="text-align: center; margin-top: 10px;">79694</p>

          </div>
          <div
            style="width: 100%; border: 1px solid black; height: 100%;  grid-row: 2/5; display: flex; flex-direction: column; align-items: start; display: flex;  grid-column: 3/7;">
            <p>Demo 2014</p>
            <p>Audi A4 2.0 8sp Tiptronic Progr</p>
            <p>Moonlight Blue Met, Velvet Bei</p>
          </div>
          <div
            style="width: 100%; border: 1px solid black; height: 100%;  grid-row: 2/5; display: flex; flex-direction: column; align-items: center; display: flex;   grid-column: 7/11;">
            <p style=" text-align: center;">WAUFFCFLXEN004141</p>
            <p style=" text-align: center;">NA</p>
          </div>
          <div
            style="width: 100%; border: 1px solid black; height: 100%;  grid-row: 2/5; display: flex; flex-direction: column; align-items: center; display: flex;  grid-column: 11/13;">
            <p>3000</p>
          </div>
        </div>
        <div
          style="width: 30%;     border: 1px solid black;
    border-top: 0px; margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr;">
          <div
            style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; justify-content: center; grid-column: 1/6;">
            <p style=" text-align: center;  font-weight: 600;">Options:</p>
          </div>
          <div
            style=" border: 1px solid black; width: 100%; justify-content: center; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; grid-column: 6/9;">
            <p style=" font-weight: 600;">Price:</p>
          </div>
          <div
            style=" display: flex; flex-direction: column; grid-row: 2/5; grid-column: 1/6; width: 100%; height: 100%; justify-content: start;">
            <p style=" margin-top: 10px;">8K2P2A - A4 2.0 8sp Tiptronic Progres</p>
            <p> MET - Metallic/Pearl Effect Paint</p>
            <p>7X1 - Rear Parking System</p>
            <p>6W3 - Front License Plate Frame</p>
            <p style=" font-weight: 700; text-align: end; ">Vehicle Subtotal:</p>

            <p style=" margin-top: 10px;">Air Tax</p>
            <p>Freight & PDI</p>
            <p>OMVIC Fee</p>
            <p style=" font-weight: 700; text-align: end; ">Total List:</p>

          </div>
          <div
            style=" display: flex ; flex-direction: column; grid-row: 2/5; grid-column: 6/9; width: 100%; height: 100%;  align-items: flex-end;">
            <p style=" margin-top: 10px;">$45,500.00</p>
            <p>$800.00</p>
            <p>$400.00</p>
            <p>$0.00</p>
            <p style=" font-weight: 700; text-align: end; ">$46,700.00</p>

            <p>$100.00</p>
            <p>$1,995.00</p>
            <p>$5.00</p>
            <p style=" font-weight: 700; text-align: end; margin-top: 10px; ">$48,800.00</p>
          </div>
        </div>
        <div style="position: absolute; bottom: 0px; left: 0; display: flex; flex-direction: column; gap: 52px;">
          <div style="display: flex; flex-direction: column;">
            <p>Contact:</p>
            <p>
              Comments: This quote is not binding unless signed by authorized Dealer Management</p>
          </div>
          <div>
            <p style="font-size: large;">Searches performed: - Lien - Autocheck - Vehicle History</p>
          </div>

        </div>
      </div>

    </div>
    <div style="display: flex; gap: 15px; padding: 20px;">
      <div style="width: 70%;">
        <p>
          The above vehicle remains the property of the vendor and the title of the above
          vehicle shall not be transferred to the Purchaser until the Total Due to the vendor is
          paid in full. Once the Purchaser has accepted this vehicle and has taken delivery of
          this vehicle, the Purchaser accepts all risks of and liabilities for the vehicle. In
          the case where the vendor has not received full payment of the Balance Owing for this
          vehicle within 3 days of the Invoice Date hereof or if payment has been reversed,
          stopped or defaulted on, the vendor may repossess this vehicle at any time and without
          notice. Such repossession will be without liability to the vendor for any incurred
          damages and Purchaser will hold3Vendor harmless for any liability or loss caused by
          the repossession. Vendor may sell any such repossessed vehicle and the Purchaser
          agrees to pay the Vendor the balance of the Sales Price above plus applicable taxes.
          No warranties of any kind apply to this vehicle and none are expressed or implied. The
          Purchaser hereby accepts the Vehicle in As-Is condition.
        </p>
        <p>
          As the authorized officer for the Purchaser, I have read the terms on this page and
          the accompanying Vehicle History Disclosures making up this Agreement and agree that
          the vendor has not made any promises to me, nor are there any other terms relating
          to this Agreement except as written in this Agreement and that there are no
          representations whatsoever on the part of the Vendor which induce this Agreement.
        </p>
      </div>
      <div style="width: 30%; opacity: 0;">
        <p>----------------------</p>
      </div>
    </div>
    <div>
      <div style="width: 70%; display: flex; flex-direction: column; gap: 40px;">
        <div style="display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;gap:25px;">
          <div style="display:flex;gap:30px;grid-column: 1/5;width: 100%;">
            <p>Accepted by Purchaser:</p>
            <p style="letter-spacing: -3px;">____________________________________________</p>
          </div>
          <div style="display: flex;gap: 30px;grid-column: 5 / 9;width: 100%;">
            <div style="display: flex; text-align: center; gap: 30px;">
              <p>Reg. #</p>
              <p style="letter-spacing: -3px;">_________________</p>
            </div>
          </div>

        </div>
        <div style="display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;gap:25px;">
          <div style="display:flex;gap:30px;grid-column: 1/5;width: 100%;">
            <p>Accepted by Purchaser:</p>
            <p style="letter-spacing: -3px;">____________________________________________</p>
          </div>
          <div style="display: flex;gap: 30px;grid-column: 5 / 9;width: 100%;">
            <div style="display: flex; text-align: center; gap: 30px;">
              <p>Reg. #</p>
              <p style="letter-spacing: -3px;">_________________</p>
            </div>
          </div>

        </div>
      </div>

      <div style="width: 30%; opacity: 0;">
        <p>----------------------</p>
      </div>
    </div>
    <div style="width: 100%; margin-top: 20px; display: flex; justify-content: flex-end;">
      <p style="font-size: 12px;">Copyright 2024 ONE-EIGHTY CORP</p>
    </div>


  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useStoreFile } from "@/stores/uploader";
import moment from 'moment';
export default {
  components: {},
  setup() {
    const form = ref({
      img: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img1: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img2: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img3: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img4: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img5: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img6: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img7: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img8: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img9: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
    })
    const uploadName = ref('')
    const storeFile = useStoreFile()
    const progress = storeFile.progressUpload
    const error = ref(false)
    const loading = ref(false)
    const porcertanje = ref(0)
    const arrayName = ref([])
    const powerValue = ref(computed(() => { return storeFile.progressUpload }))
    const previewFiles = async (event, option) => {
      let files = event.target.files[0]
      var reader = new FileReader();
      reader.onload = (e) => {
        switch (option) {
          case 'imagen':
            form.value.img.file = files;
            form.value.img.name = option
            form.value.img.preview = e.target.result;
            break;
          case 'imagen1':
            form.value.img1.file = files;
            form.value.img1.name = option
            form.value.img1.preview = e.target.result;
            break;
          case 'imagen2':
            form.value.img2.file = files;
            form.value.img2.name = option
            form.value.img2.preview = e.target.result;
            break;
          case 'imagen3':
            form.value.img3.file = files;
            form.value.img3.name = option
            form.value.img3.preview = e.target.result;
            break;
          case 'imagen4':
            form.value.img4.file = files;
            form.value.img4.name = option
            form.value.img4.preview = e.target.result;
            break;
          case 'imagen5':
            form.value.img5.file = files;
            form.value.img5.name = option
            form.value.img5.preview = e.target.result;
            break;
          case 'imagen6':
            form.value.img6.file = files;
            form.value.img6.name = option
            form.value.img6.preview = e.target.result;
            break;
          case 'imagen7':
            form.value.img7.file = files;
            form.value.img7.name = option
            form.value.img7.preview = e.target.result;
            break;
          case 'imagen8':
            form.value.img8.file = files;
            form.value.img8.name = option
            form.value.img8.preview = e.target.result;
            break;
          case 'imagen9':
            form.value.img9.file = files;
            form.value.img9.name = option
            form.value.img9.preview = e.target.result;
            break;

          default:
            break;
        }

      }
      reader.readAsDataURL(event.target.files[0]);

    }
    watch(powerValue, async (newQuestion, oldQuestion) => {
      porcertanje.value = newQuestion
    })

    const sutmit = async () => {
      uploadName.value = form.value.img.name
      arrayName.value = [...arrayName.value, form.value.img]
      let res = await Promise.all([storeFile.uploaderFile({ file: form.value.img.file, location: form.value.img.name })])
      if (res[0]?.data) arrayName.value[0].completed = true
      uploadName.value = form.value.img1.name
      arrayName.value = [...arrayName.value, form.value.img1]
      let res1 = await Promise.all([storeFile.uploaderFile({ file: form.value.img1.file, location: form.value.img1.name })])
      console.log('res1', res1)
      if (res1[0]?.data) arrayName.value[1].completed = true
      uploadName.value = form.value.img2.name
      arrayName.value = [...arrayName.value, form.value.img2]
      let res2 = await Promise.all([storeFile.uploaderFile({ file: form.value.img2.file, location: form.value.img2.name })])
      if (res2[0]?.data) arrayName.value[2].completed = true


      uploadName.value = form.value.img3.name
      arrayName.value = [...arrayName.value, form.value.img3]
      let res3 = await Promise.all([storeFile.uploaderFile({ file: form.value.img3.file, location: form.value.img3.name })])
      if (res3[0]?.data) arrayName.value[3].completed = true


      uploadName.value = form.value.img4.name
      arrayName.value = [...arrayName.value, form.value.img4]
      let res4 = await Promise.all([storeFile.uploaderFile({ file: form.value.img4.file, location: form.value.img4.name })])
      if (res4[0]?.data) arrayName.value[4].completed = true


      uploadName.value = form.value.img5.name
      arrayName.value = [...arrayName.value, form.value.img5]
      let res5 = await Promise.all([storeFile.uploaderFile({ file: form.value.img5.file, location: form.value.img5.name })])
      if (res5[0]?.data) arrayName.value[5].completed = true


      uploadName.value = form.value.img6.name
      arrayName.value = [...arrayName.value, form.value.img6]
      let res6 = await Promise.all([storeFile.uploaderFile({ file: form.value.img6.file, location: form.value.img6.name })])
      if (res6[0]?.data) arrayName.value[6].completed = true


      uploadName.value = form.value.img7.name
      arrayName.value = [...arrayName.value, form.value.img7]
      let res7 = await Promise.all([storeFile.uploaderFile({ file: form.value.img7.file, location: form.value.img7.name })])
      if (res7[0]?.data) arrayName.value[7].completed = true


      uploadName.value = form.value.img8.name
      arrayName.value = [...arrayName.value, form.value.img8]
      let res8 = await Promise.all([storeFile.uploaderFile({ file: form.value.img8.file, location: form.value.img8.name })])
      if (res8[0]?.data) arrayName.value[8].completed = true


      uploadName.value = form.value.img9.name
      arrayName.value = [...arrayName.value, form.value.img9]
      let res9 = await Promise.all([storeFile.uploaderFile({ file: form.value.img9.file, location: form.value.img9.name })])
      if (res9[0]?.data) arrayName.value[9].completed = true
      console.log('arrayName.value', arrayName.value)
    }
    function dateTomorrow(startHour, startMin = 0) {
      let date = new Date()
      if (!startHour) return date
      let day = 24 * 60 * 60 * 1000
      date.setHours(startHour, startMin, 0, 0)
      date.setTime(date.getTime() + day)
      return date
    }
    onMounted(() => {
    })
    return {
      previewFiles,
      form,
      error,
      sutmit,
      loading,
      uploadName,
      storeFile,
      porcertanje,
      arrayName,
      dateTomorrow,
      moment
    };
  },
};
</script>
