<template>
  <header 
    :class="{header: true, 'menu-open': menuOpen}"
    @click="menuOpen=!menuOpen"
  >
    <div class="header__container container">
      <div class="header__burger" v-if="controls==='on'"></div>
      <div class="header__logo">
        <div class="header__logo-img"></div>
        <div class="header__logo-text">Vendor Check-In (GAN)</div>
      </div>
      <div class="header__date" v-if="controls==='on'">5/10/19</div>
    </div>
    <div class="menu" v-if="controls==='on'">
      <ul class="menu__list">
        <li class="menu__item scheduled"><a href="#">Scheduled</a></li>
        <li class="menu__item unscheduled"><a href="#">Unscheduled</a></li>
        <li class="menu__item logout"><a href="#">Log Out</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    controls: {
      type: String,
      required: true,
      validator: (value) => {
        return [
          'on',
          'off'
        ].indexOf(value) !== -1
      }
    } 
  },

  data() {
    return {
      menuOpen: false
    }
  }

}
</script>

<style lang="scss" scoped>
  .header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: -webkit-box;

  display: -ms-flexbox;

  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;

  height: 28px;
  width: 100%;
  padding-bottom: 4px;
  
  font-size: 14px;
  background: #1a1a1a;
}

.header__container {
  position: relative;
  z-index: 990;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

  width: 100%;
  padding-left: 13px;
  padding-right: 13px;
}

.menu-open .header__burger {
  background: none;
}

.menu-open .header__burger::after,
.menu-open .header__burger::before {
  content: '';
  position: absolute;
  top: 6px;
  left: -2px;
  display: block;
  width: 18px;
  height: 2px;
  background: #ffffff;
} 

.menu-open .header__burger::after {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg)
}

.menu-open .header__burger::before {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg)
}

.header__burger {
  position: relative;
  background: url('../assets/images/burger.svg') no-repeat center/contain;
  width: 15px;
  height: 13px;
}

.header__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  margin: 0 auto;
}

.header__logo-img {
  background: url('../assets/images/logo.svg') no-repeat center/contain;
  width: 18px;
  height: 17px;

  margin-right: 7px;
}

.header__logo.center {
  margin: 0 auto;
}

.menu {
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
  position: absolute;
  z-index: 900;
  top: 0;
  left: 0;

  display: -webkit-box;

  display: -ms-flexbox;

  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 100vw;
  height: 100vh;
  padding-left: 10%;

  background: #616161;

  -webkit-transition: -webkit-transform 0.3s ease-out;

  transition: -webkit-transform 0.3s ease-out;

  transition: transform 0.3s ease-out;

  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
}

.menu-open .menu {
  -webkit-transform: translateX(0);
          transform: translateX(0);
}

.menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu__item {
  position: relative;
  padding-left: 49px;
  margin-bottom: 37px;

  font-size: 25px;
  color: #FFFFFF;
  letter-spacing: 0;
}

.menu__item a {
  color: #FFFFFF;
  text-decoration: none;
}

.menu__item:last-child {
  margin-bottom: 0;
}


.menu__item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 24px;
  height: 24px;
}

.menu__item.scheduled::before {
  background: url('../assets/images/schedule.svg') no-repeat center/contain;
}

.menu__item.unscheduled::before {
  background: url('../assets/images/unshedule.svg') no-repeat center/contain;
}

.menu__item.logout::before {
  background: url('../assets/images/logout.svg') no-repeat center/contain;
}
</style>
