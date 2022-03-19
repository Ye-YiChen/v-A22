<template>
  <div class="purchaser-num box">
    <div class="item">购买数量</div>
    <div class="num-box item">
      <input
        type="number"
        class="num-input"
        placeholder="1份起购，1份递增"
        v-model.number="purchaseNum"
      />
      <span>份</span>
    </div>
    <div class="fade tip">
      <div>总价</div>
      <div class="extra-money">
        {{ Number(productInfo.price * purchaseNum || 0.0).toFixed(2) }}元
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      purchaseNum: null,
    };
  },
  computed: {
    ...mapState("orderAbout", ["productInfo"]),
  },
  methods: {
    ...mapMutations("orderAbout", ["SET_ORDER_NUM"]),
  },
  watch: {
    purchaseNum(newValue) {
      if (newValue <= 0) {
        this.purchaseNum = null;
      }
      this.SET_ORDER_NUM(newValue);
    },
  },
  beforeDestroy() {
    this.SET_ORDER_NUM(null);
  },
};
</script>

<style scoped>
.num-box {
  justify-content: start;
  align-items: center;
}
.fade {
  font-size: 0.35rem;
}
.tip {
  display: flex;
  justify-content: end;
  padding: 0.13rem;
  margin-left: 0.5rem;
  font-size: 0.25rem;
}
.num-input {
  border: none;
  padding: 0.5rem 0;
  padding-left: 0.3rem;
  outline: none;
}
</style>