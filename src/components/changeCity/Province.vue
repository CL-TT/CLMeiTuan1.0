<template>
  <div class="province-page">
    <span class="span">按省份选择：</span>
    <my-select
      :select-list="provinceList"
      :isActive="isProvinceActive"
      @changeStatus="changeStatus1"
      :title="provinceTitle"
      @changeValue="changeValueP"
    />
    <my-select
      :select-list="cityList"
      :isActive="isCityActive"
      @changeStatus="changeStatus2"
      :title="cityTitle"
      @changeValue="changeValueC"
    />
    <div class="search-div">
      <span class="span">直接搜索: </span>
      <el-select
        v-model="searchWorld"
        class="privince-select"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市中心或拼音"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="(item, index) in searchList"
          :key="index"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
/**
 * 这是按省份选择的组件
 */

//引入选择框组件
import MySelect from "../../components/changeCity/MySelect";

import api from "../../../api";

export default {
  data() {
    return {
      provinceTitle: "省份", //省份选择框里面的value值
      cityTitle: "城市",
      provinceList: {
        title: "省份",
        list: ["上海", "北京", "上海", "天津", "广州"],
      },
      cityList: {
        title: "城市",
        list: ["上海", "北京", "上海", "天津", "广州"],
      },

      isProvinceActive: false, //控制子组件select的下面的列表的显示
      isCityActive: false,

      searchWorld: "", //搜索关键字

      loading: false,

      searchList: ["上海", "北京", "上海", "天津", "广州"],
    };
  },

  async created() {
    const result = await api.getProvinceList();

    this.provinceList.list = result.data.data.map((item) => item.provinceName);
  },

  components: {
    MySelect,
  },

  methods: {
    changeStatus1(target) {
      this.isProvinceActive = target;
      if (target) {
        this.isCityActive = false;
      }
    },

    changeStatus2(target) {
      this.isCityActive = target;
      if (target) {
        this.isProvinceActive = false;
      }
    },

    remoteMethod(e) {
      console.log(e);
    },

    /**
     * 改变省份的value值
     */
    changeValueP(value) {
      this.provinceTitle = value;
    },

    /**
     * 改变城市的value值
     */
    changeValueC(value) {
      this.cityTitle = value;
    },
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/changeCity/province.scss";
</style>
