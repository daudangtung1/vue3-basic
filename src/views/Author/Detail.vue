<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const author = ref(null);

const router = useRoute();

onMounted(() => {
    const slug = router.params.slug;
    const url = "http://127.0.0.1:8000/api/v1/author/" + slug;
    (async () => {
        const res = await fetch(url)
        const data = await res.json()
        author.value = data.data
    })()
})
</script>
<template>
    {{ author?.user_name }}
</template>
<style scoped></style>