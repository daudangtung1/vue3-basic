<script setup>
import { computed, onMounted, ref } from 'vue';
import CheckboxComponent from '@/components/CheckboxComponent.vue';
import SearchAuthorComponent from '@/components/SearchAuthorComponent.vue';
import axios from 'axios';

const formatDate = (value) => {
    return new Date(value).toLocaleDateString('ja', {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

const authors = ref([]);
const user_name = ref([''])

const url = 'http://127.0.0.1:8000/api/v1/author';

onMounted(() => {
    axios.get(url)
        .then(res => authors.value = res.data.data)
})

const getAuthor = (v) => {
    authors.value = v;
}

</script>
<template>
    <div class="container">
        <h1>Author</h1>
        <div class="flex justify-between items-center">
            <SearchAuthorComponent :model="user_name" @handle-search-author="getAuthor" />
            <div>
                <RouterLink :to="{ name: 'author_create' }">Create</RouterLink>
            </div>
        </div>
        <table class="w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Full name</th>
                    <th>Birthday</th>
                    <th>Description</th>
                    <th>Address</th>
                    <th>Active</th>
                    <th>Block</th>
                    <th>Author type</th>
                    <th>Slug</th>
                    <th>Created at</th>
                    <th colspan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(author, index) in authors">
                    <td> {{ index + 1 }}</td>
                    <td> {{ author.user_name }}</td>
                    <td> {{ author.full_name }}</td>
                    <td> {{ author.birth_day }}</td>
                    <td> {{ author.description }}</td>
                    <td> {{ author.address }}</td>
                    <td>
                        <CheckboxComponent :input="author.is_active" :slug="author.slug"></CheckboxComponent>
                    </td>
                    <td> {{ author.is_block }}</td>
                    <td> {{ author.author_type_id }}</td>
                    <td> {{ author.slug }}</td>
                    <td> {{ formatDate(author.created_at) }}</td>
                    <td>
                        <RouterLink :to="{ name: 'author_detail', params: { slug: author.slug } }">Edit</RouterLink>
                    </td>
                    <td><button type="button">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped lang="scss">
table {
    border-spacing: 0;
    border-bottom: 1px solid red;

    thead {
        th {
            border-right: 1px solid red;
            border-top: 1px solid red;
            border-left: 1px solid red;
            margin: 0;
        }

        &:last-child {
            border-right: 1px solid red;
        }
    }

    tbody {
        tr {
            td {
                border-right: 1px solid red;
                border-top: 1px solid red;
                border-left: 1px solid red;
                margin: 0;

                &:last-child {
                    border-right: 1px solid red;
                }
            }

            &:last-child {
                border-bottom: 1px solid red;
            }
        }
    }
}
</style>