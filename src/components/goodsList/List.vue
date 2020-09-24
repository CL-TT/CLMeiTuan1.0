<template>
  <div class="list-page">
    <ul>
      <li
        :class="{ price: item.key == 's-price' }"
        v-for="item in nav"
        :key="item.key"
      >
        {{ item.name }}
      </li>
    </ul>
    <el-row></el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true,
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false,
        },
        {
          key: "s-score",
          name: "人生最高",
          active: false,
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/goodsList/list.scss";
</style>
