<template>
  <div class="page">
    <TheHeader controls="on"/>
    <form class="login">
      <div class="login__input-wrapper">
        <input type="email" placeholder="Email" required="required">
      </div>
      <div class="login__input-wrapper">
        <input type="password" placeholder="Password" required="required">
      </div>
      <div class="login__input-wrapper login__input-select-wrapper">
        <select class="login-select" required="required" ref="select">
          <option value="" placeholder="placeholder">Location</option>
          <option value="location1">location1</option>
          <option value="location2">location2</option>
          <option value="location3">location3</option>
          <option value="location4">location4</option>
        </select>
      </div>
      <BaseButton variant="base"/>
    </form>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import BaseButton from '@/components/BaseButton'
import Choices from 'choices.js'

export default {
  components: {
    TheHeader,
    BaseButton
  },

  data() {
    return {
      selected: ''
    }
  },

  mounted() {
    new Choices(this.$refs.select, {
      searchEnabled: false
    });
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding-top: 48px;
  padding-left: 10px;
  padding-right: 10px;
}

.login input {
  height: 50px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  margin-bottom: 15px;

  border: none;
  background: #4b4b4b;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 300;
  color: #FFFFFF;
  letter-spacing: 0;
}

.login__input-select-wrapper {
  width: 50%;
}

.login-btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.login-select {
  display: block !important;
  position: absolute;
  opacity: 0;
  height: 0;
  pointer-events: none;
}
</style>
