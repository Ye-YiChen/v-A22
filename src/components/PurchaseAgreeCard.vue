<template>
  <div class="agree-info box">
    <div class="item">请阅读并同意以下内容</div>
    <ul class="agree-detail yellow">
      <li>《理财产品购买声明》</li>
      、
      <li>《产品投资协议》</li>
      、
      <li>《代理销售协议》</li>
      、
      <li>《风险揭示书》</li>
      、
      <li>《产品说明书》</li>
      及
      <li>《投资者权益须知》</li>
    </ul>
    <div class="mind item">
      {{ agreeWords }}
    </div>
    <div class="tip red" @click.prevent="copyAgree()">&#xe656; 复制并粘贴</div>
    <textarea
      class="type"
      placeholder="请完整输入上述风险提示声明"
      @input.prevent="checkAgree()"
      v-model="inputWords"
    ></textarea>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      agreeWords:
        "风险提示声明：本人已阅读并同意理财产品购买声明、产品投资协议、代理销售协议、风险揭示书、产品说明书、投资者权益须知和全部内容、愿意承担投资风险。",
      inputWords: null,
    };
  },
  methods: {
    copyAgree() {
      this.inputWords = this.agreeWords;
      this.SET_IF_AGREE(true);
    },
    checkAgree() {
      if (this.inputWords === this.agreeWords) {
        this.SET_IF_AGREE(true);
      } else {
        this.SET_IF_AGREE(false);
      }
    },
    ...mapMutations("orderAbout", ["SET_IF_AGREE"]),
  },
  beforeDestroy() {
    this.SET_IF_AGREE(false);
  },
};
</script>

<style>
.agree-detail {
  font-size: 0.2rem;
  padding: 0.2rem 0;
  padding-left: 0.5rem;
}
.agree-detail li {
  display: inline-block;
}
.mind {
  font-size: 0.35rem;
  font-weight: 700;
  border: 0 !important;
}
.tip {
  font-family: "iconfont";
  border-bottom: 1.5px solid #eee;
  padding-bottom: 0.4rem;
}
.type {
  resize: none;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  padding: 0.5rem 0;
  padding-right: 0.5rem;

  white-space: wrap;
  word-wrap: break-all;
  overflow: visible;
  outline: 0 none;
  box-sizing: border-box;
  border: 0;
  border-bottom: 1.5px solid #eee;
}
</style>