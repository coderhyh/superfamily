<template>
  <div class="Walkthrough">
    <img
      v-if="goodItem.coverImage && goodItem.coverImage.url"
      :src="goodItem.coverImage.url"
      alt=""
    />
    <section>
      <div>
        <div class="title">
          <h3>
            <span v-if="goodItem.searchType" class="label">好物</span>
            {{ goodItem.title }}
          </h3>
        </div>
        <p class="recommend">
          {{ goodItem.description }}
        </p>
      </div>
      <div class="stylist">
        <div class="hand_pic">
          <img :src="goodItem.authorInfo.img" alt="" />
        </div>
        <span>{{ goodItem.authorInfo.name }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Walkthrough",
  components: {},
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      itemText: {},
    };
  },
  methods: {},
  mounted() {
    this.itemText = {
      title: this.goodItem.title,
      showTagsSimple: this.goodItem.showTagsSimple,
      authorInfo: this.goodItem.authorInfo,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("~assets/less/themeConfig.less");
.Walkthrough {
  margin-top: 0.25rem;
  display: flex;

  .title,
  .recommend {
    -webkit-line-clamp: 2;
  }

  > img {
    width: 1.22rem;
    margin-right: 0.1rem;
    border-radius: 0.1rem;
  }
  section {
    // height: 1.22rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title:extend(.snhs) {
      font-size: 0.15rem;
      line-height: 0.25rem;
      color: #333;

      .label {
        font-weight: normal;
        color: #ff4196;
        font-size: 0.12rem;
        margin-right: 0.05rem;
        background: #ffe6f2;
        padding: 0.01rem 0.05rem;
        border-radius: 0.1rem;
        line-height: 0.16rem;
        position: relative;
        top: -0.02rem;
      }
    }

    .recommend:extend(.snhs) {
      line-height: 0.2rem;
      height: 0.4rem;
      font-size: 0.13rem;
      color: #555;
      overflow: hidden;
      text-align: justify;
    }

    .stylist {
      display: flex;
      align-items: center;
      .hand_pic {
        width: 0.21rem;
        height: 0.21rem;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 0.05rem;
        img {
          width: 0.21rem;
          height: 0.21rem;
        }
      }
      span {
        color: #999;
      }
    }
  }
}
</style>