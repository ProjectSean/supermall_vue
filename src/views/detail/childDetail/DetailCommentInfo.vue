<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <!-- 标题 -->
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right">></i>
      </div>
    </div>

    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>

    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ showDate(commentInfo.created) }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          alt=""
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    showDate(time) {
      const date = new Date(time * 1000);
      return formatDate(date, "yyyy-mm-dd");
    },
  },
  computed: {
    // showDate(time) {
    //   const date = new Date(time * 1000);
    //   return formatDate(date, "yyyy-mm-dd");
    // },
  },
};
</script>

<style lang="less" scoped>
.comment-info {
  padding: 1.389vw 3.333vw;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  .info-header {
    height: 13.889vw;
    line-height: 13.889vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .header-title {
      float: left;
      font-size: 4.167vw;
    }
    .header-more {
      float: right;
      margin-right: 2.778vw;
      font-size: 3.611vw;
    }
  }
  .info-user {
    padding: 2.778vw 0 1.389vw;
    img {
      width: 11.667vw;
      height: 11.667vw;
      border-radius: 50%;
    }
    span {
      position: relative;
      font-size: 4.167vw;
      top: -4.167vw;
      margin-left: 2.778vw;
    }
  }
  .info-detail {
    padding: 0 1.389vw 4.167vw;
    p {
      font-size: 3.889vw;
      color: #777;
      line-height: 1.5;
    }
    .info-other {
      font-size: 3.333vw;
      color: #999;
      margin-top: 2.778vw;
      .date {
        margin-top: 10px;
      }
    }
    .info-imgs {
      margin-top: 2.778vw;
      img {
        width: 19.444vw;
        height: 19.444vw;
        margin-right: 1.389vw;
      }
    }
  }
}
</style>