<template>
  <div class="default-page">
    <el-container class="container">
      <el-header class="header" style="height: 100%">
        <my-header />
      </el-header>
      <el-main class="main" style="height: 100%">
        <router-view></router-view>
      </el-main>
      <el-footer style="height: 100%">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
//引入头部的index.vue
import myHeader from "../components/Header/index";
//引入尾部的index.vue
import myFooter from "../components/footer/index";

export default {
  components: {
    myHeader,
    myFooter,
  },
};
</script>

<style lang="scss" scope>
.default-page,
.container,
.header,
.main {
  width: 100% !important;
}

.default-page {
  min-width: 1300px;
  height: 100%;

  .header {
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
    height: 197px;
    padding: 0 !important;
  }

  .main {
    height: 100%;
    padding-bottom: 30px;
  }
}
</style>
