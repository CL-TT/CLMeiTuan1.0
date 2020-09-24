<template>
  <div class="life-page">
    <!-- 头部导航区 -->
    <el-row>
      <ul class="life-page-header">
        <li class="li-orange">
          <router-link to="/">美团外卖</router-link>
        </li>
        <li class="li-default">
          <router-link to="/">猫眼电影</router-link>
        </li>
        <li class="li-default">
          <router-link to="/">美团酒店</router-link>
        </li>
        <li class="li-orange">
          <router-link to="/">名宿 / 公寓</router-link>
        </li>
        <li class="li-orange">
          <router-link to="/">商家入驻</router-link>
        </li>
        <li class="li-default">
          <router-link to="/">美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <!-- 中间轮播图区域 -->
    <el-row>
      <!-- 轮播图 -->
      <el-col class="life-swiper-col" :span="14">
        <el-carousel
          class="life-swiper-col-el"
          height="240px"
          indicator-position="outside"
        >
          <el-carousel-item v-for="item in swiperList" :key="item.src">
            <a :href="item.url">
              <img :src="item.src" alt />
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <!-- logo图标 -->
      <el-col class="life-logo-el" :span="4">
        <a href="#">
          <div class="life-logo"></div>
        </a>
      </el-col>
      <!-- 登录注册区域 -->
      <el-col class="life-login-el" :span="6">
        <div class="life-login-el-div">
          <img src="https://hf.meituan.com/img/avatar.jpg" alt />
          <h3>Hi {{ userName ? userName : "你好" }}</h3>
          <template v-if="!userName">
            <router-link :to="{ name: 'register' }">
              <el-button round>注册</el-button>
            </router-link>
            <router-link :to="{ name: 'login' }">
              <el-button round>立即登录</el-button>
            </router-link>
          </template>
          <div v-else class="touxiang">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3161344862,1974118191&fm=26&gp=0.jpg"
              alt=""
            />
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 底部logo区域 -->
    <el-row class="life-logo-row">
      <el-col class="life-bom1-el" :span="7">
        <a href="#">
          <div class="life-bom-logo1"></div>
        </a>
      </el-col>
      <el-col class="life-bom1-el" :span="7">
        <a href="#">
          <div class="life-bom-logo2"></div>
        </a>
      </el-col>
      <el-col class="life-bom1-el" :span="4">
        <a href="#">
          <div class="life-bom-logo3"></div>
        </a>
      </el-col>
      <el-col class="life-bom1-el" :span="6">
        <div class="life-code-div">
          <img src="https://hf.meituan.com/img/download-qr.png" alt />
          <p class="span1">美团APP手机版</p>
          <p class="span2">
            <span class="red">1元起</span>
            <span>吃喝玩乐</span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      swiperList: [
        {
          url: "/",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600910456210&di=20d895fd265919915e9f9598a3aa6c76&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3D8951da15acc379317d688629dbc5b784%2F4d086e061d950a7bf3a956d709d162d9f2d3c901.jpg",
        },
        {
          url: "/",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600910486340&di=058792b4a9e0a700c51430afc65fdfad&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F29%2F20181029175126_tvnjo.jpg",
        },
        {
          url: "/",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600910521225&di=9a37800d23f47241c000d8da2681220a&imgtype=0&src=http%3A%2F%2Fimg.pojiewan.com%2FArticle%2FUploadFiles%2F201708%2F20170807152337728.jpg",
        },
      ],
    };
  },

  computed: {
    ...mapState(["userName"]),
  },

  created() {
    console.log(this.userName);
  },
};
</script>

<style lang="scss">
@import "../../assets/css/index/life.scss";
</style>
