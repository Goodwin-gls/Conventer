<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <TabButton
                  :currentTool="currentTool"
                  @click.native="changeTool"
                  value="CurrencyList"
          >Список валют
        </TabButton>
        <TabButton
                  :currentTool="currentTool"
                  @click.native="changeTool"
                  value="CurrencyConventer"
          >Конвертер
        </TabButton>
      </div>
    </header>
    <div class="container">
      <component :is="currentTool" class="tool">
      </component>
    </div>
  </div>
</template>

<script>
import CurrencyList from '@/components/CurrencyList'
import CurrencyConventer from '@/components/CurrencyConventer'
import TabButton from '@/components/TabButton'

export default {
  name: 'App',
  components: {
    CurrencyList,
    CurrencyConventer,
    TabButton
  },
  data: () => ({
    currentTool: 'CurrencyConventer'
  }),
  methods: {
    changeTool(e) {
      this.currentTool = e.target.value
    }
  },
  async created() {
    await this.$store.dispatch('fetchCurrency')
  }
}
</script>

<style lang="scss">
@import 'assets/scss/reset.scss';
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
#app {
  background: #fff;
}
.container {
  width: 70%;
  margin: 0 auto;
}
.tool {
  min-height: calc(100vh - 28px);
  background: #239cff;
  position: relative;
  width: 100%;
  padding: 15px 30px;
}
.tab-button {
  border: 1px solid #239cff;
  border-bottom: none;
  border-top: none;
  padding: 5px 10px;
  background: #fff;
  color: #239cff;
  cursor: pointer;
  font-size: 16px;
  &--active{
    background: #239cff;
    color: #fff;
  }
}
.currency-block + .currency-block {
  margin-top: 10px;
}
</style>
