<script setup>
import LogoComponent from './LogoComponent.vue';
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
                    <li>
                        <RouterLink to="/about" class="header-link">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/authors" class="header-link">Author</RouterLink>
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