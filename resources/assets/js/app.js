
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window._=require('lodash');
try{
    window.$=window.jQuery=require('jquery');
    require('foundation-sites');
}catch(e){}



//请求头增加csrf meta标签
window.axios=require('axios');
window.axios.defaults.headers.common['X-Requested-With']='XMLHttpRequest';

let token=document.head.querySelector('meta[name="csrf-token"]');

if(token){
    window.axios.defaults.headers.common['X-CSRF-TOKEN']=token.content;
}else{
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


import Vue from 'vue';


//以下：引入后需要扩展到vue实例中，去使用
import router from './routes.js'
import store from './store.js'
// require('./bootstrap');

// window.Vue = require('vue');  //移除

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));   移除

/* 移除
const app = new Vue({
    el: '#app'
});
*/


//使用导入的router对象
new Vue({
    router,
    store
}).$mount('#app');  //将vue挂在到ID为app到页面元素上，同时在准备就绪时可以通过 Vue 调用 Vue Router 和 Vuex。