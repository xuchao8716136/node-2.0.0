// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件
import App from './App'

Vue.use(VueRouter);

new Vue({
  template: '<App/>',
  components: { App }
}).$mount('#app');

// 从父往子控件传输数据 props
