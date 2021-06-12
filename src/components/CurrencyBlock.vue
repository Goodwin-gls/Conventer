<template>
  <div class="currency-block">
    <div class="currency-block__name">{{ Name }}</div>
    <div class="currency-block__info">
      <div class="rate">
        <div class="rate__left-side">
          1 {{ !areSwapped ? ChareCode : 'RUB' }}
        </div>
        <button class="swap-rate-btn" @click="swapRates">
          <div class="arrow-left">
            <img src="@/assets/img/swap-btn-bg.svg" alt="btn">
          </div>
        </button>
        <div class="rate__right-side">
          {{ !areSwapped ? (Value * Nominal).toFixed(4) : (Nominal / Value).toFixed(4) }} {{ !areSwapped ? 'RUB' : ChareCode }}
        </div>
      </div>
      <div class="changes" :class="[ isIncrement ? 'changes--increment' : 'changes--decrement' ]">
        {{ change }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    Name: 'Австралийский доллар',
    ChareCode: 'AUD',
    Nominal: 1,
    Value: 54.8519,
    Previous: 55.8498,
    areSwapped: false
  }),
  computed: {
    change() {
      if (!this.areSwapped) {
        return Math.abs( ( ( this.Value - this.Previous )/this.Nominal ).toFixed( 4 ) )
      } else {
        return Math.abs( (this.Nominal/this.Value - this.Nominal/this.Previous).toFixed( 4 ) )
      }
    },
    isIncrement() {
      if (!this.areSwapped) {
        return ((this.Value - this.Previous)/this.Nominal) >= 0
      } else {
        return (this.Nominal/this.Value - this.Nominal/this.Previous) >= 0
      }
    }
  },
  methods: {
    swapRates() {
      this.areSwapped = !this.areSwapped
    }
  }
}
</script>
<style lang="scss">
.currency-block {
  border-radius: 10px;
  padding: 15px;
  background: #fff;
  width: 400px;
  &__name{
    font-size: 13px;
    color: #c8c8c8;
    margin-bottom: 10px;
  }
  &__info{
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
}
.rate {
  display: flex;
  color: #565656;
}
.swap-rate-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.changes {
  display: inline-block;
  line-height: 1em;
  font-size: 18px;
  &--increment {
    color: #50d751;
    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 16px;
      background: url(../assets/img/increment-bg.svg);
    }
  }
  &--decrement {
    color: #F01607;
    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 16px;
      background: url(../assets/img/decrement-bg.svg);
    }
  }
}
</style>