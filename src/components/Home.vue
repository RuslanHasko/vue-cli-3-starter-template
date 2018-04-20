<template>
  <section class="home-component">
    <h1>{{ msg }}</h1>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Hello, world!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
