<script setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import InputComponent from '@/components/Elements/InputComponent.vue';
import TextareaComponent from '@/components/Elements/TextareaComponent.vue';
import SelectAuthorType from '@/components/SelectAuthorType.vue';
import ButtonComponent from '@/components/Elements/ButtonComponent.vue';
import axios from 'axios';

const inputData = reactive({
    email: '',
    password: '',
    user_name: '',
    full_name: '',
    birth_day: '',
    description: '',
    address: '',
    slug: '',
    author_type_id: '',
    phone: ''
})

const handleInputData = (data) => {
    if (data[0].model === 'user_name' && data[0].data != '') {
        let slug = replaceToSlug(data[0].data);
        inputData.slug = slug;
        document.querySelector('#slug').value = inputData.slug;
    }
    inputData[data[0].model] = data[0].data;
}

let replaceToSlug = (slug) => {
    let str = slug.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    str = str.replace(/[^\w\s-]/g, '');
    str = str.replace(/\s+/g, '-');
    return str;
}

const handleSelectData = (data) => {
    let model = data.model;
    inputData[model] = data.data;
}

const submitType = ref('');

const handleSubmitForm = async () => {
    const url = 'http://127.0.0.1:8000/api/v1/author/store';
    await axios.post(url, inputData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
const router = useRoute();
const slug = router.params.slug;
if (!slug) {
    submitType.value = 'create';
}

</script>
<template>
    <div class="container">
        <form>
            <InputComponent :label="`Email`" :id="`email`" :placeholder="`Enter email`" :type="`email`" :model="`email`"
                v-model="inputData.email" @handle-input=handleInputData />

            <InputComponent :label="`Password`" :id="`password`" :placeholder="`Enter password`" :type="`password`"
                :model="`password`" v-model="inputData.password" @handle-input=handleInputData />

            <InputComponent :label="`Username`" :id="`user_name`" :placeholder="`Enter username`" :type="`text`"
                :model="`user_name`" v-model="inputData.user_name" @handle-input=handleInputData />

            <InputComponent :label="`Slug`" :id="`slug`" :placeholder="`Enter slug`" :type="`text`" :model="`slug`"
                v-model="inputData.slug" @handle-input=handleInputData />

            <InputComponent :label="`Full name`" :id="`full_name`" :placeholder="`Enter full name`" :type="`text`"
                :model="`full_name`" v-model="inputData.full_name" @handle-input=handleInputData />

            <InputComponent :label="`Birth_day`" :id="`birth_day`" :type="`date`" :model="`birth_day`"
                v-model="inputData.birth_day" @handle-input=handleInputData />

            <InputComponent :label="`Phone number`" :id="`phone`" :type="`text`" :model="`phone`"
                v-model="inputData.phone" @handle-input=handleInputData />

            <TextareaComponent :label="`Description`" :id="`description`" :model="`description`" :rows="`2`"
                v-model="inputData.description" @handle-input=handleInputData />

            <TextareaComponent :label="`Address`" :id="`address`" :model="`address`" :rows="`2`"
                v-model="inputData.address" @handle-input=handleInputData />

            <SelectAuthorType @handle-option="handleSelectData" />

            <div class="flex justify-between aligns-center">
                <RouterLink :to="{ name: 'authors' }">Back</RouterLink>
                <ButtonComponent :name="`Submit`" @click="handleSubmitForm" />
            </div>
        </form>
    </div>
</template>
<style scoped lang="scss">
.container {
    padding: 50px 0;
}

form {
    margin: 0 auto;
}

@media screen and (min-width: 320px) {
    form {
        padding: 0 15px;
    }
}

@media screen and (min-width: 576px) {
    form {
        width: 100%;
        padding: 0;
    }
}

@media screen and (min-width: 992px) {
    form {
        width: 50%;
    }
}
</style>