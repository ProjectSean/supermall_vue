<template>
  <div class="tab-bar-item" @click="tabClick">
    <slot v-if="isActive" name="item-icon-active"></slot>
    <slot v-else name="item-icon"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    tabClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>


<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 12vw;
  font-size: 3.889vw;
}
.tab-bar-item img {
  margin-top: 0.833vw;
  width: 6.667vw;
  height: 6.667vw;
  vertical-align: middle;
}
</style>



