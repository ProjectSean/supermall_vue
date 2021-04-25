<template>
  <div class="tab_control">
    <div
      class="tab_control_item"
      @click="itemClick(index)"
      :class="{ active: index === currentIndex }"
      v-for="(item, index) in titles"
      :key="item.id"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style lang="less">
.tab_control {
  display: flex;
  text-align: center;
  font-size: 4.167vw;
  height: 11.111vw;
  line-height: 11.111vw;
  .tab_control_item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 3px solid var(--color-high-text);
      padding: 1.389vw;
    }
  }
}
</style>
