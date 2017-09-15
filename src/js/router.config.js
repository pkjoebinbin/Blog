import Index from '../components/Index.vue';
/*import Qianduanlist from '../components/Qianduanlist.vue';
import Houduanlist from '../components/Houduanlist.vue';
import Designlist from '../components/Designlist.vue';
import Suibilist from '../components/Suibilist.vue';

import Detail from '../components/Detail.vue';
import Taglist from '../components/Taglist.vue';*/

export default{

	
	routes:[

		
		
		
		{
			
			path:'/qianduanlist',
			name:'qianduanlist',
			//component:Qianduanlist,
			component:resolve => require(['../components/Qianduanlist.vue'],resolve),
			meta:{keepAlive:true},
			    //组件缓存
			
		},

		{
			path:'/index',
			name:'index',
			component:Index,
			meta:{keepAlive: true}        //组件缓存	
		},

		{
			path:'/houduanlist',
			name:'houduanlist',
			//component:Houduanlist,
			component:resolve => require(['../components/Houduanlist.vue'],resolve),
			meta:{keepAlive: true}        //组件缓存
		},

		{
			path:'/designlist',
			name:'designlist',
			//component:Designlist,
			component:resolve => require(['../components/designlist.vue'],resolve),
			meta:{keepAlive: true}        //组件缓存
		},

		{
			path:'/suibilist',
			name:'suibilist',
			//component:Suibilist,
			component:resolve => require(['../components/suibilist.vue'],resolve),
			meta:{keepAlive: true}        //组件缓存
		},


		{
			path:'/detail/id/:id',
			name:'detail',
			//component:Detail,
			component:resolve => require(['../components/Detail.vue'],resolve),
			meta:{keepAlive: true}  
		},

		{
			path:'/taglist/tag/:tag',
			name:'taglist',
			//component:Taglist,
			component:resolve => require(['../components/Taglist.vue'],resolve),
			meta:{keepAlive: true}  
			
			

		},

		{path:'*', redirect:'/index'},








		




		

		


		

		

		




	]
}