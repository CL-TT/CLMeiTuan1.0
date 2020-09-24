/**
 * 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '../layout/Default.vue'; //基础页面
import BlankPage from '../layout/Blank.vue';
import Index from '../views/index.vue'; //首页
import ChangeCity from '../views/ChangeCity.vue'; //切换城市的页面
import GoodsList from '../views/GoodsList.vue'; //商品列表页
import Login from '../views/Login.vue'; //登录页面
import Register from '../views/Register.vue'; //注册页面


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'defaultPage',
  component: DefaultPage,
  children: [{
    path: '/index',
    name: 'index',
    component: Index,
  }, {
    path: '/changecity',
    name: 'changecity',
    component: ChangeCity
  }, {
    path: "s/:name",
    name: "goods",
    component: GoodsList
  }],
  redirect: '/index'
}, {
  path: '/blank',
  name: 'blankPage',
  component: BlankPage,
  children: [{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  model: history
})

export default router