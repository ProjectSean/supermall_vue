<template>
  <div class="detail_swiper">
    <swiper>
      <swiper-item class="swiper_item" v-for="item in topImages" :key="item.id">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSlideShow",
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style lang="less" scoped>
.swiper_item {
  height: 50vh;
  overflow: hidden;
  img {
    width: 100%;
    height: 100vh;
  }
}
</style>