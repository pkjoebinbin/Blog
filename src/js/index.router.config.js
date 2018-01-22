

import Index from '../components/Index.vue';






export default{

	
	routes:[

				{
					path:'/index',
					name:'index',
					
					component:Index,
					meta:{keepAlive:true},//组件缓存
				},
		

				{
					path:'/qianduanlist',
					name:'qianduanlist',
					//component:Qianduanlist,
					component:resolve => require(['../components/Qianduanlist.vue'],resolve),
					meta:{keepAlive:true},//组件缓存
				},

				

				{
					path:'/houduanlist',
					name:'houduanlist',
					//component:Houduanlist,
					component:resolve => require(['../components/Houduanlist.vue'],resolve),
					meta:{keepAlive: true}        //组件缓存
				},

				{
					path:'/searchList/search/:search',
					name:'search',
					component:resolve => require(['../components/SearchList.vue'],resolve),
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

				

				 {
    				path:'*',redirect:'/index'
    			}




	]
}