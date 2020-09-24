<template>
  <div class="categroy-page">
    <dl>
      <dt>分类</dt>
      <dt class="all">
        <a href="#">全部</a>
      </dt>
      <div class="categroy-list">
        <dd v-for="item in menusList" :key="item.title">
          <my-select :title="item.title" :list="item.subList" />
        </dd>
      </div>
    </dl>
    <dl>
      <dt>区域</dt>
      <dt class="all">
        <a href="#">全部</a>
      </dt>
      <div class="categroy-list">
        <dd v-for="item in menusList" :key="item.title">
          <my-select :title="item.title" :list="item.subList" />
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import MySelect from "../../components/goodsList/MySelect";

export default {
  components: {
    MySelect,
  },
  data() {
    return {
      menusList: [
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: "Japan",
            },
            {
              name: "中国菜菜",
              id: "China",
            },
            {
              name: "jki菜菜",
              id: "Chinasdf",
            },
            {
              name: "中国菜菜sdr",
              id: "Chinanmjk",
            },
          ],
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/goodsList/categroy.scss";
</style>
