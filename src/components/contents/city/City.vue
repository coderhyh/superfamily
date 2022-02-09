<template>
  <div class="city_box" v-show="isShowCity" @click="setShowCity(false)">
    <div class="city_box_item" @click.stop>
      <div class="search_wrap">
        <Search class="search">
          <template #center>
            <input type="text" placeholder="请输入城市名称" />
          </template>
        </Search>
      </div>
      <div class="content">
        <Scroll class="wrapper" ref="scroll">
          <section v-for="(val, key) in cityList" :key="val">
            <p class="title">{{ key }}</p>
            <p
              class="city_item"
              v-for="item in val"
              :key="item.code"
              @click="itemClick(item)"
            >
              {{ item.name }}
            </p>
          </section>
        </Scroll>
        <div class="letter_nav">
          <p
            v-for="(val, key, index) in cityList"
            :key="val"
            @click="navClick(index)"
          >
            {{ key }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "components/common/search/Search.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import { getData } from "common/utils";

import { mapMutations, mapState } from "vuex";
export default {
  name: "City",
  data() {
    return {
      cityList: {},
      locationCity: {},
    };
  },
  components: {
    Search,
    Scroll,
  },
  computed: {
    ...mapState(["isShowCity", "selectCity"]),
  },
  methods: {
    navClick(index) {
      const section = this.$refs.scroll.$el.querySelectorAll("section");
      this.$refs.scroll.scrollTo(0, -section[index].offsetTop);
    },
    itemClick(item) {
      this.setSelectCity({ name: item.name, code: item.code });
      this.setShowCity(false)
    },
    getCity() {
      const url = `/decoration/cityInfo?version=6&zxjv=47.0&jzts=1642062763960_0.6358356495679758&reqfr=h5&selectArea=${this.selectCity.code}&gpsSelectArea=131`;
      getData(url, (res) => {
        const showCity = res.data.showCity;
        this.cityList = showCity.component.letterData;
        this.locationCity = showCity.component.location;
        this.setSelectCity({
          name: showCity.select.name,
          code: showCity.select.code,
        });
      });
    },
    ...mapMutations(["setShowCity", "setSelectCity"]),
  },
  watch: {
    isShowCity(flag) {
      if (flag) {
        console.log(11);
        this.$nextTick(() => {
          this.$refs.scroll.scroll.refresh();
        });
      }
    },
  },
  created() {
    this.getCity();
  },
};
</script>

<style lang="less" scoped>
.city_box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  .city_box_item {
    width: 100%;
    height: 80vh;
    background: #fff;
    position: relative;
    .search_wrap {
      padding: 0.15rem;
      .search {
        background: #f5f5f5;
        input {
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          background: #f5f5f5;
          font-size: 0.14rem;
        }
      }
    }
    .content {
      position: relative;
      .wrapper {
        height: calc(80vh - 0.65rem);
        overflow: hidden;
        color: #333333;
        section {
          .title {
            line-height: 0.24rem;
            background: #f5f5f5;
            padding-left: 0.15rem;
          }
          .city_item {
            padding-left: 0.15rem;
            font-size: 0.14rem;
            line-height: 0.35rem;
          }
        }
      }
      .letter_nav {
        position: absolute;
        right: 0.07rem;
        top: 50%;
        transform: translateY(-50%);
        color: #333333;
        line-height: 0.17rem;
        width: 0.2rem;
        text-align: center;
      }
    }
  }
}
</style>