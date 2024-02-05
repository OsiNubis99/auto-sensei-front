<template>
    <div class="w-full relative flex flex-col gap-2">
        <label class="text-base font-medium">{{ label }}</label>
        <input class="p-2  rounded-lg border border-[#C2C2C2] uppercase"
            :class="error && 'bg-[#F6E9E9] border border-[#FF333E] text-[#0A0A0A]'" ref="inputRef" type="text"
            :placeholder="placeHolder" />
        <p v-if="error" class="text-[#FF333E] whitespace-pre absolute -bottom-8">{{ error?.placeyourbid }}</p>
    </div>
</template>
  
<script>
import { useCurrencyInput } from 'vue-currency-input'
import { ref, onMounted, watch } from "vue";
export default {
    name: 'CurrencyInput',
    props: {
        modelValue: {
            type: Number
        },
        options: {
            type: Object
        },
        placeHolder: {
            type: String
        },
        label: {
            type: String
        },
        error: {
            type: Boolean
        }
    },
    setup(props) {
        const { inputRef } = useCurrencyInput(props.options)
        const placeHolder = props.placeHolder
        const label = props.label
        const error = ref(props.error)

        return { inputRef, placeHolder, label, error }
    }
}
</script>