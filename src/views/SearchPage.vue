<template>
  <div class="SearchPage" v-cloak>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
    <search-history v-show="!value" />
    <search-association v-show="value" />
  </div>
</template>

<script>
import SearchAssociation from "../components/SearchAssociation.vue";
import SearchHistory from "../components/SearchHistory.vue";
export default {
  components: { SearchHistory, SearchAssociation },
  data() {
    return {
      value: "",
      histories: [],
      timer: null,
    };
  },
  mounted() {
    document.title = "搜索页面";
    this.histories.unshift(window.localStorage.getItem("histories"));
  },
  methods: {
    onSearch() {
      this.histories.unshift(this.value);
      window.localStorage.setItem("histories", this.histories);
    },
    onCancel() {
      this.value = "";
    },
  },
  watch: {
    value(newValue) {
      clearInterval(this.timer);
      this.timer = setTimeout(() => {
        console.log(newValue);

        // 这里应该有个axios请求
      }, 300);
    },
  },
};
</script>

<style>
</style>