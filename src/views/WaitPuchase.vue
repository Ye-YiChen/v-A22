<template>
  <div class="wait" ref="container">
    <page-header><span>等待买家付款</span></page-header>
    <wait-user-info-card />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      :thumb="require('../../public/images/nor-logo1.png')"
    >
      <template #tags>
        <van-tag plain type="danger">中风险</van-tag>
        <!-- <van-tag plain type="danger">标签</van-tag> -->
      </template>
      <template #footer>
        <van-cell
          style="margin-top: 20px; background-color: rgb(250, 250, 250)"
          :border="false"
          title="商品单价"
          value="内容"
        />
        <van-cell
          style="background-color: rgb(250, 250, 250)"
          :border="false"
          title="商品总数"
          value="内容"
        />
        <van-cell
          style="background-color: rgb(250, 250, 250)"
          :border="false"
          title="商品总价"
          value="内容"
        />
        <div class="payment">
          <span>需付款</span>
          <span class="red" style="font-size: 16px; font-weight: 700">
            ￥{{ 13.13 }}</span
          >
        </div>
      </template>
    </van-card>
    <van-collapse :border="false" v-model="activeNames">
      <van-collapse-item :border="false" title="订单信息" name="1">
        <van-cell :border="false" title="单元格" value="内容" />
        <van-cell :border="false" title="单元格" value="内容" />
        <van-cell :border="false" title="单元格" value="内容" />
      </van-collapse-item>
      <!-- <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
          <van-collapse-item title="标题3" name="3">内容</van-collapse-item> -->
    </van-collapse>
    <van-sticky :container="container" :offset-top="screenHeight - 50">
      <div class="bottom-btns">
        <van-button size="small" plain type="default">浏览更多</van-button>
        <van-button size="small" plain type="warning">取消支付</van-button>
        <van-button size="small" plain round type="danger">立即付款</van-button>
      </div>
    </van-sticky>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import WaitUserInfoCard from "../components/WaitUserInfoCard.vue";
export default {
  components: { PageHeader, WaitUserInfoCard },
  data() {
    return {
      activeNames: ["1"],
      container: null,
      screenHeight: null,
    };
  },
  methods: {},
  mounted() {
    this.screenHeight = screen.height;
    this.container = this.$refs.container;
  },
};
</script>

<style scoped>
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