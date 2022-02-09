<template>
  <div class="Picture">
    <div class="wrapPic">
      <div class="pic">
        <img v-for="item in imgLength" :key="item" :src="item" alt="" />
      </div>
    </div>
    <Text :itemText="itemText"></Text>
  </div>
</template>

<script>
import Text from "./Text";

export default {
  name: "Picture",
  components: {
    Text,
  },
  data() {
    return {
      multiImage: [],
      itemText: {},
    };
  },
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
  },
  computed: {
    imgLength() {
      if (this.multiImage.length) {
        let leng = this.multiImage.length;
        this.multiImage =
          leng < 6 ? this.multiImage.slice(0, 3) : this.multiImage.slice(0, 6);
      }
      return this.multiImage;
    },
  },
  mounted() {
    this.multiImage = this.goodItem.multiImage;
    this.itemText = {
      title: this.goodItem.title,
      showTagsSimple: this.goodItem.showTagsSimple,
      authorInfo: this.goodItem.authorInfo,
    };
  },
};
</script>

<style lang="less" scoped>
.Picture {
  margin-top: 0.25rem;
  .wrapPic {
    width: 100%;
    overflow: hidden;
    border-radius: 0.1rem;
    .pic {
      width: 105%;
      display: flex;
      flex-wrap: wrap;

      img {
        width: 1.11rem;
        margin-right: 0.04rem;
      }
      img:nth-child(n + 4) {
        margin-top: 0.04rem;
      }
    }
  }
}
</style>