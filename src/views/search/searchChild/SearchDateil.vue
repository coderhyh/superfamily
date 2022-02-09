<template>
  <div class="SearchDateil">
    <div class="title">{{searchInfo.title}}</div>
    <ul>
      <li v-for="item in list" :key="item"><span></span>{{item.text}}</li>
    </ul>
    <div class="labels">
      <p v-for="item in paragraph" :key="item">{{item.title}}</p>
    </div>
    <div class="authorInfo">
      <div class="pic">
        <img :src="authorInfo.img" alt="" />
      </div>
      <section>
        <div class="name">
          <p>{{authorInfo.name}}</p>
          <span>{{authorInfo.tag}}</span>
        </div>
        <div class="nameItem">{{authorInfo.desc}}</div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchDateil",
  data() {
    return {
      list: this.searchInfo.knowledgeDetail || [],
      paragraph: this.searchInfo.paragraph || [],
      authorInfo: this.searchInfo.authorInfo || {},
    }
  },
  props: {
    searchInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style lang="less" scoped>
.SearchDateil {
  width: 100%;
  background: #fff;
  border-radius: 0.15rem;
  box-shadow: 1px 1px 0.15rem 0 rgb(236, 236, 236);
  padding: 0.15rem;
  box-sizing: border-box;
  .title {
    color: #1f1f1f;
    font-weight: 700;
    font-size: 0.2rem;
  }
  ul {
    margin-top: 0.1rem;
    li {
      display: flex;
      align-items: center;
      color: #555;
      font-size: 0.15rem;
      line-height: 0.25rem;
      span {
        width: 0.03rem;
        height: 0.03rem;
        background: #555555;
        display: inline-block;
        border-radius: 50%;
        margin-right: 0.1rem;
      }
    }
  }
  .labels {
    display: flex;
    flex-wrap: wrap;
    p {
      width: 0.69rem;
      color: #1f1f1f;
      background-color: #f5f5f5;
      border-radius: 0.15rem;
      text-align: center;
      line-height: 0.3rem;
      color: #1f1f1f;
      margin: 0.1rem 0.08rem 0 0;
    }
  }
  .authorInfo {
    display: flex;
    align-items: center;
    margin-top: 0.15rem;
    color: #333;
    .pic {
      width: 0.36rem;
      height: 0.36rem;
      overflow: hidden;
      margin-right: 0.1rem;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    section {
      .name {
        font-size: 0.14rem;
        display: flex;
        align-items: center;
        p {
          margin-top: .05rem;
          max-width: 1.5rem;
          height: 0.17rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-right: .05rem;
        }
        span {
          display: inline-block;
          padding: 0 4px;
          vertical-align: middle;
          font-size: 10px;
          height: 0.13rem;
          line-height: 1.2;
          box-sizing: content-box;
          border-radius: 21px;
          color: #2b99ff;
          border: 1px solid #b3d4f3;
        }
      }
      .nameItem {
        color: #999;
        line-height: .17rem;
      }
    }
  }
}
</style>