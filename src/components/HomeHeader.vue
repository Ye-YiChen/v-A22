<template>
  <header class="header">
    <div class="logo">
      <a href="javascript:;"
        ><img src="../../public/images/ico-a.png" alt=""
      /></a>
    </div>
    <div class="search-bar">
      <div class="search-ico">&#xe60b;</div>
      <input
        type="text"
        class="small-input search-text"
        name=""
        id=""
        placeholder="最新产品"
      />
    </div>
    <div class="service">&#xe65f;</div>
    <div class="message">&#xe6ba;</div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  font-family: "iconfont";
  display: flex;
  padding: 0.4rem 0.2rem;
  margin: 0;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #f5444c;
  color: #fff;
  z-index: 99;
}

.logo {
  width: 1rem;
  height: 1rem;
}

.search-bar {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  border-radius: 0.2rem;
  border: 0.0533rem solid #e0e0e0;
  box-sizing: border-box;
}

.search-ico {
  font-size: 0.64rem;
  color: #ef4c53;
  padding: 0 0.2rem;
}

.search-text {
  padding: 0;
  border: none;
}

.service {
  font-size: 1.0667rem;
  font-weight: 700;
  line-height: 1rem;
}

.message {
  font-size: 0.6667rem;
  line-height: 1rem;
}
</style>