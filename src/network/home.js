import { request } from './request'
// 请求轮播图的数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}