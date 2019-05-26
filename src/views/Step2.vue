<template>
  <div class="page">
    <TheHeader controls="on"/>
    <form class="form" @submit="onSubmit">
      <Truck type="frozen"/>
      <div class="truck-options">
        <Temperature @changeStatus="changeStatus" @changeRange="setRange" />
        <MultipleSelect @changeMultipleSelect="setSelected"/>
      </div>
      <div class="footer">
        <BackButton name="login"/>
        <div class="footer__buttons">
          <BaseButton :variant="status" />
          <BaseButton text="Reject" variant="base" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import Truck from '@/components/Truck'
import Temperature from '@/components/Temperature'
import BackButton from '@/components/BackButton'
import BaseButton from '@/components/BaseButton'
import MultipleSelect from '@/components/MultipleSelect'

export default {
  components: {
    TheHeader,
    Truck,
    Temperature,
    BackButton,
    BaseButton,
    MultipleSelect
  },

  data() {
    return {
      status: 'base',
      selected: [],
      range: null
    }
  },

  methods: {
    changeStatus(status) {
      this.status = status
    },

    setRange(range) {
      this.range = range
    },

    routerTo() {
      if (this.status === 'danger') {
        return 'step32'
      } else if (this.status === 'succes') {
        return 'step31'
      } else {
        return ''
      }
    },

    onSubmit(event) {
      event.preventDefault()
      this.$router.push(this.routerTo())
      console.log(this.selected, this.range)
    },

    setSelected(selected) {
      this.selected = selected
    }
  }
}
</script>

<style lang="scss" scoped>
.truck-options {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 17px;
  padding-left: 20px;
  padding-right: 20px;

  background: #4b4b4b;
}

.footer {
  position: relative;
  width: 100%;
}

.footer__buttons {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.footer .btn {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
