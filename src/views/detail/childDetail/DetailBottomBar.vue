<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style lang="less" scoped>
.bottom-bar {
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 13.611vw;
  background-color: #fff;
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item > div {
    flex: 1;
  }
  .bar-left {
    .text {
      font-size: 3.611vw;
    }
    .icon {
      display: block;
      width: 6.111vw;
      height: 6.111vw;
      margin: 1.6vw auto 0.833vw;
      background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
      background-size: 100%;
    }
    .service {
      background-position: 0 -15vw;
    }
    .shop {
      background-position: 0 -27.5vw;
    }
  }
  .bar-right {
    font-size: 4.167vw;
    color: #fff;
    line-height: 13.611vw;
    .cart {
      background-color: #ffe817;
      color: #333;
    }
    .buy {
      background-color: var(--color-tint);
      color: #333;
    }
  }
}
</style>