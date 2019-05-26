<template>
  <div class="home">
      <router-link to="login">
          Login
      </router-link>
       <router-link to="step2">
          Step2
      </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
}
</script>

<style scoped>
a {
  color: #ffffff;
}
</style>
