<script>
import InputComponent from '@/components/Elements/InputComponent.vue';
import ButtonComponent from '@/components/Elements/ButtonComponent.vue';
import axios from 'axios';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    components: {
        InputComponent,
        ButtonComponent
    },
    methods: {
        async handleSubmit() {
            const url = import.meta.env.VITE_API_URL + '/login';
            await axios.post(url, {
                email: email.value,
                password: password.value
            }).then((res) => {
                const msg = res.data.message;
                if (res.data.status === false) {
                    toast(msg, {
                        "theme": "auto",
                        "type": "default",
                        "dangerouslyHTMLString": true
                    })
                    return false;
                }
                localStorage.setItem('token', res.data.data.token);
            })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>
<template>
    <div class="container">
        <form>
            <h1 class="text-center">Login</h1>
            <InputComponent :label="`Email`" :id="`email`" :type="`email`" :placeholder="`Enter email`"
                :model="email" />
            <InputComponent :label="`Password`" :id="`password`" :type="`password`" :placeholder="`Enter password`"
                :model="password" />
            <ButtonComponent :name="`Login`" @click="handleSubmit()" />
        </form>
    </div>
</template>
<style scoped lang="scss">
form {
    margin-top: 100px;
}
</style>
