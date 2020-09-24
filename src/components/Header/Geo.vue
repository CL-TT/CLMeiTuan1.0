<template>
  <div class="geo-page">
    <!-- 地理位置区域 -->
    <div class="position">
      <i class="el-icon-location-outline icon" />{{ position }}
      <router-link class="change" :to="{ name: 'changecity' }"
        >切换城市</router-link
      >[
      <a
        href="#"
        :class="{ city: index != nearCity.length - 1 }"
        v-for="(item, index) in nearCity"
        :key="item.id"
        >{{ item.name }}</a
      >
      ]
    </div>
    <!-- 用户登录区域 -->
    <div class="user" v-if="!userName">
      <router-link class="login" :to="{ name: 'login' }">立即登录</router-link>
      <router-link :to="{ name: 'register' }">注册</router-link>
    </div>
    <div class="user" v-else>
      <span>{{ userName }}</span>
    </div>
  </div>
</template>

<script>
/**
 * 这是头部tabbar的左边部分  地理位置组件
 * 1. 它分为两部分， 左边是地理信息， 右边是登录与注册
 */
import api from "../../../api";

import { mapState } from "vuex";

export default {
  data() {
    return {
      nearCity: [],
    };
  },

  computed: {
    ...mapState(["position", "userName"]),
  },

  async created() {
    const result = await api.getCurLocation();
    this.nearCity = result.data.data.nearCity;
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/header/geo.scss";
</style>
