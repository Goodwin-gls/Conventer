<template>
  <button class="tab-button" :class="{'tab-button--active': isActive}" :value="value">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'TabButton',
  props: ['value', 'currentTool'],
  computed: {
    isActive() {
      return this.value == this.currentTool
    }
  }
}
</script>