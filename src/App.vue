<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<script>
export default {

};
</script>
<style>
[v-cloak]{
  display: none;
}
body{
  min-height: 100%;
}
#app{
  min-height: 100%;
}
html {
  min-height: 100%;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  background-color: rgb(253, 241, 241);
}

header {
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  top: 0;
  background-color: rgb(245, 68, 76);
  color: #fff;
}

img {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: #eb2932;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

.wide-btn {
  display: block;
  width: 100%;
  height: 1.2rem;
  margin-bottom: 0.5rem;
  border-radius: 0.15rem;
  font-size: 0.5867rem;
  border: 0;
  box-shadow: 0.1rem 0.1rem #ccc;
}

p {
  margin: 0;
}

.small-btn {
  display: inline-block;
  height: 1.2rem;
  border-radius: 0.4rem;
  font-size: 0.5867rem;
  border: 0;
}

.abled-btn {
  background-color: #ef4c53;
  color: #fff;
  height: 1rem;
}

.disabled-btn {
  color: #ccc;
  background-color: #f0f0f0;
  height: 1rem;
}

.wide-input {
  width: 100%;
  height: 1rem;
  border-radius: 0.45rem;
  border: none;
  background-color: transparent;
  box-shadow: 0 0 0.1rem #ef4c53;
  padding-left: 0.2667rem;
  margin-bottom: 0.4rem;
  box-sizing: border-box;
  outline: none;
  color: #232332;
  font-size: 0.35rem;
}

.small-input {
  height: 1rem;
  border-radius: 0.1333rem;
  border: 0.0533rem solid #e0e0e0;
  padding-left: 0.2667rem;
  box-sizing: border-box;
  outline: none;
  color: #232332;
  font-size: 0.4267rem;
}

.red {
  color: #ef4c53;
}

.blue {
  color: rgb(43, 43, 241);
}

.yellow {
  color: rgb(241, 192, 55);
}

.green {
  color: rgb(90, 146, 90);
}

.fade {
  color: #333;
}

.back-btn {
  display: none;
  position: fixed;
  text-align: right;
  bottom: 0.5rem;
  right: 0;
  font-family: "iconfont";
  font-size: 0.8rem;
  color: #eb2932;
  padding: 0.4rem;
  z-index: 99;
}
</style>
