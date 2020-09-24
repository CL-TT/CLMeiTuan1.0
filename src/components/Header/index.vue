<template>
  <div class="m-header">
    <el-row class="tabbar-row">
      <tab-bar />
    </el-row>
    <el-row class="search-row-index">
      <search />
    </el-row>
  </div>
</template>

<script>
/**
 * 这个index组件是出口
 */

//引入两个组件
import tabBar from "./Tabbar";
import search from "./Search";

export default {
  components: {
    tabBar,
    search,
  },
};
</script>

<style lang="scss" scope>
.m-header,
.tabbar-row {
  width: 100% !important;
}

.m-header {
  height: 155px;

  .search-row-index {
    height: 115px;
    background-color: #fff;
    box-sizing: border-box;
  }
}
</style>
