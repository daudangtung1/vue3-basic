<script setup>
import { reactive, ref } from 'vue';

const refValue = reactive({
    name: 'Dau Dang Tung',
    address: 'Nghe An'
});

const val = ref(0);

const clickButton = () => {
    refValue.address = 'Ha Noi';
    val.value = ++val.value;
}

</script>

<template>
    <div>
        {{ val }}
    </div>
    <button type="button" @click="clickButton">click</button>
</template>

<style scoped lang="scss"></style>