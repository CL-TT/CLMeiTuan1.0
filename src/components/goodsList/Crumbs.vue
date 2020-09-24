<template>
  <div class="crumbs-page">
    <el-breadcrumb class="crumbs-el" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ position }}王井府</el-breadcrumb-item>
      <el-breadcrumb-item>{{ position }}火锅</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
/**
 * 面包屑导航组件
 */
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["position"]),
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/goodsList/crumbs.scss";
</style>
