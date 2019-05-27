<template>
  <router-link class="back" :to="name">
    <span class="back__icon"></span>
  </router-link>
</template>
<script>
export default {
  props: ['name']

}
</script>

<style>
.back {
  position: absolute;
  bottom: 0;
  left: 10px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  background: #333333;
  border-radius: 8px;
}

.back__icon {
  display: block;
  width: 17px;
  height: 24px;
  margin-right: 3px;

  background: url('../assets/images/back.svg') no-repeat center/contain;
}
</style>
