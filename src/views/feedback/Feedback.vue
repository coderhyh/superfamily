<template>
  <div id="feedback">
    <FeedbackNav></FeedbackNav>
    <main>
      <div class="select_box">
        <p>反馈类型</p>
        <section>
          <p
            v-for="(val, key) in labels"
            :key="key"
            :class="{ cur: labelType == key }"
            @click="labelType = key"
          >
            {{ val }}
          </p>
        </section>
        <textarea
          maxlength="200"
          placeholder="请详细说明问题，以便我们定位与解决"
          v-model="value"
        ></textarea>
      </div>

      <div class="upload_pic">
        <div class="title">上传问题截图(图片小于5M)</div>
        <div class="upload">
          <div class="pic" v-for="(item, index) in imgs">
            <img :src="item" alt="">
            <i class="iconfont icon-chacha" @click="imgs.splice(index, 1)"></i>
          </div>
          <label>
            <input
              type="file"
              style="display: none"
              ref="myfile"
              @change="myfile"
            />
            <img
              src="https://ufosdk.baidu.com/Public/img/postview/uploadImg-normal.png"
              alt=""
            />
          </label>
        </div>
      </div>

      <div class="tel">
        <input type="text" placeholder="联系方式：请输入邮箱或手机号码" />
      </div>

      <div class="submit" :class="{ blue: value }">提交</div>
    </main>
  </div>
</template>

<script>
import FeedbackNav from "./feedbackchild/FeedbackNav.vue";
// import { getData } from "common/utils";
export default {
  name: "Feedback",
  components: {
    FeedbackNav,
  },
  data() {
    return {
      labels: {
        49324: "咨询",
        49325: "建议",
        67952: "投诉",
        67953: "评价",
        91335: "BUG",
      },
      labelType: "",
      value: "",
      imgs: []
    };
  },
  methods: {
    myfile() {
      var path = URL.createObjectURL(this.$refs.myfile.files[0]);
      this.imgs.push(path);
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
#feedback {
  main {
    background: #f9f9f9;
    overflow: hidden;
    .select_box {
      font-size: 0.16rem;
      color: #999;
      padding: 0.15rem 0 0.05rem;
      p {
        padding: 0 0.15rem;
      }
      section {
        display: flex;
        margin: 0.1rem 0;
        padding: 0 0.15rem;
        p {
          line-height: 0.16rem;
          padding: 0.08rem 0.14rem;
          margin-right: 0.05rem;
          color: #333;
          background-color: #fff;
          border: 1px solid #e5e5e5;
        }
        .cur {
          background: #2f8cfd;
          color: #fff;
        }
      }
      textarea {
        height: 0.9rem;
        border: none;
        resize: none;
        outline: none;
        width: 100%;
        font-size: 0.14rem;
        padding: 0.15rem;
        box-sizing: content-box;
      }
    }
    .upload_pic {
      .title {
        font-size: 0.16rem;
        margin: 0 0.15rem 0.1rem;
        color: #999;
      }
      .upload {
        background: #fff;
        padding: 0.1rem 0.15rem;
        .pic {
          display: inline-block;
          position: relative;
          margin-right: .1rem;
          i {
            position: absolute; 
            right: 0;
            top: 0;
            font-size: .15rem;
          }
        }
        img {
          width: 0.6rem;
          height: 0.6rem;
        }
      }
    }
    .tel {
      font-size: 0.14rem;
      margin-top: 0.2rem;
      background: #fff;
      height: 0.48rem;
      padding: 0 0.15rem;
      input {
        border: none;
        outline: none;
        height: 100%;
        width: 100%;
      }
    }
    .submit {
      width: 3.45rem;
      height: 0.48rem;
      margin: 0.2rem auto;
      text-align: center;
      line-height: 0.48rem;
      background: #dddddd;
      color: #fff;
      font-size: 0.2rem;
    }
    .blue {
      background: #3593fd;
    }
  }
}
</style>