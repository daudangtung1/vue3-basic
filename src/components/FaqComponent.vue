<script>
export default {
    props: {
        question: String,
        answer: String,
        index: Number
    }
}
</script>
<template>
    <div class="faq-item flex flex-wrap">
        <div class="faq-item__question">
            <p> {{ index + 1 }}. {{ question }}</p>
        </div>
        <div class="faq-item__answer">
            <span class="fw-700">Answer:</span>
            <p class="f-16 fw-400 mb-0">
                {{ answer }}
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.faq-item {
    margin-bottom: 40px;

    &__question {
        width: 40%;
    }

    &__answer {
        width: calc(60% - 30px);
        padding-left: 30px;
    }


    @media screen and (max-width: 768px) {

        &__question,
        &__answer {
            width: 100%;
        }

        &__answer {
            padding-left: 0;
        }
    }
}
</style>