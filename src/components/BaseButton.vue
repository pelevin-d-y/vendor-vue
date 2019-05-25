<template>
  <button :class="['btn', variant]">Next</button>
</template>

<script>
export default {
  props: {
    text: String,
    variant: {
      type: String,
      validator: (value) => {
        return [
          'base',
          'succes',
          'danger',
          'disabled'
        ].indexOf(value) !== -1
      }
    } 
  },

}
</script>

<style lang="scss" scoped>
  .btn {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    width: 155px;
    height: 50px;
    margin-top: 15px;

    border: none;
    font-weight: 300;
    border-radius: 6px;
    background: #333333;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  .succes {
    background: #4A90E2;
  }

  .danger {
    background: #A0453F;
  } 

  .disabled {
    pointer-events: none;
  }
</style>