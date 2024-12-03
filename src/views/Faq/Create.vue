<script>
import axios from 'axios';

export default {
    name: 'faq-create',
    data() {
        return {
            faq: {
                question: '',
                answer: '',
                is_published: '',
            }
        }
    },
    methods: {
        save() {
            this.faq.is_published === '' ? this.faq.is_published = 0 : this.faq.is_published = 1;
            axios.post('http://127.0.0.1:8000/api/v1/faqs-store', this.faq)
                .then((res) => {
                    console.log(res.data.data)
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
            <div>
                <label for="" class="block">question</label>
                <input type="text" v-model="faq.question">
            </div>
            <div>
                <label for="" class="block">answer</label>
                <input type="text" v-model="faq.answer">
            </div>
            <div>
                <label for="" class="block">is published</label>
                <input type="checkbox" v-model="faq.is_published">
            </div>
            <div>
                <button type="button" @click="save">Submit</button>
            </div>
        </form>
    </div>
</template>
<style></style>