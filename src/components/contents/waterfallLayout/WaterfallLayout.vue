<template>
  <div class="waterfallLayout">
    <ul v-for="wrapItem in column">
      <li v-for="item in wrapItem.list">
        <img v-if="item.coverImage.url" :src="item.coverImage.url" alt="" />
        <section>
          <div class="title">{{ item.title }}</div>
          <div class="author">
            <img :src="item.authorInfo.img" alt="" />
            <div class="name snh">{{ item.authorInfo.name }}</div>
            <div class="label">{{ item.authorInfo.designerLabel }}</div>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "waterfallLayout",
  data() {
    return {
      column: [
        {
          h: 0,
          list: [],
        },
        {
          h: 0,
          list: [],
        },
      ],
    };
  },
  props: {
    totalList: {
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
    disposeData() {
      this.totalList.forEach((e) => {
        const { coverImage } = e;
        if (coverImage != null && Object.keys(coverImage).length) {
          let index = this.column[0].h > this.column[1].h ? 1 : 0;
          let h =
            ((coverImage.height * 1 || 1) / (coverImage.width * 1 || 1)) * 162;
          this.column[index].h += h + 76;
          this.column[index].list.push(e);
        }
      });
    },
  },
  watch: {
    totalList: {
      handler() {
        console.log('disposeData');
        this.disposeData();
      },
      deep: true,
    },
    strategyHeadNav: {
      handler() {
        this.column.forEach((e) => {
          e.h = 0;
          e.list = [];
        });
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.waterfallLayout {
  display: flex;
  ul {
    flex: 1;
    padding: 0 0.05rem;
    overflow: hidden;
    li {
      margin-top: 0.15rem;
      width: 100%;
      border-radius: 0.13rem;
      overflow: hidden;
      background: #fff;
      font-size: 0;
      > img {
        width: 100%;
        object-fit: cover;
      }
      section {
        padding: 0.05rem 0.07rem;
        .title {
          font-weight: 700;
          font-size: 0.14rem;
          color: #555;
          line-height: 0.2rem;
        }
        .author {
          margin-top: 0.05rem;
          display: flex;
          align-items: center;
          font-size: 0.12rem;
          color: #999999;
          img {
            width: 0.21rem;
            border-radius: 50%;
            vertical-align: middle;
          }
          .name {
            margin: 0 0.05rem;
            max-width: 0.6rem;
          }
          .label {
            padding: 0 4px;
            line-height: 1.2;
            box-sizing: content-box;
            border-radius: 0.21rem;
            border: 1px solid #b3d4f3;
            color: #2b99ff;
          }
        }
      }
    }
  }
}
</style>