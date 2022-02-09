<template>
  <div id="profile">
    <NavBar>
      <template #center>
        <div class="center">个人中心</div>
      </template>
      <template #right>
        <div class="right" @click="$router.push('/page')"></div>
      </template>
    </NavBar>

    <div class="my_profile">
      <img src="~assets/imgs/common/6.jpg" alt="" />
      <div class="name">蛋炒饭要蛋不要饭</div>
    </div>

    <ul class="menu">
      <li v-for="item in list" :key="item.title" @click="$router.push(item.path)">
        <p>{{item.title}}</p>
        <i class="iconfont icon-fanhui"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
  },
  data() {
    return {
      list: [
        {
          path: '',
          title: '我的订单'
        },
        {
          path: '',
          title: '我的评价'
        },
        {
          path: '',
          title: '我的收藏'
        },
        {
          path: '',
          title: '我的关注'
        },
        {
          path: '',
          title: '消息中心'
        },
        {
          path: '/feedback',
          title: '意见反馈'
        },
      ]
    }
  },
};
</script>

<style lang="less" scoped>
#profile {
  .center {
    font-size: 0.16rem;
    color: #333333;
    font-weight: 700;
  }
  .right {
    width: 100%;
    height: 100%;
    background: url("~assets/imgs/tabbar/home.png") no-repeat 0.6rem center /
      0.21rem;
  }
  .my_profile {
    padding: 0 0.15rem;
    height: 1.12rem;
    display: flex;
    align-items: center;
    font-size: 0.17rem;
    border-bottom: 0.09rem solid #f1f1f1;
    img {
      width: 0.58rem;
      height: 0.58rem;
      margin-right: 0.15rem;
      border-radius: 50%;
    }
  }
  .menu {
    padding: 0 0.15rem;
    li {
      line-height: .42rem;
      display: flex;
      justify-content: space-between;
      font-size: .15rem;
      border-bottom: 1px solid #F5F5F5;
      i {
        transform: rotate(180deg);
      }
    }
  }
}
</style>