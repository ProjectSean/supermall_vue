<template>
  <div id="home">
    <navigation class="home_nav">
      <template v-slot:center>购物街</template>
    </navigation>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <slide-show :banners="banners" />
      <reco-view :recommends="recommends"></reco-view>
      <feature-view />
      <tab-control
        class="tab_control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
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
      currentType: "pop",
      scroll: null,
      isBackTopShow: false,
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
    },
    bsClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(pos) {
      this.isBackTopShow = -pos.y > 1000;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      // 处理bs计算高度的bug问题
      this.$refs.scroll.scroll.refresh();
    },
    /*事件监听结束*/
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>
<style lang="less" scoped>
#home {
  padding-top: 12vw;
  height: 100vh;
  .home_nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }
  .tab_control {
    position: sticky;
    top: 12vw;
    background-color: #fff;
    z-index: 10;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 6.6vh;
    bottom: 6.6vh;
    // height: 100%;
  }
}
</style>

