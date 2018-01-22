<template>
	<div id="dashboard">

		<section class="blueBackground" >
			
		</section>
		
		
		<img src="../assets/dashboardlogo.png" alt="" class="dashboardlogo" @click="toBlog">
		
		

		<nav class="nav">
			<ul>
				
				<router-link :to="{name:'add'}" tag="li">首页</router-link>
				<router-link :to="{name:'bloglist',params:{classify:1}}" tag="li">前端</router-link>
				<router-link :to="{name:'bloglist',params:{classify:2}}" tag="li">后端</router-link>
				<router-link :to="{name:'bloglist',params:{classify:3}}" tag="li">设计</router-link>
				<router-link :to="{name:'bloglist',params:{classify:4}}" tag="li">随笔</router-link>
				<li class="search">
					<input type="text" v-on:keydown.enter="search" v-model="searchDetail" placeholder="搜索">

				</li>
			</ul>
			
		</nav>

		<section id="body">
			<router-view></router-view>
		</section>




	</div>
</template>


<script>
	

	export default{
		data(){
			return{
				searchDetail:null,
			}
		},



		methods:{
			toBlog:function(){
				
				window.location.href="index.html";
			},

			search(){

				if(this.searchDetail =='' || this.searchDetail == null){
					alert('不输入你搜索个屌')
				}else{
					this.$router.push({ name: 'search',params: { search:this.searchDetail} });
					this.searchDetail = null;
				}
			}

		},

		mounted(){
			
		},

		 beforeRouteEnter(to,from,next){
		 	var user = sessionStorage.getItem("blogUserName");
		 	
		 	if(user){
		 		next()
		 	}else{
		 		next('/login');
		 	}
		 },

		
	}

</script>
















<style lang="less" scoped>
	.blueBackground{
		
		background:#383c48;
		height:250px;
		width:100%;
		position: absolute;
		top:0;
		z-index:-1;

		
	}

	.dashboardlogo{
		display: block;
		margin:20px auto;
		cursor: pointer;
	}

	.nav{
		//background: red;
		color:#fff;
		max-width:73%;
		margin:0 auto;

		ul{
			font-size:0;
				
			li{
				font-size:16px;
				display: inline-block;
				margin-left:10px;
				margin-right:3%;
				letter-spacing:2px;
				padding:4px 8px;
			}

			.search{
				float:right;
				margin:0;
				//margin-right:20px;
				border:none;
				input{
					height:30px;
					border-radius: 15px;
					border:none;
					color:#aaaaaa;
					padding-left:20px;
					width:200px;
				}
			}
		}
	}

	.router-link-exact-active{
		border-bottom:3px solid #86c3d8;
	}

	#body{
		overflow:hidden;
		background: #fff;
		margin:25px auto 0;
		max-width:83%;
		box-shadow: 8px 8px 16px rgba(51,51,51,0.2);	
	}


</style>