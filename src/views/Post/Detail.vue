<script>
    export default{
        name: 'post_detail',
        data() {
        return {
            post:
                {
                    'name': 'abc',
                    'slug': 'def',
                }
            }
        },
    }
</script>
<template>
    {{ post.name }}
</template>