<script setup>
import axios from 'axios';
import { debounce } from 'lodash';
import InputComponent from './Elements/InputComponent.vue';

const emit = defineEmits(['handle-search-author']);
const handleInputSearch = debounce(e => {
    const url = import.meta.env.VITE_API_URL + '/author';
    axios.get(url, {
        params: { query: e.target.value }
    }).then((res) => {
        emit('handle-search-author', res.data.data)
    }).catch((err) => {
        console.log(err);
    })
}, 1500);
</script>
<template>
    <div>
        <InputComponent :type="text" @input="handleInputSearch" />
    </div>
</template>
<style scoped lang="scss"></style>