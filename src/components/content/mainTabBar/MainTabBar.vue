<template >
  <tab-bar>
    <tab-bar-item path="/home">
      <template #item-icon>
        <img src="~assets/images/tabbar/home.svg" alt=""
      /></template>
      <template #item-icon-active>
        <img src="~assets/images/tabbar/home_active.svg" alt=""
      /></template>
      <template #item-text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template #item-icon>
        <img src="~assets/images/tabbar/category.svg" alt=""
      /></template>
      <template #item-icon-active>
        <img src="~assets/images/tabbar/category_active.svg" alt=""
      /></template>
      <template #item-text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <template #item-icon>
        <img src="~assets/images/tabbar/shopcart.svg" alt=""
      /></template>
      <template #item-icon-active>
        <img src="~assets/images/tabbar/shopcart_active.svg" alt=""
      /></template>
      <template #item-text><div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template #item-icon>
        <img src="~assets/images/tabbar/profile.svg" alt=""
      /></template>
      <template #item-icon-active>
        <img src="~assets/images/tabbar/profile_active.svg" alt=""
      /></template>
      <template #item-text><div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBaritem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style>
/* @import "./assets/css/base.css"; */
</style>
