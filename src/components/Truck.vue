<template>
  <div class="truck special">
    <div class="truck__time">10:55</div>
    <div class="truck__name">8276 - AUSA Dry Groc(GC PDC)</div>
    <div class="truck__arrow arrow"  v-if="type==='base'"></div>
    <div class="truck__temperature" v-if="type==='frozen'">Chill | Frozen</div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    validator: (value) => {
      return [
        'base',
        'frozen'
      ].indexOf(value) !== -1
    }
  }
}
</script>

<style lang="scss" scoped>
  .truck {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;

    min-height: 59px;
    padding: 3px 28px 3px 20px;
    
    font-size: 20px;
    color: #FFFFFF;
    text-decoration: none;

    background: #2B2B2B;
    -webkit-box-shadow: 0 1px 14px 0 rgba(0,0,0,0.10);
            box-shadow: 0 1px 14px 0 rgba(0,0,0,0.10);
    margin-bottom: 15px;
  }

  .truck__name {
    width: 100%;
    padding-left: 45px;
    padding-right: 45px;

    letter-spacing: 0.07px;
  }

  .truck__arrow {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
    -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
  }


.truck__temperature {
  flex: 1 0 auto;
  width: 93px;
  padding-top: 6px;
  align-self: flex-start;

  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0.05px;
  text-align: left;
}

  .truck.late::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: #DC382D;
  }

  .truck.special::before {
    content: '';
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    left: 86px;

    width: 11px;
    height: 11px;

    border-radius: 50%;
    background: #4A90E2;
  }
</style>
