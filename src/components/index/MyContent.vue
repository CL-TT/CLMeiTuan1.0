<template>
  <div class="content-page">
    <!-- 头部的导航栏 -->
    <!-- 这个绑定class是为了能动态的改变背景颜色 -->
    <dl
      class="content-page-dl"
      :style="{ backgroundColor: color }"
      @mouseover="mouseover"
    >
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="item in nav.list"
        :key="item.tab"
        :data-type="item.tab"
        :class="{ active: kind == item.tab }"
      >
        {{ item.text }}
      </dd>
    </dl>

    <!-- 主体内容 -->
    <ul class="content-page-ul">
      <li v-for="item in goods_list[kind]" :key="item.title">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subTitle }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥{{ item.price }}</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../../api";
export default {
  data() {
    return {
      kind: "all",

      dl_class: "orange",

      dd_active: "active",

      goods_list: [],
    };
  },

  methods: {
    mouseover(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName !== "dd") {
        //如果不是dd, 那么直接返回
        return;
      }
      //根据对应的data-type值来决定显示什么数据
      this.kind = dom.getAttribute("data-type");
    },
  },

  props: {
    nav: {
      type: Object,
      default() {
        return {};
      },
    },

    color: {
      type: String,
      default() {
        return "";
      },
    },
  },

  async created() {
    const result = await api.getMainContent();
    this.goods_list = result.data.data;
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/index/mycontent.scss";
</style>
