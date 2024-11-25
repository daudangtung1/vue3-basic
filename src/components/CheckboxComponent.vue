<script setup>
import { ref } from 'vue';

const val = defineProps([
    'input',
    'slug',
]);

const refVal = ref(val.input)

const changeStatus = async (slug) => {
    if (slug == '') {
        alert('Fail');
        return false;
    }
    const url = 'http://127.0.0.1:8000/api/v1/author/' + slug;
    const inputVal = refVal.value == 1 ? 0 : 1;

    await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            is_active: inputVal
        })
    }).then(response => {
        console.log(response)
        return true;
    })
        .catch(error => {
            console.error(error);
        })
}

</script>
<template>
    <input type="checkbox" :checked="val.input == 1" checked @change="changeStatus(val.slug)">
</template>
<style scoped></style>