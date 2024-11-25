<script setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const inputData = reactive({
    email: '',
    password: '',
    user_name: '',
    full_name: '',
    birth_day: '',
    description: '',
    address: '',
    slug: '',
    author_type_id: ''
})

const submitType = ref('');

const handleSubmitForm = async () => {
    const url = 'http://127.0.0.1:8000/api/v1/author/store';
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
        const data = await res.json();
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
const router = useRoute();
const slug = router.params.slug;
if (!slug) {
    submitType.value = 'create';
}
console.log(submitType.value)
</script>
<template>
    <div class="container">
        <form>
            <div>
                <label for="email">Email</label><br>
                <input id="email" type="email" v-model="inputData.email">
            </div>
            <div>
                <label for="password">Password</label><br>
                <input id="password" type="password" v-model="inputData.password">
            </div>
            <div>
                <label for="user_name">Username</label><br>
                <input id="user_name" type="text" v-model="inputData.user_name">
            </div>
            <div>
                <label for="full_name">Full name</label><br>
                <input id="full_name" type="text" v-model="inputData.full_name">
            </div>
            <div>
                <label for="birth_day"></label><br>
                <input id="birth_day" type="date" v-model="inputData.birth_day">
            </div>
            <div>
                <label for="description">Description</label><br>
                <textarea id="description" v-model="inputData.description"></textarea>
            </div>
            <div>
                <label for="address">Address</label><br>
                <textarea id="address" v-model="inputData.address"></textarea>
            </div>
            <div>
                <label for="slug">Slug</label><br>
                <input type="text" id="slug" v-model="inputData.slug">
            </div>
            <div>
                <label for="author_type_id">Author type</label><br>
                <select id="author_type_id" v-model="inputData.author_type_id">
                    <option value="1">Normal</option>
                    <option value="2">Special</option>
                </select>
            </div>
            <RouterLink :to="{ name: 'authors' }">Back</RouterLink>
            <button type="button" @click="handleSubmitForm">Submit</button>
        </form>
    </div>
</template>
<style scoped lang="scss"></style>