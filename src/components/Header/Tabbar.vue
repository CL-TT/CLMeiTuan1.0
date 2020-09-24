<template>
  <el-row class="tabbar">
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <my-nav />
    </el-col>
  </el-row>
</template>

<script>
/**
 * 这个tabbar组件又可以分为两部分, 所以又分为两个组件
 * 1. 一部分是左边的地理信息
 * 2. 一部分是右边的登录按钮
 */

import geo from "./Geo";
import myNav from "./MyNav";

export default {
  components: {
    geo,
    myNav,
  },
};
</script>

<style lang="scss" scope>
.tabbar {
  width: 100%;
  height: 40px;
  background-color: #f8f8f8;
}
</style>
