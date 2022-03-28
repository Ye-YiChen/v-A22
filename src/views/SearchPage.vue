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
    <search-association v-show="value" :likes="likes" />
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
      likes: [],
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
      this.goBack()
      return false;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch: {
    value(newValue) {
      clearInterval(this.timer);
      this.timer = setTimeout(() => {
        console.log(newValue);
        this.axios({
          method: "get",
          url: "/item/search",
          data:{
            like: this.value,
          },
          params: {
            like: this.value,
          },
        })
          .then((response) => {
            console.log(response);
            if (response.data.status != 0) {
              this.$toast.fail(response.data.message);
            } else {
              this.likes = response.data.data;
            }
          })
          .catch((err) => {
            this.$toast.fail(err.message);
          });
      }, 300);
    },
  },
};
</script>

<style scoped>
</style>