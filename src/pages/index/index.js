import Vue from '../../js/vue.min.js';


//引入vue-resource
import VueResource from 'vue-resource';

//引入路由
import VueRouter from '../../js/vue-router.min.js';

import indexrouterConfig from '../../js/index.router.config.js';



//前台顶层组件
import AppIndex from './AppIndex.vue';




//引入工具函数
import setting from '../../js/settingFunction.js';


















Vue.use(VueRouter);

Vue.use(VueResource);














//前台路由
var router = new VueRouter(indexrouterConfig);





//时间过滤器
Vue.filter('time',setting.timer)




//全局标签过滤器
 Vue.prototype.htmlDecode = setting.htmlDecode;





//图片延迟加载
Vue.prototype.imgLoad = setting.imgLoad;










var vm = new Vue({
	router:router,
  el: '#vueBlog',
  render: h => h(AppIndex),
 


});





















