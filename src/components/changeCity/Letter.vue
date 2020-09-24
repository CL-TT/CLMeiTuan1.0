<template>
  <div class="letter-page">
    <dl class="letter-dl">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in letter" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>

    <dl
      :id="'city-' + index"
      class="letter-each"
      v-for="(item, index) in letterGroup"
      :key="index"
    >
      <dt>{{ index }}</dt>
      <dd v-for="value in item" :key="value.id">
        <a href="#">{{ value.name }}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
/**
 * 这是按拼音首字母选择的组件
 */
export default {
  data() {
    return {
      letter: "ABCDEFGHIJKLMNPQRSTWXYZ",

      letterGroup: {},
    };
  },

  created() {
    let data = [
      {
        id: 1,
        name: "成都",
        pinyin: "chengdu",
        acronym: "cd",
        rank: "A",
        firstChar: "C",
      },
      {
        id: 2,
        name: "上海",
        pinyin: "上海",
        acronym: "cd",
        rank: "A",
        firstChar: "S",
      },
      {
        id: 3,
        name: "北京",
        pinyin: "beijing",
        acronym: "cd",
        rank: "A",
        firstChar: "B",
      },
      {
        id: 4,
        name: "南京",
        pinyin: "nanjing",
        acronym: "cd",
        rank: "A",
        firstChar: "N",
      },
      {
        id: 5,
        name: "南昌",
        pinyin: "nanchang",
        acronym: "cd",
        rank: "A",
        firstChar: "N",
      },
    ];

    let obj = {};

    for (let i = 0; i < data.length; i++) {
      if (!obj[data[i].firstChar]) {
        obj[data[i].firstChar] = [];
      }

      obj[data[i].firstChar].push(data[i]);
    }

    this.letterGroup = obj;
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/changeCity/letter.scss";
</style>
