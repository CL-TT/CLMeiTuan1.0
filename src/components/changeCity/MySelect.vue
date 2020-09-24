<template>
  <div class="select-page" @click="showModal" v-document-click="documentClick">
    <div class="wrap">
      <span>{{ title }}</span>
      <i class="el-icon-caret-bottom select-icon"></i>
      <div :class="{ 'select-list': true, active: isActive }">
        <p>{{ selectList.title }}</p>
        <div class="select-list-wrap">
          <span
            :class="{ active: item == title }"
            @click="changeValue(item)"
            v-for="(item, index) in selectList.list"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 1. 在点击div时， 会显示列表
 * 2. 在点击非div部分时， 会隐藏列表
 * 3. 这个时候就需要在document上绑定事件
 * 4. 需要自定义指令
 * 5. 这个列表的显示状态由父组件来传递
 */
export default {
  props: {
    selectList: {
      type: Object,
      default() {
        return {};
      },
    },
    isActive: {
      type: Boolean,
    },
    title: String,
  },

  computed: {},

  data() {
    return {
      isActiveClass: false,
    };
  },

  methods: {
    /**
     * 点击之后显示下面的列表， 还是依靠样式来实现
     */
    showModal(e) {
      //阻止事件冒泡
      e.stopPropagation();

      this.$emit("changeStatus", true);
    },

    documentClick() {
      this.$emit("changeStatus", false);
    },

    /**
     * 改变下拉框中的value值
     */
    changeValue(value) {
      this.$emit("changeValue", value);

      this.$store.dispatch("changePosition", value);
    },
  },
};
</script>

<style lang="scss" scope>
@import "../../assets/css/changeCity/myselect.scss";
</style>
