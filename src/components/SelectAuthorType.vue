<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const authorTypes = ref(['']);
const selectedAuthorType = ref(['']);

onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/v1/author-types')
        .then(res => authorTypes.value = res.data.data)
})

const emit = defineEmits(['handle-option']);

const handleOption = (e) => {
    selectedAuthorType.value = e.target.value
    emit('handle-option', {
        model: 'author_type_id',
        data: selectedAuthorType.value
    });
}

</script>
<template>
    <div class="form-group">
        <label for="authorType">Author type</label>
        <select id="authorType" class="form-control" v-model="selectedAuthorType" @input="handleOption">
            <option
                v-for="(authorType, index) in authorTypes"
                :value="authorType.id"
                :selected="index === 0"
                :key="authorType.id"
            >
                {{ authorType.name }}
            </option>
        </select>
    </div>
</template>
<style scoped lang="scss"></style>