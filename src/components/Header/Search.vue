<template>
  <div class="search-page">
    <el-row class="search-row">
      <el-col :span="3" class="logo">
        <img src="../../../public/img/header/logo.png" alt="美团logo" />
      </el-col>
      <el-col :span="17" class="search-col">
        <div class="search-form">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            class="search-input"
            @focus="focus"
            @blur="blur"
            @input="handleInput"
          ></el-input>
          <el-button
            type="primary"
            icon="el-icon-search"
            class="search-btn"
          ></el-button>
        </div>
        <div class="idea">
          <a href="#" v-for="(item, index) in hotSearchList" :key="index">{{
            item
          }}</a>
        </div>
        <dl class="hot-search" v-show="isHotSearch">
          <dt>热门搜索</dt>
          <!-- 热门搜索的数据应该是动态获取到 -->
          <div class="dd-wrap">
            <dd v-for="(item, index) in hotSearchList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </div>
        </dl>
        <dl class="search-list" v-if="isSearchList">
          <dd v-for="(item, index) in searchList" :key="index">
            <router-link :to="{ name: 'goods', params: { name: item } }">{{
              item
            }}</router-link>
          </dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/**
 * 这是头部的搜索部分
 */

import api from "../../../api";

export default {
  data() {
    return {
      searchWord: "", //搜索框的双向数据绑定
      isSearchList: false, //是否显示搜索列表
      isHotSearch: false, //是否显示热门搜索
      hotSearchList: [], //热门搜索列表
      searchList: [], //搜索列表
    };
  },

  async created() {
    const value = await api.getHotSearchList();

    this.hotSearchList = value.data.data;
  },

  methods: {
    /**
     * 输入框聚焦事件， 聚焦之后显示热门搜索
     */
    focus() {
      this.isHotSearch = true;
    },

    /**
     * 输入框失焦事件， 失焦之后显示搜索列表
     */
    blur() {
      //让这个热门搜索延迟一会消失， 要不然还没等跳转就消失了
      setTimeout(() => {
        this.isHotSearch = false;
        this.isSearchList = false;
      }, 200);
    },

    /**
     * 输入框的输入事件
     */
    async handleInput() {
      this.isSearchList = true;
      const result = await api.getSearchList();
      this.searchList = result.data.data.list.filter((item) => {
        return item.indexOf(this.searchWord) > -1;
      });
    },
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/header/search.scss";
</style>
