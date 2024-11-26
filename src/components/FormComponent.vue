<script setup>
import InputComponent from './InputOldComponent.vue';

const handleGetInput = (value) => {
    // console.log(value)
}
</script>

<template>
    <InputComponent :type="`email`" :placeholder="`Email`" :model="`email`" @handle-input=handleGetInput>
    </InputComponent>
    <InputComponent :type="`password`" :placeholder="`Password`" :model="`password`" @handle-input=handleGetInput>
    </InputComponent>
    <button type="button" @click="handleSubmitForm">Submit</button>
</template>

<style scoped lang="scss"></style>