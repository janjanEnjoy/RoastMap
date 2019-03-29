//数据存储器
//vuex模块的起点，Vuex由一个父模块和多个子模块组成，此文件包含父模块名，并导入所有子模块


/**
 * Adds the promise polyfill for IE 11
 */
require('es6-promise').polyfill();

import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Initializes Vuex on Vue.
 * 扩展 Vue 实例具备使用 Vuex 数据存储器所需要的方法
 */
Vue.use(Vuex)

/**
 * Export the data store.
 */
export default new Vuex.Store({
    modules:{}
});

//以上数据存储器建好了