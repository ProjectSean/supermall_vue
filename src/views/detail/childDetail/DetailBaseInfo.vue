<template>
  <div v-if="Object.keys(goods).length != 0" class="baseinfo">
    <div class="desc">
      {{ goods.desc }}
    </div>
    <div class="price">
      <span class="currentprice">{{ getCurrentPrice }}</span>
      <span class="oldprice">{{ goods.oldPrice }}</span>
      <span class="discount" v-show="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="columns_info">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.service[goods.service.length - 1].name }}</span>
    </div>
    <div class="service">
      <div
        v-for="item in goods.service.length - 1"
        :key="item.id"
        class="service_items"
      >
        <img
          v-if="goods.service[item - 1].icon"
          :src="goods.service[item - 1].icon"
          alt=""
        />
        <span class="blank_box" v-else></span>
        <span>{{ goods.service[item - 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: Object,
    default() {
      return {};
    },
  },
  data() {
    return {
      services: ["延误必赔", "退货补运费", "全国包邮", "7天无理由退货"],
    };
  },
  components: {},
  computed: {
    getCurrentPrice() {
      return `￥${this.goods.price}`;
    },
  },
};
</script>

<style lang="less" scoped>
.baseinfo {
  padding-left: 2vw;
  padding-right: 2vw;
  .desc {
    margin: 5.3vw 5.3vw 5.3vw 0;
    font-size: 4vw;
  }
  .price {
    margin-bottom: 3vw;
    .currentprice {
      margin-right: 1vw;
      color: var(--color-high-text);
      font-size: 6vw;
    }
    .oldprice {
      margin-right: 1vw;
      text-decoration: line-through;
      color: #999;
      font-size: 3.333vw;
    }
    .discount {
      display: inline-block;
      padding: 1vw;
      background-color: var(--color-high-text);
      color: #fff;
      border-radius: 2vw;
      font-size: 2.5vw;
      vertical-align: top;
    }
  }
  .columns_info {
    padding-bottom: 1vw;
    display: flex;
    justify-content: space-between;
    font-size: 3.333vw;
    color: #999;
    border-bottom: 1px solid rgba(153, 153, 153, 0.2);
  }
  .service {
    display: flex;
    justify-content: space-between;
    padding: 4vw 0 4vw;
    font-size: 3.333vw;
    border-bottom: 3px solid rgba(153, 153, 153, 0.2);
    .service_items {
      img {
        width: 3.889vw;
        height: 3.889vw;
        vertical-align: bottom;
      }
      .blank_box {
        display: inline-block;
        width: 3.889vw;
        height: 3.889vw;
        border: 0.278vw solid #999;
        vertical-align: text-bottom;
      }
    }
  }
}
</style>