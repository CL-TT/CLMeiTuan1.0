<template>
  <div class="goodslist-page">
    <el-row>
      <!-- 面包屑导航 -->
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy />
        </el-row>
        <el-row class="good-el-row">
          <list />
          <item v-for="item in goods_list" :key="item.title" :itemObj="item" />
        </el-row>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>

<script>
/**
 * 商品列表页
 */

import crumbs from "../components/goodsList/Crumbs";
import categroy from "../components/goodsList/Categroy";
import list from "../components/goodsList/List";
import item from "../components/goodsList/Item";

import api from "../../api";

export default {
  components: {
    crumbs,
    categroy,
    list,
    item,
  },

  async created() {
    const result = await api.getItemList();

    this.goods_list = result.data.data;
  },

  data() {
    return {
      goods_list: [],
    };
  },
};
</script>

<style lang="scss" scope>
.goodslist-page {
  width: 1220px;
  margin: 0 auto;

  .good-el-row {
    width: 100%;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    padding: 20px 0;
  }
}
</style>
