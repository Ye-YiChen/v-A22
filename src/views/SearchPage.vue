<template>
  <div class="SearchPage" v-cloak>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch"
    @cancel="onCancel"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:'',
    }
  },
  mounted() {
    document.title = "搜索页面";
  },
  methods:{
    onSearch(){},
    onCancel(){
      this.value=''
    }
  }
};
</script>

<style>
</style>