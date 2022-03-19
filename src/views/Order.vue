<template>
  <div class="order" v-cloak>
    <page-header>
      <span>我的订单</span>
    </page-header>
    <van-notice-bar
      left-icon="volume-o"
      scrollable
      text="涉及第三方服务的订单信息，如未显示，请到购买页面查询。"
    />
    <van-tabs v-model="active" animated>
      <van-tab title="全部" class="order-container">
        <order-card
          v-for="(order, index) in orders"
          :key="index"
          :orders="order"
        />
      </van-tab>
      <van-tab title="待支付" class="order-container">
        <order-card
          v-for="(order, index) in unpaidOrders"
          :key="index"
          :orders="order"
        />
      </van-tab>
      <van-tab title="已完成" class="order-container">
        <order-card
          v-for="(order, index) in finishedOrders"
          :key="index"
          :orders="order"
        />
      </van-tab>
      <van-tab title="已取消" class="order-container">
        <order-card
          v-for="(order, index) in canceledOrders"
          :key="index"
          :orders="order"
        />
      </van-tab>
    </van-tabs>

    <van-empty v-show="isEmpty[active]" description="这里空空如也呢">
      <van-button round type="danger" class="bottom-button" @click="goHome()"
        >去主页看看吧</van-button
      >
    </van-empty>

    <back-button />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import BackButton from "../components/BackButton.vue";
import OrderCard from "../components/OrderCard.vue";
import PageHeader from "../components/PageHeader.vue";

export default {
  components: { PageHeader, OrderCard, BackButton },
  data() {
    return {
      active: null,
      isEmpty: [true, true, true, true],
      orders: [],
      unpaidOrders: [],
      canceledOrders: [],
      finishedOrders: [],
    };
  },
  computed: {},
  mounted() {
    document.title = "我的订单";
    this.isLogin();
    this.axios({
      method: "get",
      url: "/order/list?token=" + window.localStorage.getItem("token"),
    })
      .then((response) => {
        console.log(response);
        if (response.data.status != 0) {
          this.$toast.fail(response.data.data.message);
          return false;
        } else {
          if (response.data.data.length == 0) {
            this.isEmpty[0] = true;
            this.isEmpty[1] = true;
            this.isEmpty[2] = true;
            this.isEmpty[3] = true;
            return false;
          } else {
            this.isEmpty[0] = false;
            this.orders = response.data.data;
            return false;
          }
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
      });
  },
  watch: {
    orders: {
      immediate:true,
      deep: true,
      handler(newValue) {
        for (let i of newValue) {
          if (i.status == 0) {
            this.unpaidOrders.unshift(i);
            this.isEmpty[1] = false;
          } else if (i.status == 1) {
            this.canceledOrders.unshift(i);
            this.isEmpty[3] = false;
          } else if (i.status == 2) {
            this.finishedOrders.unshift(1);
            this.isEmpty[2] = false;
          }
        }
      },
    },
  },
};
</script>

<style scoped>
.bottom-button {
  width: 160px;
  height: 40px;
}
.order-container {
  width: 95%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0.3rem 0.3rem;
  /* overflow: hidden; */
}
</style>