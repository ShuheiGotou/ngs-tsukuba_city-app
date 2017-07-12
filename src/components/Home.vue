<template>
  <div class="home">
    <h2>{{ title }}</h2>
    <router-link to="problems"> >> to problems</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: 'Welcome to App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
