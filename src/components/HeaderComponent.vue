<script>
import LogoComponent from './LogoComponent.vue';

export default {
    data() {
        return {
            isLogin: false
        }
    },

    components: {
        LogoComponent
    },
    methods: {
        checkToken() {
            const token = localStorage.getItem('token');
            if (token !== null) {
                this.isLogin = true;
            }
        },
        logout() {
            localStorage.removeItem('token');
            this.isLogin = false;
        }
    },
    mounted() {
        this.checkToken();
    },
}

</script>
<template>
    <header class="flex items-center">
        <div class="container">
            <nav class="flex justify-between items-center">
                <LogoComponent></LogoComponent>
                <ul class="flex justify-center items-center">
                    <li>
                        <RouterLink to="/" class="header-link">Home</RouterLink>
                    </li>
                    <li v-if="isLogin === false">
                        <RouterLink to="/login" class="header-link">Login</RouterLink>
                    </li>
                    <li v-if="isLogin === false">
                        <RouterLink to="/register" class="header-link">Register</RouterLink>
                    </li>
                    <li v-if="isLogin === true">
                        <a href="javscript:void(0)" class="text-white" @click="logout()">Logout</a>
                    </li>
                    <li>
                        <RouterLink to="/about" class="header-link">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/faq" class="header-link">Faq</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style scoped lang="scss">
header {
    background-color: #484040;
    height: 45px;

    nav {
        ul {
            list-style-type: none;
            padding: 0;

            li {
                display: block;
                margin-right: 10px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .header-link {
        color: #fafafa;

        &:hover {
            color: #00e59b;
        }
    }
}
</style>