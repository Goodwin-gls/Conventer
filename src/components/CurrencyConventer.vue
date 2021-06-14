<template>
  <div>
    <Loader v-if="this.$store.state.isLoading"></Loader>
    <div v-else class="currency-conventer">
      <div class="currency-conventer__section conventer-section">
        <div class="conventer-section__valute-name">{{ leftName }}</div>
        <div class="conventer-section__options">
          <div class="conventer-section__select">
            <select class="conventer-section__select-input" v-model="leftSide.charCode">
              <option v-for="char of charCodes" :key="char" :value="char" class="conventer-section__select-option">
                {{ char }}
              </option>
            </select>
          </div>
          <div class="conventer-section__value">
            <input v-model.number="leftSide.value" type="text">
            <div class="conventer-section__value-underline"></div>
          </div>
        </div>
      </div>
      <button @click="swapValute" class="currency-conventer__swap-btn">
        <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM11 3.5L0.999999 3.5V4.5L11 4.5V3.5Z" fill="#239cff"/>
          <path d="M21.3536 4.35355C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464466C17.9763 0.269204 17.6597 0.269204 17.4645 0.464466C17.2692 0.659728 17.2692 0.976311 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53553C17.6597 7.7308 17.9763 7.7308 18.1716 7.53553L21.3536 4.35355ZM11 4.5L21 4.5V3.5L11 3.5V4.5Z" fill="#239cff"/>
        </svg>
      </button>
      <div class="currency-conventer__section conventer-section">
        <div class="conventer-section__valute-name">{{ rightName   }}</div>
        <div class="conventer-section__options">
          <div class="conventer-section__select">
            <select class="conventer-section__select-input" v-model="rightSide.charCode">
              <option v-for="char of charCodes" :key="char" :value="char" class="conventer-section__select-option">
                {{ char }}
              </option>
            </select>
          </div>
          <div class="conventer-section__value conventer-section__value">
            {{ result }}
            <div class="conventer-section__value-underline"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    leftSide: {
      charCode: 'AUD',
      value: 1
    },
    rightSide: {
      charCode: 'EUR',
    }
  }),
  computed: {
    charCodes() {
      return this.$store.getters.valuteArray.map( item => item.CharCode )
    },
    leftName() {
      return this.$store.getters.valuteArray.find( item => item.CharCode === this.leftSide.charCode ).Name
    },
    rightName() {
      return this.$store.getters.valuteArray.find( item => item.CharCode === this.rightSide.charCode ).Name
    },
    result() {

      let leftValue = +this.$store.state.valute[this.leftSide.charCode].Value
      let leftNominal = +this.$store.state.valute[this.leftSide.charCode].Nominal
      let leftRate = leftValue / leftNominal

      let rightValue = +this.$store.state.valute[this.rightSide.charCode].Value
      let rightNominal = +this.$store.state.valute[this.rightSide.charCode].Nominal
      let rightRate = rightValue / rightNominal

      return ((this.leftSide.value * leftRate) / rightRate).toFixed(4)
    }
  },
  methods: {
    swapValute() {
      let leftChar = this.leftSide.charCode
      let rightChar = this.rightSide.charCode

      this.leftSide.charCode = rightChar
      this.rightSide.charCode = leftChar
    }
  }
}
</script>
<style lang="scss">
  .currency-conventer {
    display: flex;
    align-items: center;
    &__section {
      border-radius: 10px;
      padding: 15px;
      background: #fff;
    }
    &__swap-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      margin: 0 15px;
    }
  }
  .conventer-section {
    &__options {
      display: flex;
    };
    &__valute-name {
      font-size: 13px;
      color: #c8c8c8;
      margin-bottom: 10px;
    };
    &__select-input {
      border: none;
      outline: none;
    };
    &__select-input, &__select-option, &__value>input,  &__value {
      font-size: 18px;
      color: #565656;
    };
    &__value>input {
      width: 150px;
      border: none;
      outline: none
    };
    &__value {
      position: relative;
      margin-left: 15px;
    };
    &__value-underline {
      position: absolute;
      content: '';
      bottom: -1px;
      left: 50%;
      width: 100%;
      height: 1px;
      background: #c8c8c8;
      transform: translateX(-50%);
    };
    &__value>input:focus+&__value-underline {
      background: #239cff;
    }
  }
</style>