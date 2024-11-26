<script setup>
import { ref } from 'vue';

const props = defineProps([
    'type',
    'placeholder',
    'model'
])

const name = ref('');

/**
 * emit data: phai co defineEmits, va sau do dinh nghia emit sao cho trung voi thang cha ben ngoai
 */
const emitData = defineEmits(['handle-input']);

const getData = () => {
    emitData('handle-input', name.value);
}

</script>

<template>
    <input :type="props.type" :placeholder=props.placeholder :v-model="props.name" @keyup="getData">
    <br>
</template>
<style scoped lang="scss"></style>