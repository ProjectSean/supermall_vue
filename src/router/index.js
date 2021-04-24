import { createRouter, createWebHistory } from 'vue-router'

const Profile = () => import('views/profile/Profile.vue')
const Home = () => import('views/home/Home.vue')
const ShopCart = () => import('views/shopcart/ShopCart.vue')
const Category = () => import('views/category/Category.vue')
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '个人资料'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '菜单'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: '购物车'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
