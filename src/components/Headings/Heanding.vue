<template>
    <div>
        <h1 v-if="type === 'h1'" class="heading h1">
            {{ msg }}
        </h1>
        <h2 v-if="type === 'h2'"
            :class="[(color ? color : 'text-white'), 'text-center pb-5  text-3xl sm:text-4xl md:text-6xl font-bold md:leading-[72px]']">
            {{ msg }}
        </h2>
        <h3 v-if="type === 'h3'" :class="color ? color : 'text-white'"
            class="text-left  text-2xl md:text-5xl font-bold leading-[40px] md:leading-[58px]">
            {{ msg }}
        </h3>
        <h4 v-if="type === 'h4'" class="heading h4">
            {{ msg }}
        </h4>
        <h5 v-if="type === 'h5'" class="heading h5">
            {{ msg }}
        </h5>
        <h6 v-if="type === 'h6'" class="heading h6">
            {{ msg }}
        </h6>
    </div>
</template>
  
<script>
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        msg: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,

        }
    },
    setup(props) {
        let type = props.type
        let msg = props.msg
        let color = props.color
        return {
            type,
            msg,
            color
        };
    },
}
</script>