<template>
  <div class="change-city-page">
    <el-row class="city-page-el">
      <province />
    </el-row>
    <el-row class="city-page-el">
      <hot-city :title="title1" :hotCityList="hotCityList" />
    </el-row>
    <el-row class="city-page-el">
      <hot-city :title="title2" :hotCityList="lastCityList" />
    </el-row>
    <el-row class="city-page-el last">
      <letter />
    </el-row>
  </div>
</template>

<script>
/**
 * 切换城市的页面
 */

import province from "../components/changeCity/Province"; //按省份选择的组件

import hotCity from "../components/changeCity/HotCity"; //热门城市组件

import letter from "../components/changeCity/Letter"; //按拼音首字母选择

import api from "../../api";

export default {
  data() {
    return {
      title1: "热门城市：",
      title2: "最近访问：",

      hotCityList: [], //热门城市列表
      lastCityList: [], //最近搜索的城市列表
    };
  },

  components: {
    province,
    hotCity,
    letter,
  },

  async created() {
    const result_hot = await api.getHotCity();
    const result_last = await api.getLastCity();

    this.hotCityList = result_hot.data.data.map((item) => item.name);

    this.lastCityList = result_last.data.data.map((item) => item.name);
  },
};
</script>

<style lang="scss" scope>
.change-city-page {
  width: 1220px;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: 4px;

  .city-page-el {
    width: 96%;
    margin: 0 auto;
    padding: 30px 0;
    border-bottom: 1px solid #ccc;

    &.last {
      border-bottom: none;
    }
  }
}
</style>
