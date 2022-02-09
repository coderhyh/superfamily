<template>
  <div class="HeadNavigation">
    <div class="top_nav">
      <div class="wrapper" ref="wrapper1">
        <section>
          <!-- Level 1 options -->
          <p
            v-for="(item, index) in guidetab"
            :class="{ cur: index == strategyHeadNav.INDEX }"
            @click="selectTop(index)"
          >
            {{ item.tab }}
          </p>
        </section>
      </div>
      <i class="iconfont icon-fenlei"></i>
    </div>
    <div class="down_item_nav" ref="wrapper2">
      <section>
        <p
          v-for="(item, index) in topicList"
          :class="{ cur: index == strategyHeadNav.index }"
          @click="setStrategyHeadNav({ INDEX: -1, index: index })"
        >
          {{ item.topic }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapMutations, mapState } from "vuex";
export default {
  name: "HeadNavigation",
  data() {
    return {
      scroll: null,
      topicList: [],
    };
  },
  props: {
    guidetab: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ...mapState(["strategyHeadNav"]),
  },
  methods: {
    ...mapMutations(["setStrategyHeadNav"]),
    selectTop(index) {
      this.setStrategyHeadNav({ INDEX: index, index: 0 });
      this.topicList = this.guidetab[this.strategyHeadNav.INDEX].topicList;
    },

    bindScroll(el) {
      this.scroll = new BScroll(el, {
        observeDOM: true,
        scrollX: true,
        click: true,
      });
    },
  },
  watch: {
    guidetab: {
      handler() {
        this.topicList = this.guidetab[this.strategyHeadNav.INDEX].topicList;
        this.bindScroll(this.$refs.wrapper1);
        this.bindScroll(this.$refs.wrapper2);
      },
      deep: true,
    },
    strategyHeadNav: {
      handler() {
        const {INDEX, index} = this.strategyHeadNav;
        const {path, params} = this.guidetab[INDEX].topicList[index].topicUrl
        this.$emit("getData", path + '?' + params);
      },
      deep: true
    }
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.HeadNavigation {
  height: 0.92rem;
  .top_nav {
    height: 0.49rem;
    display: flex;
    line-height: 0.49rem;
    .wrapper {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      section {
        display: inline-block;
        p {
          display: inline-block;
          color: #999999;
          font-weight: 700;
          font-size: 0.16rem;
          position: relative;
          padding: 0 0.15rem;
        }
        .cur {
          color: #333;
        }
        .cur::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0.06rem;
          transform: translateX(-50%);
          width: 0.25rem;
          height: 0.03rem;
          background: #ff3b7e;
          border-radius: 0.03rem;
        }
      }
    }
    i {
      font-size: 0.16rem;
      padding: 0 0.15rem;
      box-shadow: -0.1rem 0 0.1rem -0.1rem rgba(153, 153, 153, 0.5);
    }
  }
  .down_item_nav {
    height: 0.43rem;
    width: 100vw;
    white-space: nowrap;
    display: flex;
    align-items: center;
    section {
      display: inline-block;
      p {
        display: inline-block;
        color: #333333;
        padding: 0 0.15rem;
        font-size: 0.13rem;
        border-radius: 0.13rem;
        line-height: 0.26rem;
        margin-left: 0.15rem;
        border: 1px solid #eee;
      }
      .cur {
        color: #fff;
        background-image: linear-gradient(90deg, #ff4ca7, #ff3673);
        border: none;
      }
    }
  }
}
</style>