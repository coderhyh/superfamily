<template>
  <router-view v-slot="{ Component }">
    <keep-alive exclude="Detail,SearchView,Feedback">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <City></City>
  <!-- <transition name="slide">
        </transition> -->

  <!-- <MainTabBar v-if="$route.meta.showTab"></MainTabBar> -->
</template>

<script>
import MainTabBar from "components/contents/mainTabBar/MainTabBar.vue";
import City from "components/contents/city/City.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    MainTabBar,
    City
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
@import url("~assets/less/base.css");
@import url("~assets/imgs/font-icon/iconfont.css");
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
// .swiper-container {
//   .swiper-pagination {
//     .swiper-pagination-bullet-active {
//       background: pink !important;
//     }
//   }

//   .swiper-img {
//     width: 100vw;
//   }
// }
</style>