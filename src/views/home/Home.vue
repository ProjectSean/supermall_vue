<template>
  <div id="home">
    <navigation class="home_nav">
      <template v-slot:center>购物街</template>
    </navigation>

    <tab-control
      class="tab_control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl_fixed"
      v-show="isTabShow"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <slide-show :banners="banners" @swiperImageLoad="swiperImageLoad" />

      <reco-view :recommends="recommends"></reco-view>

      <feature-view />

      <tab-control
        class="tab_control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>

      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click="bsClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideShow from "./childComps/HomeSlideShow.vue";
import RecoView from "./childComps/HomeRecoView";
import FeatureView from "./childComps/HomeFeatureView";

import Navigation from "components/common/navigation/NavBar.vue";
import Scroll from "components/common/betterscroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentIndex: 0,
      currentType: "pop",
      scroll: null,
      isBackTopShow: false,
      tabOffsetTop: 0,
      isTabShow: false,
      saveY: 0,
    };
  },
  components: {
    SlideShow,
    RecoView,
    FeatureView,

    Navigation,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 防抖处理
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    console.log(this.saveY);
  },
  methods: {
    /*网络请求方法开始*/
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 告诉bs pullup事件完成，可以再次调用
        this.$refs.scroll.finishPullUp();
      });
    },
    /*网络请求方法结束*/
    /*事件监听开始*/
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index];
      // 为两个tab control栏保持一致
      this.$refs.tabControl_fixed.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    bsClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(pos) {
      this.isBackTopShow = -pos.y > 1000;
      this.isTabShow = -pos.y > this.tabOffsetTop;
      // console.log(pos.y);
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      // 处理bs计算高度的bug问题
      this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    /*事件监听结束*/
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  watch() {},
};
</script>
<style lang="less" scoped>
#home {
  height: 100vh;
  .home_nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab_control {
    position: relative;
    margin-top: -1vw;
    z-index: 10;
    background-color: #fff;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 12.1vw;
    bottom: 8vw;
  }
}
</style>

