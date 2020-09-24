<template>
  <div class="myselect-page">
    <dl class="tab">
      <dt>
        <span>{{ title }}</span>
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
        <span class="select-title">{{ title }}</span>
        <div class="list-wrap">
          <span v-for="item in list" :key="item.id">{{ item.name }}</span>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    list: Array,
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/goodsList/myselect.scss";
</style>
