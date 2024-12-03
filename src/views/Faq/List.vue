<script>
import axios from 'axios';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import FaqComponent from '@/components/FaqComponent.vue';

export default {
    name: 'Faq',
    data() {
        return {
            faqs: []
        }
    },
    components: {
        FaqComponent
    },
    created() {
        this.getList()
    },
    computed: {
        ...mapGetters(['name'])
    },
    methods: {
        getList() {
            axios.get('http://127.0.0.1:8000/api/v1/faqs')
                .then((res) => {
                    this.faqs = res.data.data.data
                })
                .catch((err) => console.log(err));
        },
        ...mapMutations(['setName']),
        ...mapActions(['updateProfile'])
    }
}
</script>
<template>
    <div class="container">
        <h1 class="text-center">Faqs</h1>
        <div v-for="(faq, index) in faqs">
            <FaqComponent :question=faq.question :answer="faq.answer" :index="index" />
        </div>
    </div>
</template>
<style scoped lang="scss">
h1 {
    margin-bottom: 40px;
}
</style>