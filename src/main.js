import Vue from 'vue'
// import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

// Vue.use(VueI18n)
// Vue.config.lang = 'zh-cn'
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
