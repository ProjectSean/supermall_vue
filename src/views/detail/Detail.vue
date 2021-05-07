<template>
  <div class="detail">
    <detail-nav @titleClick="titleClick" ref="nav"></detail-nav>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopsInfo"></detail-shop-info>
      <detail-image-info :imgInfo="imageInfo" ref="params"></detail-image-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click="backTop" v-show="isBackTopShow"></back-top>
    <!-- <dir>{{ $store.carList }}</dir> -->
  </div>
</template>

<script>
import DetailNav from "./childDetail/DetailNav";
import DetailSwiper from "./childDetail/DetailSlideShow";
import DetailBaseInfo from "./childDetail/DetailBaseInfo";
import DetailShopInfo from "./childDetail/DetialShopInfo";
import DetailImageInfo from "./childDetail/DetailImageInfo";
import DetailCommentInfo from "./childDetail/DetailCommentInfo";
import DetailBottomBar from "./childDetail/DetailBottomBar";
import BackTop from "components/content/backTop/BackTop";
import { getDetail, Goods, getRecommend } from "network/detail";
import GoodsList from "components/content/goods/GoodsList";

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
      commentInfo: {},
      recommends: [],
      themeTopY: [],
      scroll: null,
      currentIndex: 0,
      navTop: 0,
      isBackTopShow: false,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      // 获取顶部轮播数据
      this.topImages = res.result.itemInfo.topImages;
      // 获取商品的对象
      this.goodsInfo = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shopsInfo = res.result.shopInfo;
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
      }

      this.$nextTick(() => {
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        this.navTop = this.$refs.nav.$el.offsetTop;
      });
    });
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  mounted() {},
  updated() {},
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    BackTop,
  },
  methods: {
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index] + this.navTop, 500);
    },
    contentScroll(position) {
      // 获取y值
      const positionY = -position.y + this.navTop;
      // 进行纵轴值比较
      let length = this.themeTopY.length;
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i) {
          if (
            (i < length - 1 &&
              positionY >= this.themeTopY[i] &&
              positionY <= this.themeTopY[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopY[i])
          ) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
      }
      this.isBackTopShow = -position.y > 1000;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.titlle = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.price;
      product.iid = this.iid;
      // this.$store.commit("addCart", product);
    },
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