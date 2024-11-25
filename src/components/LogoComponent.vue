<script setup>
</script>

<template>
    <div class="logo">
        <router-link :to="{ name: 'home' }">Art-app</router-link>
    </div>
</template>

<style scoped lang="scss">
.logo {
    a {
        font-size: 18px;
        font-weight: bold;
        color: aqua;
    }

}
</style>