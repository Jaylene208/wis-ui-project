import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
import routerConfig from './router/config.js'

import http from './http/index';
Vue.prototype.$http = http;

//多语言
// import VueI18n from 'vue-i18n'; 
// import LocalI18n from './locale/index.js';
// import en from 'view-design/dist/locale/en-US';
// import zh from 'view-design/dist/locale/zh-CN';
// Vue.use(VueI18n);

// const messages = {
//   en: Object.assign(en,LocalI18n.en),
//   zh: Object.assign(zh,LocalI18n.zh)
// };
// const i18n = new VueI18n({
//   locale: 'zh',  // set locale
//   messages  // set locale messages
// });


//路由拦截
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);
// const whiteList=['/login'];  // 路由 白名单




Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
