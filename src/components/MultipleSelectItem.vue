<template>
  <div :class="{'item': true, 'checked': this.checked}" @click="itemHandler">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ['text', 'handler', 'value'],

  data() {
    return {
      checked: false
    }
  },

  methods: {
    itemHandler() {
      this.checked = !this.checked
      this.handler(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 54px;
  width: 90%;

  &::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 20px;
    top: 10px;

    display: block;
    width: 18px;
    height: 18px;
    
    border: 2px solid #979797;
    border-radius: 2px;
  }

  &.checked::after {
    border: none;
    background: url('../assets/images/checkbox.svg') no-repeat center/contain;
  }
}
</style>
