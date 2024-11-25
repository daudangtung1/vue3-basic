<script setup>
onMounted(() => {
    fetch('http://127.0.0.1:8000/api/v1/author')
        .then(response => response.json())
        .then(json => authors.value = json.data)
})
</script>
<template>

</template>
<style scoped></style>