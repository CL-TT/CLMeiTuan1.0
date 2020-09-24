<template>
  <div class="hotcity-page">
    <dl class="hotcity-page-dl">
      <dt>{{ title }}</dt>
      <dd v-for="(item, index) in hotCityList" :key="index">
        <a href="#">{{ item }}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
/**
 * 热门城市的组件
 */
export default {
  props: {
    title: String,
    hotCityList: Array,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/changeCity/hotcity.scss";
</style>
