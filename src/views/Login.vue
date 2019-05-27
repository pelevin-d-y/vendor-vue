<template>
  <div class="page">
    <TheHeader controls="off"/>
    <form class="login" @submit="onSubmit">
      <div class="login__input-wrapper">
        <input type="email" name="email" placeholder="Email" v-model="email" required="required">
      </div>
      <div class="login__input-wrapper">
        <input type="password" name="password" placeholder="Password" v-model="password" required="required">
      </div>
      <div class="login__input-wrapper login__input-select-wrapper">
        <select class="login-select" name="location" required="required" ref="select" v-model="location">
          <option value="" placeholder="placeholder">Location</option>
          <option v-for="option in selectOptions" :value="option.last_name" :key="option.id">{{ option.last_name }}</option>
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
      location: '',
      password: '',
      email: '',
      selectOptions: [],
      isSelect: false
    }
  },

  async mounted() {
    const data = await this.$store.dispatch('getLoginSelect')
    this.selectOptions = data
    this.isSelect = true
    this.$nextTick(() => {
      new Choices(this.$refs.select, {
        searchEnabled: false
      });
    })
    
  },

  methods: {
    async onSubmit(event) {
      event.preventDefault()
      console.log('submit!', this.location, this.password, this.email)
      this.$store.commit('setUserLocation', this.location) // example VUEX mutation

      await this.$store.dispatch('getUsers') // example VUEX action
      console.log('this.$store.state', this.$store.state)
      this.$router.push('step2')
    }
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
