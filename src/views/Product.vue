<template>
  <div class="product" v-cloak v-show="Object.keys(product).length != 0">
    <page-header>产品详情</page-header>
    <product-top-card :product="product">
      <p>注意：年收益率不等于年化收益率相同。<br />理财有风险，投资需谨慎。</p>
    </product-top-card>
    <product-info-bar :product="product" />

    <van-collapse v-model="activeNames" style="margin-bottom: 0.2rem">
      <!-- <van-collapse-item
        title="产品信息"
        name="rule"
        size="large"
        :lazy-render="false"
      >
        <van-cell title="产品名称" :value="product.name" />
        <van-cell title="产品价格" :value="'￥ ' + product.price" />
        <van-cell title="年化利率" :value="product.num + ' %'" />
        <van-cell title="产品期限" :value="product.term + ' 天'" />
        <van-cell
          title="起息日时间"
          :value="dateFormat(product.numTime).substr(0, 10)"
        />
        <van-cell title="到期日时间" :value="dateFormat(product.numTime).substr(0, 10)" />
        <van-cell title="风险等级" :value="product.risk" />
      </van-collapse-item> -->
      <van-collapse-item
        title="交易规则"
        name="rule"
        size="large"
        :lazy-render="false"
      >
        <van-cell title="限购数量" :value="product.limited" />
        <van-cell title="产品总数" :value="product.stock" />
        <van-cell title="秒杀开始时间" :value="dateFormat(product.startTime)" />
        <van-cell title="秒杀结束时间" :value="dateFormat(product.endTime)" />
      </van-collapse-item>
      <van-collapse-item
        title="产品信息"
        name="info"
        size="large"
        :lazy-render="false"
      >
        <van-cell title="产品名称" :value="product.name" />
        <van-cell title="产品价格" :value="'￥ ' + product.price" />
        <van-cell title="年化利率" :value="product.num + ' %'" />
        <van-cell title="产品期限" :value="product.term + ' 天'" />
        <van-cell
          title="起息日时间"
          :value="dateFormat(product.numTime).substr(0, 10)"
        />
        <van-cell
          title="到期日时间"
          :value="dateFormat(product.numTime).substr(0, 10)"
        />
        <van-cell title="风险等级" :value="product.risk" />
      </van-collapse-item>
    </van-collapse>
    <van-cell
      is-link
      @click="showPopup('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')"
      class="bigWords"
      >风险揭示书、产品说明书及投资者权益须知</van-cell
    >
    <van-cell is-link @click="showPopup()" class="bigWords">运作公告</van-cell>
    <van-cell is-link @click="showPopup()" class="bigWords">到期公告</van-cell>
    <van-cell is-link @click="showPopup()" class="coverButton bigWords"
      >产品公告</van-cell
    >
    <product-purchase-button :product="product" />

    <van-popup
      v-model="show"
      ref="popupBox"
      round
      position="bottom"
      class="popupBox"
      closeable
    >
      <p class="popup-text">{{ popupText }}</p>
    </van-popup>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { mapMutations } from "vuex";
import PageHeader from "../components/PageHeader.vue";
import ProductInfoBar from "../components/ProductInfoBar.vue";
import ProductPurchaseButton from "../components/ProductPurchaseButton.vue";
import ProductTopCard from "../components/ProductTopCard.vue";
export default {
  components: {
    PageHeader,
    ProductTopCard,
    ProductInfoBar,
    ProductPurchaseButton,
  },
  data() {
    return {
      activeNames: ["rule", "info"],
      show: false,
      popupText: "",
      product: {},
      rule: {}, // 筛选条件
      areaList,
    };
  },
  async mounted() {
    document.title = "产品详情";
    // 获取产品信息
    await this.axios({
      method: "get",
      url: "/item/detail/" + this.$route.params.productID,
    })
      .then((response) => {
        if (response.data.status != 0) {
          this.$toast.fail(response.data.data.message);
        } else {
          this.product = response.data.data;
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
        return false;
      });

    this.SET_PRODUCT_INFO(this.product);

    this.axios({
      method: "get",
      url: "/item/rule/" + this.$route.params.productID,
    }).then((response) => {
      // console.log(response.data);
      this.rule = response.data.data;
      let message = "";
      message += `用户年龄必须大于 <strong>${this.rule.age}</strong>岁<br/><br/>`;
      if (this.rule.sex != 2) {
        message += `用户性别必须为 <strong>${this.indexToSex(this.rule.age)}</strong><br/><br/>`;
      }
      message += `用户所在地区必须为 <strong>${this.getArea(this.rule.area)}</strong><br/><br/>`;
      message += `用户现有资产必须大于 <strong>${this.rule.money}元</strong><br/><br/>`;
      message += `用户VIP等级必须大于 <strong>${this.indexToVIP(this.rule.vip)}</strong><br/><br/>`;
      message += `用户职业必须为 <strong>${this.rule.job}</strong><br/>`;

      this.$nextTick(() => {
        this.$dialog
          .alert({
            title: "用户须知",
            message: message,
          })
          .then(() => {
            // on close
          });
      });
    });
  },
  methods: {
    indexToSex(code) {
      if (code == 0) {
        return "女";
      }
      if (code == 1) {
        return "男";
      }
      return "不限";
    },
    indexToVIP(code){
      if(code == 0){
        return '大众会员'
      }
      if(code == 1){
        return '黄金会员'
      }
      if(code ==2){
        return '白金会员'
      }
      return '钻石会员'
    },
    getArea(code) {
      let areaArry = this.areaCodeChange(code);
      // console.log(areaArry);
      // console.log(areaList.city_list['110100']);

      return (
        areaList.province_list[areaArry[0]] +
        areaList.city_list[areaArry[1]] +
        areaList.county_list[areaArry[2]]
      );
    },
    areaCodeChange(code) {
      // 将一个地区码转换为地区码数组
      code = String(code);
      if (code == "") return [""];
      let s1 = code.substr(0, 2),
        s2 = code.substr(2, 2),
        s3 = code.substr(4, 2);
      if (s2 == "00") {
        return [code, ""];
      }
      if (s3 == "00") {
        return [s1 + "0000", s1 + s2 + "00", ""];
      }
      return [s1 + "0000", s1 + s2 + "00", s1 + s2 + s3];
    },
    showPopup(text) {
      this.show = true;
      this.popupText = text;
    },
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
    ...mapMutations("orderAbout", ["SET_PRODUCT_INFO"]),
  },
  filters: {},
};
</script>

<style >
.product {
  position: relative;
  min-height: 100%;
  /* height: 1000px; */
}
.coverButton {
  margin-bottom: 3rem;
}
.bigWords {
  font-weight: 700;
  font-size: 0.4rem;
}
.popupBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  text-align: center;
}
.popup-text {
  width: 80%;
  padding: 0 0.2rem;
  white-space: normal;
  word-break: break-all;
  font-size: 14px;
  /* overflow: hidden; */
}
</style>