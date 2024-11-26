<script setup>
const props = defineProps([
    'name',
])

</script>
<template>
    <button type="button" @click="handleSubmitForm" class="btn btn-primary">
        {{ props.name }}
    </button>
</template>
<style scoped lang="scss"></style>