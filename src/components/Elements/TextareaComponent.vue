<script setup>
const props = defineProps([
    'label',
    'id',
    'placeholder',
    'model',
    'rows'
]);

const emit = defineEmits(['handle-input']);
const handleTextArea = (e) => {
    emit('handle-input', [{
        model: props.model,
        data: e.target.value
    }]);
};

</script>
<template>
    <div class="form-group">
        <label :for="props.id">{{ props.label }}</label>
        <textarea
            class="form-control resize-none"
            :id="props.id"
            :placeholder="props.placeholder"
            :rows="props.rows"
            @input="handleTextArea"
        >
        </textarea>
    </div>
</template>
<style scoped lang="scss"></style>