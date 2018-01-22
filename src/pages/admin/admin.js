import Vue from '../../js/vue.min.js';


//引入vue-resource
import VueResource from 'vue-resource';

//引入路由
import VueRouter from '../../js/vue-router.min.js';

import adminrouterConfig from '../../js/admin.router.config.js';



//前台顶层组件
import AppAdmin from './AppAdmin.vue';



//引入工具函数
import setting from '../../js/settingFunction.js';


















Vue.use(VueRouter);

Vue.use(VueResource);














//前台路由
var router = new VueRouter(adminrouterConfig);





//时间过滤器
 Vue.filter('time',setting.timer);



//全局标签过滤器
 Vue.prototype.htmlDecode = setting.htmlDecode;


   












var vm = new Vue({
	router:router,
  el: '#admin',
  render: h => h(AppAdmin),
 


});





















