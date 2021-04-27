<template>
  <div class="detail">
    <detail-nav></detail-nav>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopsInfo"></detail-shop-info>
      <detail-image-info :imgInfo="imageInfo"></detail-image-info>
    </scroll>
  </div>
</template>

<script>
import DetailNav from "./childDetail/DetailNav";
import DetailSwiper from "./childDetail/DetailSlideShow";
import DetailBaseInfo from "./childDetail/DetailBaseInfo";
import DetailShopInfo from "./childDetail/DetialShopInfo";
import DetailImageInfo from "./childDetail/DetailImageInfo";

import { getDetail, Goods } from "network/detail";

import Scroll from "components/common/betterscroll/Scroll";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopsInfo: {},
      imageInfo: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      // 获取顶部轮播数据
      this.topImages = res.result.itemInfo.topImages;
      // 获取商品的对象
      this.goodsInfo = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shopsInfo = res.result.shopInfo;
    });
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    Scroll,
  },
};
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  padding-top: 12.222vw;
  z-index: 100;
  background-color: #fff;
  height: 100vh;
  .content {
    background-color: #fff;
    height: calc(100% - 12.222vw);
  }
}
</style>