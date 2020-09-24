<template>
  <div class="my-nav">
    <ul class="nav-ul">
      <li class="nav-li list">
        <router-link to="/">我的美团</router-link>
        <dl class="dl">
          <dd>
            <router-link to="/">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/">抵用券</router-link>
          </dd>
          <dd>
            <router-link to="/">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="nav-li">
        <router-link to="/">手机APP</router-link>
      </li>
      <li class="nav-li list">
        <router-link to="/">商家中心</router-link>
        <dl class="dl bd">
          <dd>
            <router-link to="/">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="/">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="/">餐饮代理商招募</router-link>
          </dd>
        </dl>
      </li>
      <li class="nav-li list site">
        <router-link to="/">网站导航</router-link>
        <div class="contain">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <div class="dd-wrap">
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">火车票</router-link>
              </dd>
              <dd>
                <router-link to="/">名宿</router-link>
              </dd>
              <dd>
                <router-link to="/">经济型酒店</router-link>
              </dd>
              <dd>
                <router-link to="/">主题酒店</router-link>
              </dd>
              <dd>
                <router-link to="/">商务酒店</router-link>
              </dd>
              <dd>
                <router-link to="/">公寓</router-link>
              </dd>
              <dd>
                <router-link to="/">豪华酒店</router-link>
              </dd>
              <dd>
                <router-link to="/">客栈</router-link>
              </dd>
              <dd>
                <router-link to="/">青年旅社</router-link>
              </dd>
              <dd>
                <router-link to="/">度假酒店</router-link>
              </dd>
              <dd>
                <router-link to="/">别墅</router-link>
              </dd>
              <dd>
                <router-link to="/">农家院</router-link>
              </dd>
            </div>
          </dl>
          <dl class="eat">
            <dt>吃美食</dt>
            <div class="dd-wrap">
              <dd>
                <router-link to="/">烤鱼</router-link>
              </dd>
              <dd>
                <router-link to="/">特色小吃</router-link>
              </dd>
              <dd>
                <router-link to="/">烧烤</router-link>
              </dd>
              <dd>
                <router-link to="/">自助餐</router-link>
              </dd>
              <dd>
                <router-link to="/">火锅</router-link>
              </dd>
              <dd>
                <router-link to="/">代金券</router-link>
              </dd>
            </div>
          </dl>
          <dl class="movies">
            <dt>看电影</dt>
            <div class="dd-wrap">
              <dd>
                <router-link to="/">热映电影</router-link>
              </dd>
              <dd>
                <router-link to="/">热门影院</router-link>
              </dd>
              <dd>
                <router-link to="/">热映电影口碑榜</router-link>
              </dd>
              <dd>
                <router-link to="/">最受期待电影</router-link>
              </dd>
              <dd>
                <router-link to="/">国内票房榜</router-link>
              </dd>
              <dd>
                <router-link to="/">北美排行榜</router-link>
              </dd>
              <dd>
                <router-link to="/">电影排行榜</router-link>
              </dd>
            </div>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <div class="dd-wrap">
              <dd>
                <router-link to="/">
                  <img src="../../../public/img/header/meituan.png" alt="美团app" title="美团app" />
                </router-link>
              </dd>
              <dd>
                <router-link to="/">
                  <img src="../../../public/img/header/waimai.png" alt="外卖app" title="外卖app" />
                </router-link>
              </dd>
              <dd>
                <router-link to="/">
                  <img src="../../../public/img/header/t3.png" alt="名宿app" title="名宿app" />
                </router-link>
              </dd>
              <dd>
                <router-link to="/">
                  <img src="../../../public/img/header/dianping.png" alt="点评app" title="点评app" />
                </router-link>
              </dd>
              <dd>
                <router-link to="/">
                  <img src="../../../public/img/header/maoyan.png" alt="猫眼app" title="猫眼app" />
                </router-link>
              </dd>
            </div>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * 这是首部的tabbar的右边部分， 右边导航
 */
export default {};
</script>

<style lang="scss" scope>
@import "../../assets/css/header/mynav.scss";
</style>
