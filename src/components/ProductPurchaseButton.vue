<template>
  <footer class="footer" id="footer">
    <div
      class="state"
      v-show="this.localProduct.state != 2 && this.localProduct.state != 3"
    >
      <div class="min-logo">
        <img src="../../public/images/ico.png" alt="" />
      </div>
      <!-- 最长 "剩余10,00000000份" 可正常显示 -->
      <div class="pro-left">剩余{{ localProduct.stock }}份</div>
      <div class="time-box red">
        <div class="arrow-left"></div>
        <div class="time-title red" ref="countTitle">{{countText}}</div>
        <div class="time-left">
          <van-count-down millisecond :time="time" ref="countDown">
            <template #default="timeData">
              <span class="block">{{
                timeData.hours + timeData.days * 24 || "00"
              }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes | timeSize2 }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds | timeSize2 }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.milliseconds | timeSize2 }}</span>
            </template>
          </van-count-down>
        </div>
      </div>
    </div>
    <button class="wide-btn scheduled-btn" ref="btn" @click.once="purchase()">
      {{ btnText }}
    </button>
  </footer>
</template>

<script>
// import { mapState } from "vuex";
export default {
  props: ["product"],
  data() {
    return {
      time: null,
      timer: null,
      ifFirst: true,
      btnText: "",
      countText: "",
    };
  },
  computed: {
    localProduct() {
      return this.product;
    },
    state() {
      return this.localProduct.state;
    },
    // ...mapState("orderAbout", ["showKeyboard"]),
  },
  methods: {
    purchase() {
      if (this.state == 0) {
        this.axios({
          method: "get",
          url: "/user/screen",
          params: {
            token: window.localStorage.getItem("token"),
            itemId: this.localProduct.id,
          },
        })
          .then((response) => {
            // console.log(response);
            if (response.data.status != 0) {
              this.$toast.fail(response.data.data);
            } else {
              this.$toast.success(response.data.data);
            }
          })
          .catch((err) => {
            this.$toast.fail(err.message);
          });
        return false;
      } else if (this.state == 1) {
        // this.isLogin()
        this.axios({
          method: "get",
          url: "/user/screen/status",
          params: {
            token: window.localStorage.getItem("token"),
            itemId: this.$route.params.productID,
          },
        })
          .then((response) => {
            console.log(response);
            if (response.data.status != 0) {
              this.$toast.fail(response.data.data);
            } else {
              this.goPurchase(this.$route.params.productID);
            }
          })
          .catch((err) => {
            this.$toast.fail(err.message);
          });
        return false;
      } else {
        this.$toast.fail("已经结束了");
        return false;
      }
    },
    finish() {
      this.queryProduct();
    },
    queryProduct() {
      this.axios({
        method: "get",
        url: "/item/detail/" + this.$route.params.productID,
      })
        .then((response) => {
          console.log(1);
          if (response.data.status != 0) {
            this.$toast.fail(response.data.data.message);
          } else {
            this.products = response.data.data;
          }
        })
        .catch((err) => {
          this.$toast.fail(err.message);
        });
    },
  },
  mounted() {
    if (this.state == 0)
      setTimeout(() => {
        this.axios({
          method: "get",
          url: "/user/screen",
          params: {
            token: window.localStorage.getItem("token"),
            itemId: this.localProduct.id,
          },
        })
          .then((response) => {
            // console.log(response);
            if (response.data.status != 0) {
              this.$toast.fail(response.data.data);
            } else {
              this.$toast.success(response.data.data);
            }
          })
          .catch((err) => {
            this.$toast.fail(err.message);
          });
      }, 200);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch: {
    state: {
      immediate: true,
      handler(newValue) {
        // console.log(this.localProduct);
        this.$nextTick(function () {
          if (newValue == 0) {
            this.btnText = "即将开始";
            this.countText = "本次秒杀开始还剩";
            this.time = new Date(this.localProduct.startTime) - new Date();
            if (this.localProduct.flag == "1") {
              this.btnText = "立即申请";
            }
            return false;
          }
          if (newValue == 1) {
            this.btnText = "立即购买";
            this.countText = "本次秒杀结束还剩";
            this.time = new Date(this.localProduct.endTime) - new Date();
            this.timer = setInterval(() => {
              this.queryProduct();
            }, 5000);
            return false;
          }
          if (newValue == 2) {
            this.btnText = "售罄";
            this.countText = "本次秒杀已经结束";
            this.time = 0;
            this.$refs.countDown.pause();
            clearInterval(this.timer);
            return false;
          }
          if (newValue == 3) {
            this.btnText = "已经结束";
            this.countText = "本次秒杀已经结束";
            this.time = 0;
            this.$refs.countDown.pause();
            clearInterval(this.timer);
            return false;
          }
        });
      },
    },
  },
  filters: {
    timeSize2(value) {
      if (Number(value) < 0) {
        value = -value;
      }
      if (String(value).length < 2) {
        value = "0" + value;
      } else if (String(value).length > 2) {
        value = String(value).substr(0, 2);
      }
      return value;
    },
  },
};
</script>

<style scoped>
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  /* width: 22px; */
  padding: 0 2px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.footer {
  position: fixed;
  width: 100%;
  /* height: 2.9333rem; */
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.state {
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  background-color: rgb(119, 55, 55);
  padding: 0;
  /* padding: .2rem .5rem; */
  box-sizing: border-box;
  border-bottom: 0.1333rem solid #ccc;
  border-radius: 0.2333rem;
  color: #fff;
}

.min-logo {
  width: 1rem;
  padding: 0.2rem 0 0.2rem 0.3rem;
}

.pro-left {
  line-height: 1.1rem;
  font-size: 0.5rem;
  letter-spacing: 0.0267rem;
  padding: 0.2rem 0.5rem 0.2rem 0;

  /* 不允许换行 */
  white-space: nowrap;
}

.time-box {
  width: 5rem;
  position: relative;
  background-color: rgb(252, 227, 230);
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;
}

.arrow-left {
  position: absolute;
  top: 0rem;
  left: -1.5rem;
  width: 0;
  height: 0;
  /* 为了照顾兼容性 */
  line-height: 0;
  font-size: 0;
  /* 其他边框透明 */
  border: 0.8rem solid transparent;
  border-right-color: rgb(252, 227, 230);
}

.time-left {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.time-title {
  font-size: 0.1rem;
  margin-bottom: 0.1rem;
}

#time-h,
#time-m,
#time-s {
  background-color: #ef4c53;
  padding: 0.1rem;
  border-radius: 0.1rem;
  color: #fff;
  box-sizing: border-box;
  font-size: 0.3rem;
  line-height: 0.3rem;
  font-weight: 700;
}

.scheduled-btn {
  border-radius: 0;
  margin: 0;
  box-shadow: 0;
  background-image: linear-gradient(to right, #ef4c53, rgb(255, 115, 0));
  color: #fff;
}
</style>