<template>
  <div class="wait" ref="container">
    <page-header><span>等待买家付款</span></page-header>
    <wait-user-info-card :orderTime="orderInfo.orderTime" />
    <van-card
      :num="orderInfo.amount"
      :price="orderInfo.amount"
      :desc="orderInfo.flag ? '贷款' : '存款'"
      :title="orderInfo.name"
      :thumb="require('../../public/images/nor-logo1.png')"
    >
      <template #tags>
        <van-tag plain type="danger">{{ orderInfo.risk }}</van-tag>
        <!-- <van-tag plain type="danger">标签</van-tag> -->
      </template>
      <template #footer>
        <van-cell
          style="margin-top: 20px; background-color: rgb(250, 250, 250)"
          :border="false"
          title="商品单价"
          :value="orderInfo.price"
        />
        <van-cell
          style="background-color: rgb(250, 250, 250)"
          :border="false"
          title="商品总数"
          :value="orderInfo.amount"
        />
        <van-cell
          style="background-color: rgb(250, 250, 250)"
          :border="false"
          title="商品总价"
          :value="Number(orderInfo.price) * Number(orderInfo.amount)"
        />
        <div class="payment">
          <span>需付款</span>
          <span class="red" style="font-size: 16px; font-weight: 700">
            ￥{{ Number(orderInfo.price) * Number(orderInfo.amount) }}</span
          >
        </div>
      </template>
    </van-card>
    <van-collapse :border="false" v-model="activeNames">
      <van-collapse-item :border="false" title="订单信息" name="1">
        <van-cell
          :border="false"
          title="购买时间"
          :value="dateFormat(orderInfo.orderTime)"
        />
        <van-cell
          :border="false"
          title="期望年化回报率"
          :value="orderInfo.num"
        />
        <van-cell
          :border="false"
          title="总金额"
          :value="'￥' + Number(orderInfo.price) * Number(orderInfo.amount)"
        />
        <van-cell :border="false" title="总份数" :value="orderInfo.amount" />
        <van-cell :border="false" title="风险等级" :value="orderInfo.risk" />
        <van-cell :border="false" title="订单编号" :value="orderInfo.id" />
      </van-collapse-item>
      <!-- <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
          <van-collapse-item title="标题3" name="3">内容</van-collapse-item> -->
    </van-collapse>
    <!-- 密码输入框 -->
    <van-password-input
      :value="value"
      :focused="showKeyboard"
      @focus="$store.state.orderAbout.showKeyboard = true"
      v-show="showKeyboard"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      v-model="value"
      :show="showKeyboard"
      @blur="$store.state.orderAbout.showKeyboard = false"
    />
    <van-sticky :container="container" :offset-top="screenHeight - 50">
      <div class="bottom-btns">
        <van-button size="small" plain type="default" @click="goHome()"
          >浏览更多</van-button
        >
        <van-button size="small" plain type="warning" @click="cancel()"
          >取消支付</van-button
        >
        <van-button size="small" plain round type="danger" @click="pay()"
          >立即付款</van-button
        >
      </div>
    </van-sticky>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PageHeader from "../components/PageHeader.vue";
import WaitUserInfoCard from "../components/WaitUserInfoCard.vue";
export default {
  components: { PageHeader, WaitUserInfoCard },
  data() {
    return {
      activeNames: ["1"],
      container: null,
      screenHeight: null,
      orderInfo: {},
      value: "",
    };
  },
  computed: {
    ...mapState("orderAbout", ["showKeyboard"]),
  },
  methods: {
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
    dateFormat(value) {
      var time = new Date(value);
      return (
        time.getFullYear(1) +
        "-" +
        this.timeSize2(Number(time.getMonth()) + 1) +
        "-" +
        this.timeSize2(time.getDate()) +
        " " +
        this.timeSize2(time.getHours()) +
        ":" +
        this.timeSize2(time.getSeconds())
      );
    },
    cancel() {},
    pay() {
      this.$store.state.orderAbout.showKeyboard = true;
    },
    pwdCheck() {},
  },
  watch: {
    value(newValue) {
      if (this.value.length >= 6) {
        this.pwdCheck();
      }
      this.$store.state.orderAbout.value = newValue;
      console.log(this.value);
    },
  },
  mounted() {
    this.screenHeight = screen.height;
    this.container = this.$refs.container;
    this.axios({
      method: "get",
      url: "/order/detail/" + this.$route.params.orderID,
      params: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response);
        if (response.data.status != 0) {
          this.$toast.fail(response.data.data.message);
        } else {
          if (response.data.data != null) this.orderInfo = response.data.data;
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
      });
  },
};
</script>

<style scoped>
.van-password-input {
  position: fixed;
  bottom: 244px;
  left: 50%;
  width: 100%;
  margin: 0;
  background-color: #fff;
  transform: translateX(-50%);
  z-index: 99;
  box-sizing: border-box;
}
.van-button {
  font-size: 12px;
  font-weight: 700;
}
.bottom-btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  height: 50px;
  padding: 0px 10px;
}
.payment {
  margin-top: 5px;
  font-size: 14px;
}
.van-contact-card {
  margin-top: 10px;
}
.van-collapse {
  margin-top: 10px;
  font-weight: 700;
}
.van-card__footer {
  margin-top: 5px;
}
.van-tag {
  margin-top: 5px;
}
</style>