<template>
  <div class="item-page">
    <div class="item-img">
      <img :src="itemObj.image" alt="" />
    </div>
    <dl class="item-mes">
      <dt>
        <router-link :to="{ name: 'produceDetail' }">{{
          itemObj.title
        }}</router-link>
      </dt>
      <dd>
        <el-rate
          class="item-el-rate"
          v-model="itemObj.score"
          disabled
          show-score
          text-color="#ff9900"
        >
        </el-rate>
        <span class="star-com" v-if="itemObj.score > 4.5">很好</span>
        <span class="star-com" v-else-if="itemObj.score > 4">好</span>
        <span class="star-com" v-else-if="itemObj.score > 3.5">不错</span>
        <span class="star-com" v-else-if="itemObj.score > 3">一般</span>
        <span class="star-com" v-else>差</span>
        <span class="people">{{ itemObj.commentNum }}人评论</span>
        <p class="address">
          <span>
            <span v-for="(item, index) in itemObj.tab" :key="index">{{
              item + (index != itemObj.tab.length - 1 ? "|" : "")
            }}</span>
          </span>
          <span class="address-span">{{ itemObj.address }}</span>
          <span class="map">
            <i class="el-icon-location-outline location"></i>
            <span>查看地图</span>
          </span>
        </p>
        <p class="avgprice">
          <span>人均￥{{ itemObj.avgPrice }}</span>
        </p>
        <ul class="detail-list">
          <li
            class="detail-item"
            v-for="item in itemObj.dealItems"
            :key="item.title"
          >
            <p class="item-title">{{ item.title }}</p>
            <p class="item-price">
              <span class="current-price">￥{{ item.price }}</span>
              <span>门市价￥{{ item.counterPrice }}</span>
              <span class="over">已售{{ item.saleNum }}</span>
            </p>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    itemObj: Object,
  },

  data() {
    return {
      list: [],
    };
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/goodsList/item.scss";
</style>
