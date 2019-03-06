import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import home from "../pages/home"
import fenlei from "../pages/fenlei"
import ballshoes from "../pages/ballshoes"
import play from "../pages/play"
import my from "../pages/my"
import reg from "../pages/reg"
import login from "../pages/login"
import shopCar from "../pages/shopCar"
import detail from "../pages/detail"
import gaojie from "../pages/gaojie"
import emptyshopcar from "../pages/emptyshopcar"
import playnews from "../pages/playnews"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/ballshoes',
      name: 'ballshoes',
      component: ballshoes
    },
    {
      path: '/play',
      name: 'play',
      component: play
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/gaojie',
      name: 'gaojie',
      component: gaojie
    },
    {
      path: '/emptyshopcar',
      name: 'emptyshopcar',
      component: emptyshopcar
    },
    {
      path: '/playnews',
      name: 'playnews',
      component: playnews
    }

  ]
})
