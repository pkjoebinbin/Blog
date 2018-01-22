
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';
import Bloglist from '../components/Bloglist.vue';
import Admindetail from '../components/Admindetail.vue';






export default{

	
	routes:[

				{
					path:'/Login',
					name:'Login',
					component:Login,
					
				},

				{
					path:'/dashboard',
					name:'dashboard',
					component:Dashboard,
					children:[
						
						{
							path:'/dashboard/bloglist/classify/:classify',
							name:'bloglist',
							component:Bloglist,	
						},

						{
							path:'/dashboard/search/search/:search',
							name:'search',
							component:Bloglist,	
						},

						

						{
							path:'/dashboard/add',
							name:'add',
							component:Admindetail,	
						},

						{
							path:'/dashboard/admindetail/id/:id',
							name:'admindetail',
							component:Admindetail,	
						},
						{path:'/dashboard', redirect:'/add'}


					]
				},


				{path:'*', redirect:'/login'}
				
		
	]
}