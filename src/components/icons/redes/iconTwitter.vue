<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" :fill="color">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M21.5859 21.375L14.0885 10.4471L14.1013 10.4574L20.8613 2.625H18.6023L13.0954 9L8.72227 2.625H2.79766L9.79723 12.8276L9.79638 12.8267L2.41406 21.375H4.67309L10.7955 14.2824L15.6613 21.375H21.5859ZM7.82719 4.32954L18.3466 19.6705H16.5564L6.02852 4.32954H7.82719Z"
            fill="white" />
    </svg>
</template>
<script>
export default {
    props: {
        iconName: {
            type: String,
            default: 'box'
        },
        color: {
            type: String,
            default: '#fff'
        }
    }
}
</script>