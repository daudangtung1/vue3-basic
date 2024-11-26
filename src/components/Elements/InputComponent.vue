<script setup>
const props = defineProps([
    'label',
    'id',
    'type',
    'placeholder',
    'model',
])

const emit = defineEmits(['handle-input']);

const getData = (e) => {
    setTimeout(() => {
        emit('handle-input', [
            {
                model: props.model,
                data: e.target.value
            }
        ], 1500);
    })
}
</script>

<template>
    <div class="form-group">
        <label :for="props.id">{{ props.label }}</label>
        <input class="form-control" :type="props.type" :placeholder="props.placeholder ?? ''" :id="props.id" @input="getData">
    </div>
</template>
<style scoped lang="scss"></style>