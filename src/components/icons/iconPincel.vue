

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
            d="M6.6 2.57206L9.428 5.40072L2.828 12.0001H0V9.17139L6.6 2.57139V2.57206ZM7.54267 1.62939L8.95667 0.214722C9.08169 0.0897416 9.25122 0.0195312 9.428 0.0195312C9.60478 0.0195312 9.77432 0.0897416 9.89933 0.214722L11.7853 2.10072C11.9103 2.22574 11.9805 2.39528 11.9805 2.57206C11.9805 2.74883 11.9103 2.91837 11.7853 3.04339L10.3707 4.45739L7.54267 1.62939Z"
            fill="#fff" />
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