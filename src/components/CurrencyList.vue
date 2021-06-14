<template>
  <div>
    <Loader v-if="this.$store.state.isLoading"></Loader>
    <div v-else class="currency-list">
      <div class="content">
        <div class="currency-list__search">
          <input v-model.trim="search" class="currency-list__search-input" type="text">
          <div class="currency-list__search-underline"></div>
          <div class="currency-list__search-icon"></div>
        </div>
        <CurrencyBlock v-for="item of valuteList" :key="item.ChareCode" v-bind="item"></CurrencyBlock>
      </div>
    </div>
  </div>
</template>
<script>
import CurrencyBlock from '@/components/CurrencyBlock'

export default {
  components: {
    CurrencyBlock
  },
  data: () => ({
    search: ''
  }),
  computed: {
    valuteList() {
      if (this.search === '') {
        return this.$store.getters.valuteArray
      } else {
        return this.$store.getters.valuteArray.filter( (item) => ~item.Name.toLowerCase().indexOf(this.search.toLowerCase()) || ~item.CharCode.toLowerCase().indexOf(this.search.toLowerCase()))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.circular-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
}
.currency-list {
  &__search {
    width: 400px;
    position: relative;
    &-underline {
      position: absolute;
      top: 25px;
      left: 15px;
      width: calc(100% - 36px - 17px);
      height: 1px;
      background-color: #c8c8c8;
    }
  };
  &__search-input:focus + &__search-underline {
    background-color: #239cff;
  }
  &__search-input {
    font-size: 16px;
    color: #565656;
    outline: none;
    padding: 8px 36px 8px 15px;
    width: 100%;
    border: none;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  &__search-icon {
    pointer-events: none;
    position: absolute;
    top: 1px;
    right: 1px;
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url('../assets/img/search-icon.png');
  }
}
</style>