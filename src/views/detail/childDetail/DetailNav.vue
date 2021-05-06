<template>
  <div>
    <navigation class="detail_nav">
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/images/common/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="item.id"
            class="title_item"
            :class="{ active: index === currentIndex }"
            @click="titleClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </navigation>
  </div>
</template>

<script>
import Navigation from "components/common/navigation/NavBar.vue";
export default {
  name: "DetailNav",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    Navigation,
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
  },
};
</script>

<style lang="less" scoped>
.detail_nav {
  // margin-bottom: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .title {
    display: flex;
    font-size: 3.5vw;
    .title_item {
      flex: 1;
    }
    .active {
      color: var(--color-high-text);
    }
  }
}
</style>