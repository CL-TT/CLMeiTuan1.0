import Vue from 'vue'; //引入vue
import App from './App.vue'; //引入App组件
import './registerServiceWorker';
import router from './router'; //引入路由
import store from './store'; //引入状态管理vuex中的store
import ElementUI from 'element-ui'; //引入element-ui
import 'element-ui/lib/theme-chalk/index.css';

import '../src/assets/css/main.css';
import '../src/assets/css/incofont.css';

Vue.use(ElementUI); //使用element-ui

//自定义指令
Vue.directive('document-click', {
  bind(el, binding) {
    document.addEventListener('click', binding.value, false)
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')