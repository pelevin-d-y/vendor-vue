<template>
  <div class="select">
    <div class="select__wrapper">
      <select class="is-hidden" data-name="conditions" multiple="multiple" v-model="selected">
        <option v-for="option in selectOptions" 
          :value="option.value" 
          :key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <div class="multiple-select" @click="toggleMultipleSelect">
        <div class="multiple-select__placeholder">Select Conditions</div>
      </div>
      <div class="multiple-select__dropdown" v-if="dropdownOpen">
        <div class="multiple-select__arrow" @click="toggleMultipleSelect"></div>
        <MultipleSelectItem 
          v-for="item in selectOptions" 
          :key="item.value"
          :text="item.text"
          :value="item.value"
          :handler="selectHandler"
          />
      </div>
    </div>
  </div>
</template>

<script>
import MultipleSelectItem from '@/components/MultipleSelectItem'

export default {
  components: {
    MultipleSelectItem
  },

  data() {
    return {
      selected: [],
      dropdownOpen: false,

      selectOptions: [
        {
          text: 'Conditions1',
          value: 1
        },
        {
          text: 'Conditions2',
          value: 2
        },
        {
          text: 'Conditions3',
          value: 3
        },
        {
          text: 'Conditions4',
          value: 4
        },
        {
          text: 'Conditions5',
          value: 5
        },
        {
          text: 'Conditions6',
          value: 6
        },
        {
          text: 'Conditions7',
          value: 7
        }
      ]
    }
  },

  methods: {
    toggleMultipleSelect() {
      this.dropdownOpen = !this.dropdownOpen
    },

    selectHandler(value) {
      const isSelected = this.selected.indexOf(value) === -1
      if (isSelected) {
        this.selected.push(value)
      } else {
        this.selected.splice(this.selected.indexOf(value), 1)
      }

      this.$emit('changeMultipleSelect', this.selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  margin-top: 9px;
}

.select__wrapper.is-hidden {
  display: none;
}

.multiple-select {
  position: relative;

  min-height: 50px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: none;
  background: #333333;
}

.multiple-select__placeholder {
  font-size: 18px;
  color: #939393;
  letter-spacing: 0;
}

.multiple-select__placeholder.active {
  color: #FFFFFF;
}

.multiple-select::after {
  content: '';

  position: absolute;
  right: 19.5px;
  top: 50%;

  display: block;
  width: 8px;
  height: 14px;
  margin-top: -5.5px;

  background: url('../assets/images/arrow.svg') no-repeat center/contain;
  transform: rotate(-90deg);
  border: none;
}

.multiple-select__dropdown {
  position: fixed;
  top: 30px;
  bottom: 13px;

  display: block;
  overflow: auto;
  z-index: 10;
  left: 30px;
  right: 30px;
  background: #333333;
  border-radius: 8px;
  padding-top: 5px;
}

.multiple-select__arrow {
  content: "";
  position: absolute;
  right: 19.5px;
  top: 20px;
  display: block;
  width: 8px;
  height: 14px;
  background: url('../assets/images/arrow.svg') no-repeat center/contain;
  transform: rotate(90deg);
  border: none;
}
</style>
