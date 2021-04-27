<template>
  <div class="shop_info" v-if="Object.keys(shop).length != 0">
    <div class="shop_top">
      <img :src="shop.shopLogo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop_middle">
      <div class="shop_middle_left">
        <div class="info_sells">
          <div class="sells_count">
            {{ sellCountFilter }}
          </div>
          <div class="sells_text">总销量</div>
        </div>
        <div class="info_goods">
          <div class="goods_count">
            {{ shop.cGoods }}
          </div>
          <div class="goods_count_text">全部宝贝</div>
        </div>
      </div>

      <div class="shop_middle_right">
        <table>
          <tr v-for="item in shop.score" :key="item.id">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ score_better: item.isBetter }">
              {{ item.score }}
            </td>
            <td>
              <span class="better" :class="{ better_more: item.isBetter }">{{
                item.isBetter ? "高" : "低"
              }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop_bottom">
      <div class="enter_shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sellCountFilter() {
      let result = this.shop.cSells;
      if (result > 10000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    },
  },
  filters: {},
};
</script>

<style lang="less" scoped>
.shop_info {
  padding: 8vw 2.5vw 0;
  .shop_top {
    margin-bottom: 5vw;
    font-size: 3.889vw;
    img {
      margin-right: 2.6vw;
      width: 12vw;
      height: 12vw;
      vertical-align: middle;
    }
  }
  .shop_middle {
    display: flex;
    margin-bottom: 5.556vw;
    align-items: center;
    .shop_middle_left {
      display: flex;
      width: 50%;
      height: 50%;
      justify-content: space-evenly;
      font-size: 3vw;
      flex: 1;
      text-align: center;
      border-right: 1px solid #f2f5f8;
      .sells_count,
      .goods_count {
        margin-bottom: 1.2vw;
      }
    }
    .shop_middle_right {
      margin-left: 5.556vw;
      flex: 1;
      font-size: 3vw;
      table {
        tr {
          display: block;
          margin-bottom: 1.3vw;
          td {
            display: inline-block;
            margin-right: 1.2vw;
          }
          .score {
            color: green;
            width: 5.8vw;
          }
          .score_better {
            color: red;
          }
          .better {
            color: #fff;
            background-color: green;
          }
          .better_more {
            background-color: red;
            color: #fff;
          }
        }
      }
    }
  }
  .shop_bottom {
    padding-bottom: 5.556vw;
    text-align: center;
    border-bottom: 0.833vw solid #f2f5f8;

    .enter_shop {
      display: inline-block;

      width: 41.667vw;
      height: 8.333vw;
      line-height: 8.333vw;
      text-align: center;
      font-size: 3.889vw;
      background-color: #f2f5f8;
      color: #000;
      border-radius: 2.778vw;
    }
  }
}
</style>