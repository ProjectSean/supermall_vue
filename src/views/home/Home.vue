<template>
  <div id="home">
    <navigation class="home_nav">
      <template v-slot:center>购物街</template>
    </navigation>
    <slide-show :banners="banners" />
    <reco-view :recommends="recommends"></reco-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "components/common/navigation/NavBar.vue";
import SlideShow from "./childComps/HomeSlideShow.vue";
import RecoView from "./childComps/HomeRecoView";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    Navigation,
    SlideShow,
    RecoView,
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>
<style scoped>
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
