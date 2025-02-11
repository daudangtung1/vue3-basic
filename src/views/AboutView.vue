<script>
import axios from 'axios';

export default {
  data() {
    return {}
  },

  async created() {
    const res = await axios.get('author', {
      headers: {
        Authorization: 'Beaver ' + localStorage.getItem('token')
      }
    })
    console.log(localStorage)
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
    <h1 @click="clickH1"></h1>
  </div>
</template>

<style scoped lang="scss"></style>
