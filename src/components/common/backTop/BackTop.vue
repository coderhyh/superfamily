<template>
  <transition name="fade">
    <div class="BackTop" @click="$emit('backTop')" v-show="isBackTop">
      <img src="~assets/imgs/common/backtop.png" alt="" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      isBackTop: false,
    };
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  watch: {
    scrollTop() {
      this.isBackTop = this.scrollTop > 600;
    }
  },
};
</script>

<style lang="less" scoped>
.BackTop {
  width: 0.5rem;
  height: 0.5rem;
  position: fixed;
  z-index: 999;
  right: 0.15rem;
  bottom: 1rem;
  img {
    width: 0.5rem;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>