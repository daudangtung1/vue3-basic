<script>
export default {
    name: 'post',
    data() {
        return {
            posts: [
                {
                    'name': 'abc',
                    'slug': 'def',
                },
                {
                    'name': 'abcd',
                    'slug': 'defe',
                }
            ]
        }
    },
}
</script>
<template>
    <div class="container">
        <div v-for="post in posts">
            <router-link :to="{name: 'post_detail', params: {slug: post.slug}}"> {{ post.name }} </router-link>
        </div>
    </div>
</template>