<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  background: #1a1a1a;
}

body {
  min-height: 350px;

  background: #1a1a1a;
  color: #FFFFFF;
  font-weight: 300;
  font-family: Helvetica, Roboto;
  font-size: 20px;
}

.container {
  padding-left: 10px;
  padding-right: 10px;
}

.page {
  padding-top: 47px;
}

.is-hidden {
  display: none;
}

.arrow {
  width: 9px;
  height: 16px;
  background: url('./assets/images/arrow.svg') no-repeat center/contain;
}

a {
  text-decoration: none;
}

.disabled {
  pointer-events: none;
}
</style>
