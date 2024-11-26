<script>
export default {
  data() {
  },
  methods: {
    clickH1() {
      console.log(123);
    }
  }
}
</script>
<template>
  <div class="about">
    <h1 @click="clickH1">This is an about page</h1>
  </div>
</template>

<style scoped lang="scss"></style>
