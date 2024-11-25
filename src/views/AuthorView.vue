<script setup>
import { computed, onMounted, ref } from 'vue';
import CheckboxComponent from '@/components/CheckboxComponent.vue';
import SearchAuthorComponent from '@/components/SearchAuthorComponent.vue';

const formatDate = (value) => {
    return new Date(value).toLocaleDateString('ja', {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

const authors = ref([]);
const user_name = ref(['']);

onMounted(() => {
    (async () => {
        const res = await (fetch('http://127.0.0.1:8000/api/v1/author'))
        const data = await res.json();
        authors.value = data.data;
    })()
})

const authorFilter = computed(() => {
    return authors.value.filter(item => item.user_name.indexOf(user_name.value) !== -1)
})

// const getAuthor = async (slug) => {
//     if (slug === '') {
//         alert('Slug undefined');
//         return false;
//     }

//     let url = 'http://127.0.0.1:8000/api/v1/author/' + slug;
//     try {
//         const res = await fetch(url).then(response => response.json())
//         console.log(res)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }


</script>
<template>
    <div class="container">
        <h1>Author</h1>
        <div class="flex justify-between">
            <input type="text" v-model="user_name">
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
                <tr v-for="(author, index) in authorFilter">
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
            border-left: 0;
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
                border-left: 0;
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