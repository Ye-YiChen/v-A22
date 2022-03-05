import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
// import Market from '../views/Market.vue'
// import Order from '../views/Order.vue'
// import Product from '../views/Product.vue'
// import Detail from '../views/Detail.vue'
// import Purchase from '../views/Purchase.vue'
// import Search from '../views/SearchPage.vue'

// 路由懒加载
const Login = () => import('../views/Login.vue')
const Register =() => import('../views/Register.vue')
const Market = () => import('../views/Market.vue')
const Order  = () => import('../views/Order.vue')
const Product = () => import('../views/Product.vue')
const Detail = () => import('../views/Detail.vue')
const Purchase =()=>import('../views/Purchase.vue')
const Search = () => import('../views/SearchPage.vue')




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 重定向到login页面
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/market/:type',
    name: 'Market',
    component: Market
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/product/:productID',
    name: 'Product',
    component: Product
  },
  {
    path: '/purchase/:productID',
    name: 'Purchase',
    component: Purchase
  },
  {
    path: '/detail/:orderID',
    name: 'Detail',
    component: Detail
  },
  {
    path:'/search',
    name:'Search',
    component:Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
