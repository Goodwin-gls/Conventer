<template>
  <div class="currency-list">
    <div class="content">
      <CurrencyBlock v-for="item of valuteList" :key="item.ChareCode" :data="item"></CurrencyBlock>
    </div>
  </div>
</template>
<script>
import CurrencyBlock from '@/components/CurrencyBlock'

export default {
  components: {
    CurrencyBlock
  },
  computed: {
    valuteList() {
      return this.$store.getters.valuteArray
    }
  }
}
</script>
<style lang="scss" scoped>
.currency-list {
  width: 100%;
  padding: 15px 30px;
}
</style>