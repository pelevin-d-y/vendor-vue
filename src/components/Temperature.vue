<template>
  <div class="temperature">
    <div class="temperature__text">Temperature</div>
    <div class="temperature__range-wrapper">
      <input class="temperature__range" name="range" type="range" min="-20" max="99" step="1" ref="range" v-model="range">
    </div>
    <div class="temperature__celsius">
      <input class="temperature__celsius-digits" type="number" min="-20" max="99" placeholder="--" v-model="range" @input="inputHandler"><sup>o</sup>
    </div>
  </div>
</template>

<script>
import rangeSlider from 'rangeslider-pure'

export default {
  data() {
    return {
      range: null,
      goodFrozen: 35
    }
  },

  mounted() {
    rangeSlider.create(this.$refs.range, {
      onSlide: (position) => {
        if (position < this.goodFrozen) {
          this.$emit('changeStatus', 'succes')
        } else if (position > this.goodFrozen) {
          this.$emit('changeStatus', 'danger')
        }

        this.$emit('changeRange', this.range)
      }
    })
  },

  methods: {
    inputHandler() {
      const $_this = this
      this.$refs.range.rangeSlider.update({
        value : $_this.range
      }, true);
    }
  }
}
</script>

<style lang="scss" scoped>
.truck-options__temperature {
  padding-top: 10px;
  padding-bottom: 17px;
}

.temperature {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.temperature__text {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  font-size: 23px;
  color: #FFFFFF;
  letter-spacing: 0;
}

.temperature__range-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 267px;
}

.temperature__celsius {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  min-width: 53px;
  min-height: 36px;
  
  font-size: 23px;
  color: #FFFFFF;
  letter-spacing: -0.23px;
  text-align: left;

  background: #333333;
  border-radius: 8px;
}

.temperature__celsius-digits {
  width: 34px;
  background: none;
  color: #ffffff;
  font-weight: 300;
  border: none;

  &::placeholder {
    color: #ffffff;
  }
}
</style>
