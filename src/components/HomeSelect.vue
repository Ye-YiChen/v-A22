<template>
  <div class="info-header">
    <div class="choices">
      <div class="loans" @click="goMarket('loan')">
        <div class="small-ico">&#xe63e;</div>
        <div class="small-text">贷款</div>
      </div>
      <div class="store" @click="goMarket('store')">
        <div class="small-ico">&#xe6aa;</div>
        <div class="small-text">理财</div>
      </div>
      <div class="myorder" @click="goOrder()">
        <div class="small-ico">&#xe897;</div>
        <div class="small-text">我的订单</div>
      </div>
    </div>
    <div class="hello">
      <div class="time">早上好!</div>
      <div class="user" @click="goLogin()">{{ userName || "登录/注册" }}</div>
      <div class="logout-btn" @click="logOut()" v-if="userName">退出登录</div>
    </div>
  </div>
</template>

<script scoped>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("userAbout", ["userName"]),
  },
  methods: {
    // 注销按钮
    logOut() {
      this.axios({
        method: "get",
        url: "/user/logout?token=" + window.localStorage.getItem("token"),
      })
        .then((response) => {
          if (response.data.status != 0) {
            this.$toast.fail(response.data.data.message);
          } else {
            window.localStorage.removeItem("token");
            this.$toast.success("退出成功！");
            this.$store.state.userAbout.userName = null;
            this.$router.push({
              name: "Login",
            });
          }
        })
        .catch((err) => {
          this.$toast.fail(err.message);
        });
    },
    ...mapMutations("userAbout", ["SET_USERNAME"]),
  },
  mounted() {
    // 用户名请求
    if (window.localStorage.getItem("token")) {
      this.axios({
        type: "get",
        url: "/user/status?token=" + window.localStorage.getItem("token"),
      })
        .then((response) => {
          if (response.data.status != 0) {
            this.$toast.fail(response.data.data.message);
          } else {
            // 没有登录则跳过名字赋值
            if (response.data.data == null) {
              return false;
            }
            this.$store.state.userAbout.userName = response.data.data.name;
          }
        })
        .catch((err) => {
          this.$toast.fail(err.message);
        });
    }
  },
};
</script>

<style scoped>
.info-header {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
  color: #fff;
  /* padding-bottom: .3rem; */
  margin-bottom: 1rem;
  background: url("../../public/images/red-bgc.png") repeat;
  background-size: cover;
  /* background-image: linear-gradient(to top, rgb(236, 202, 208), #f5444c); */
}

.main {
  padding: 0 0.4rem;
}

.hello {
  display: flex;
  align-items: center;
  font-family: "宋体";
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1rem;
  color: rgb(94, 91, 122);
  background-color: rgb(243, 226, 126);
  border-radius: 0 0 0.2rem 0.2rem;
  box-shadow: 0.05rem 0.05rem 0.15rem #888;
  padding: 0 0.4rem;
}

.time {
  margin-right: 0.2rem;
  font-weight: 700;
  font-size: 0.6rem;
}

.user {
  font-size: 0.4rem;
  line-height: 0.8rem;
  font-weight: 700;
}

.logout-btn {
  flex: 1;
  text-align: right;
  font-size: 0.4rem;
  color: #ef4c53;
  font-weight: 700;
}

.choices {
  font-family: "iconfont";
  flex: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  padding-top: 0.4rem;
  /* margin: .4rem 0; */
  border-bottom: 0.03rem solid #ccc;
}

.small-ico {
  font-size: 0.8rem;
  text-align: center;
  font-weight: 700;
  color: #fff;
}
.small-text {
  font-size: 0.4267rem;
}
</style>