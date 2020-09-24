<template>
  <div class="menus-page">
    <dl class="menus-dl">
      <dt>全部分类</dt>
      <dd v-for="item in menusList" :key="item.type">
        <i class="icon iconfont icon-meishi"></i>
        <span>
          <a href="#">{{ item.name }}</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-mingsu"></i>
        <span>
          <a href="#">名宿</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-maoyandianying"></i>
        <span>
          <a href="#">猫眼电影</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-jipiao"></i>
        <span>
          <a href="#">机票 / 火车票</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-xiuxianyule"></i>
        <span>
          <a href="#">休闲娱乐 / KTV</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-shenghuofuwu"></i>
        <span>
          <a href="#">生活服务</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-liren1"></i>
        <span>
          <a href="#">丽人 / 美发 / 医学美容</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-jiehun"></i>
        <span>
          <a href="#">结婚 / 婚纱摄影 / 婚宴</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-qinzi"></i>
        <span>
          <a href="#">亲子 / 儿童乐园 / 幼教</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-yundongjianshen"></i>
        <span>
          <a href="#">运动健身 / 健身中心</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-jiating"></i>
        <span>
          <a href="#">家装 / 建材 / 家具</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-xuexi"></i>
        <span>
          <a href="#">学习培训 / 音乐培训</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-yiliao1"></i>
        <span>
          <a href="#">医疗健康 / 宠物 / 爱车</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
      <dd>
        <i class="icon iconfont icon-jiuba"></i>
        <span>
          <a href="#">酒吧 / 密室逃脱</a>
        </span>
        <span class="icon2 iconfont icon-arrow-left"></span>
      </dd>
    </dl>

    <!-- 每一个标签下的详情页 -->
    <div class="detail" v-show="currentTags">
      <template>
        <div class="detail-item">
          <div class="detail-header">
            <h2>
              <a href="#">美食</a>
            </h2>
            <span>
              <router-link to="/">更多</router-link>
              <i class="iconfont icon-arrow-left"></i>
            </span>
          </div>
          <div class="detail-main">
            <span>
              <a href="#">代金券</a>
            </span>
            <span>
              <a href="#">甜点饮品</a>
            </span>
            <span>
              <a href="#">火锅</a>
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import api from "../../../api";

export default {
  data() {
    return {
      detail_arr: [
        {
          title: "美食",
          icon: "",
        },
      ],

      menusList: [], //左侧导航栏数据

      currentTags: null,
    };
  },

  async created() {
    const result = await api.getMenusList();

    this.menusList = result.data.data;
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/index/menus.scss";
</style>
