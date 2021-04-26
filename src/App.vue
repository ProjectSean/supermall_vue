<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <main-tab-bar style="z-index: 9"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  components: {
    MainTabBar,
  },
};
</script>

<style lang="less">
@import "assets/css/base.css";
</style>
