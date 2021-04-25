<template>
  <div class="back_top" @click="bcClick">
    <img src="~assets/images/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
.back_top {
  position: fixed;
  right: 2.222vw;
  bottom: 15.278vw;
  img {
    width: 11.944vw;
    height: 11.944vw;
  }
}
</style>
