<template>
  <div class="home-page">
    <el-row class="home-first">
      <!-- 左边的导航条区域 -->
      <el-col class="menus-left" :span="7">
        <menus />
      </el-col>
      <!-- 右边的生活区域 -->
      <el-col :span="17">
        <life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-content :nav="nav" :color="color2" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-content :nav="youhui" :color="color1" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
/**
 * 这是首页部分
 */

import menus from "../components/index/Menus"; //引入菜单组件
import life from "../components/index/Life"; //引入生活组件
import myContent from "../components/index/MyContent"; //引入主体内容组件

export default {
  components: {
    menus,
    life,
    myContent,
  },

  data() {
    return {
      nav: {
        title: "推荐名宿",
        list: [
          {
            text: "全部",
            tab: "all",
          },
          {
            text: "约会聚餐",
            tab: "food",
          },
          {
            text: "丽人SPA",
            tab: "spa",
          },
          {
            text: "电影演出",
            tab: "movie",
          },
          {
            text: "品质出游",
            tab: "travel",
          },
        ],
      },

      youhui: {
        title: "很优惠",
        list: [
          {
            text: "全部",
            tab: "all",
          },
          {
            text: "美食",
            tab: "food",
          },
          {
            text: "休闲",
            tab: "free",
          },
        ],
      },

      color1: "#528",

      color2: "#917",
    };
  },
};
</script>

<style lang="scss" scope>
.home-page {
  height: 100%;

  .home-first {
    width: 1230px;
    height: 427px;
    margin: 0 auto;
  }
}
</style>
