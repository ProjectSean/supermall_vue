<template>
  <div class="recommends">
    <div class="reco_item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecomView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
};
</script>
<style lang="less">
.recommends {
  display: flex;
  padding: 2.778vw 0 5.556vw;
  width: 100%;
  text-align: center;
  font-size: 3.333vw;
  border-bottom: 2.778vw solid #eee;
  .reco_item {
    flex: 1;
    img {
      width: 19.444vw;
      height: 19.444vw;
      margin-bottom: 2.778vw;
    }
  }
}
</style>
