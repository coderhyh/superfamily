<template>
  <div class="wrapControl">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WrapControl"
  }
</script>

<style lang="less" scoped>
.wrapControl {
  width: 100%;
}
</style>