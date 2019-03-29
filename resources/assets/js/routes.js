import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


//暴露一个对象，default就代表 当前文件名（大概），一般引入是按文件路径引入，且对象会重命名
export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:Vue.component('Home',require('./pages/Home.vue'))
        },
        {
            path: '/cafes',
            name: 'cafes',
            component: Vue.component( 'Cafes', require( './pages/Cafes.vue' ) )
        },
        {
            path: '/cafes/new',
            name: 'newcafe',
            component: Vue.component( 'NewCafe', require( './pages/NewCafe.vue' ) )
        },
        {
            path: '/cafes/:id',
            name: 'cafe',
            component: Vue.component( 'Cafe', require( './pages/Cafe.vue' ) )
        }
    ]
})