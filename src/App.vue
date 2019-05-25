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
</style>
