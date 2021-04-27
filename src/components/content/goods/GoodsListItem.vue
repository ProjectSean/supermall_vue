<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    itemClick() {
      this.$router.push(`/detail/${this.goodsItem.iid}`);
    },
  },
};
</script>
<style lang="less">
.goods-item {
  position: relative;
  padding-bottom: 11.111vw;
  width: 48%;
  img {
    width: 100%;
    border-radius: 1.389vw;
  }
  .goods-info {
    position: absolute;
    bottom: 1.389vw;
    left: 0;
    right: 0;
    font-size: 3.333vw;
    text-align: center;
    overflow: hidden;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0.833vw;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 5.556vw;
    }
    .collect {
      position: relative;
      ::before {
        content: "";
        position: absolute;
        left: -4.167vw;
        top: -0.278vw;
        width: 3.889vw;
        height: 3.889vw;
        background: url("~assets/images/common/collect.svg") 0/3.889vw 3.889vw;
      }
    }
  }
}
</style>
