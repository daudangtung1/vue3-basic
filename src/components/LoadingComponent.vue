<script setup>
const emit = defineEmits(['handle-loading']);
const props = defineProps([
    'is_enable',
]);

</script>
<template>
    <div class="loader-wrap" v-if="props.is_enable === false" hidden >
        <div class="loader flex items-center justify-center"></div>
    </div>
</template>
<style scoped lang="scss">
.loader-wrap {
    background: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>