<script setup>
import { ref } from 'vue';


const input = ref(['']);

const handleInputSearch = (value) => {
    console.log(value);
}
</script>
<template>
    <div>
        <input type="text" v-model="user_name" @change="handleInputSearch()">
    </div>
</template>
<style scoped lang="scss"></style>