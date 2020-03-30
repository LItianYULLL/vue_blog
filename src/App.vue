<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link :to="{name:'Home'}">Home</router-link> |
      <router-link :to="{name:'About'}">About</router-link>
    </div> -->
    <!-- 显示当前的路由地址所对应的内容 -->
    <router-view/>
    <!-- 如果在一个页面中显示多个视图，并且让每个视图显示在指定的位置上面，这个时候就要用到命名视图了 -->
    <!-- <router-view name="email"></router-view>
    <router-view name="tel"></router-view> -->
  </div>
</template>
<script>
export default {
  beforeMount() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (user != null) {
      this.$store.commit("addUser", user);
      this.$store.commit("setIsSigned");
    }
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background-color: #f6f6f6;
  color: #2c3e50;
}
.app {
  background-color: #ffffff;
}
.top-10{
  margin-top: 10px;
}
</style>