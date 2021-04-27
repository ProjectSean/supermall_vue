import { request } from './request'
// 请求轮播图的数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, service) {
    this.columns = []
    this.service = []
    this.desc = itemInfo.desc;
    this.price = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    // 深拷贝
    for (let item of columns) {
      this.columns.push(item)
    }
    for (let item of service) {
      this.service.push(item)
    }

  }
}

