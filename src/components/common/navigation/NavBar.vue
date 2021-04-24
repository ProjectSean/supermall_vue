<template>
  <!-- 用class而不是id，以防重复使用 -->
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
// import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";
// import Navigation from "components/common/navigation/"
export default {
  components: {},
};
</script>

<style lang="less">
.nav-bar {
  display: flex;
  line-height: 12.222vw;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  .left,
  .right {
    width: 16.667vw;
  }
  .center {
    flex: 1;
    text-align: center;
  }
}
</style>
