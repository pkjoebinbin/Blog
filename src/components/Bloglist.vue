<template>
	<div class="bloglist">
		<table border="0">
			
			<tr id="title">
			  <td class="index">索引</td>
			  <td class="bookDate">日期</td>
			  <td class="bookId">ID</td>
			  <td class="bookTitle">标题</td>
			  <td class="bookLabel">标签</td>
			  <td class="xiugaishanchu"></td>
			</tr>

			
				
					
				

			
				

			<tr v-for="(val,index) in list" class="list">
			  
			  <td class="index">
			  	{{index +1}}
			  </td>

			  <td class="bookDate">
				{{val.book_begintime | time}}
			  </td>

			  <td class="bookId">
			  	{{val.book_id}}
			  </td>

			  <td class="bookTitle">
				{{val.book_title}}
			  	
			  </td>

			  <td class="bookLabel">
			  	{{val.book_label}}
			  </td>

			  <td class="xiugaishanchu">
			  	<!-- <input type="button" value="修改" class="xiugai"> -->
			  	<router-link :to="{name:'admindetail',params:{id:val.book_id}}" tag="button" class="xiugai">修改</router-link>

			  	<button class="shanchu" @click="shanchu(val.book_id,index)">删除</button>
				
			  	
			  </td>
			</tr>

			

		</table>

		<p class="noData" v-show="list.length == 0">还没写呢，看看其他的吧~</p>

		<div class="loading" v-show="ajaxOnoff">

			<div class="spinner loadingStyle" v-if="loadingOnoff">
				<div class="bounce1"></div>
				<div class="bounce2"></div>
				<div class="bounce3"></div>
			</div>

			<h4 @click="ajax" v-else>加载更多</h4>
		</div>







		


			
		
	</div>
</template>

<script>

	


	export default{
		
		data(){
			return{
				list:[],
				weizhi:'',
				id:'',
				loadingOnoff:false,
				ajaxOnoff:false,
				searchDetail:null,
			}
		},

		

		methods:{

			

			getData(){

				this.loadingOnoff=false;
				this.ajaxOnoff=false;
				this.list =[];

				

				//判断如果是分类数据，获取分类
				if(this.$route.params.classify){
					this.$http.post(
					'admin/index.php?m=Home&c=Index&a=content',
					{classify:this.$route.params.classify},{emulateJSON:true},
					).then(function(res){
						
						var data = res.body;

						
						for(var i in data){
							this.list.push(data[i]);
						}

						if(this.list.length>=12){
							this.ajaxOnoff =true;
						}else{
							this.ajaxOnoff = false;
						}

					},function(){
		            	alert('网络故障，请重新加载');	
					})
				}else if(this.$route.params.search){

					this.$http.post(
					'admin/index.php?m=Home&c=Index&a=searchList',
					{title:this.$route.params.search},{emulateJSON:true},
					).then(function(res){
						
						if(res.data !== 201){

							this.list = res.data;
						}else{
							this.list =[];
							return false;
						}
						
						

						if(this.list.length>=12){
							this.ajaxOnoff =true;
						}else{
							this.ajaxOnoff = false;
						}

					},function(){
		            	alert('网络故障，请重新加载');	
					})
				}
					
				

				

				


				
			},

			shanchu(id,index){

				this.id = id;
				this.weizhi = index;
				
				var again = confirm('确定删除么?');
				if(again == true){
					this.$http.post(
					'admin/index.php?m=Home&c=Index&a=delete',
					{id:this.id},{emulateJSON:true},
					).then(function(res){
						for(var i in res.body){
							if(res.body[i] ==1){
								this.list.splice(this.weizhi,1);
							}else{
								alert('网络故障，请刷新后重拾');
							}
						}

					},function(){
						alert('网络故障，请刷新后重拾');
					})

				}else{
					return false;
				}
	
			},

			ajax:function(){
				
				if(this.$route.params.classify){
					this.$http.post(
		          'admin/index.php?m=Home&c=Index&a=loading',
		          {classify:this.$route.params.classify,now:this.list.length},{emulateJSON:true},this.AjaxDonghua()
		          ).then(function(res){
					
           			 
		            for(var i in res.body){
		            	
		              if(res.body[i]==0){
		                
		                
		                this.ajaxOnoff = false;
		                return false;
		                
		             }else{
		              	this.list.push(res.body[i])   
		             }
		            }
		            this.AjaxDonghua()
					

		          },function(res){
		            alert('网络故障，请重新加载');
		            this.AjaxDonghua(); 
		          })
				}else if(this.$route.params.search){
					this.$http.post(
		          'admin/index.php?m=Home&c=Index&a=loading',
		          {title:this.$route.params.search,now:this.list.length},{emulateJSON:true},this.AjaxDonghua()
		          ).then(function(res){
					
           			 
		            for(var i in res.body){
		            	
		              if(res.body[i]==0){
		                
		                
		                this.ajaxOnoff = false;
		                return false;
		                
		             }else{
		             	
		              	this.list.push(res.body[i])   
		             }
		            }
		            this.AjaxDonghua()
					

		          },function(res){
		            alert('网络故障，请重新加载');
		            this.AjaxDonghua(); 
		          })
				}
				

								
				
				},

			AjaxDonghua:function(){
				this.loadingOnoff =!this.loadingOnoff;
				
			},
		},

		

		watch:{
			'$route':'getData'
		},

		created(){
			this.getData();
		}





		














	}

</script>

<style lang="less" scoped>

	.bloglist{
		
		overflow: hidden;
		
		.noData{
			text-align:center;
			font-size:14px;
			margin:10px 0;
		}

		
		table{
			text-align:center;
			
			margin:2% auto 1%;
			width:92%;
			font-size:14px;
			
			#title{
				background: #383c48;
				color:#fff;
				font-weight:bold;
				height:30px;

			}

			.index{
				width:5%;
				font-weight:bold;

			}

			.bookDate{
				width:15%;
			}

			.bookId{
				width:10%;
			}

			.bookTitle{
				box-sizing: border-box;
				padding:0 10px;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				width:35%;
			}

			.bookLabel{
				width:10%;
			}

			
			.xiugaishanchu{
				width:15%;

				button{
					width:35%;
					height:35px;
					color:#fff;
					border:none;
					margin:0 1.5%;
					border-radius: 4px;
				}

				.xiugai{
					background:#f0ad4e;
				}

				.shanchu{
					background:#d9534f;
				}
			}


			tr{
				height:55px;
			}

			tr:nth-child(odd){
				background:#eee;
			}

			
		}


		//loading加载按钮
		.loading{

			color:#c0c0c0;
			background: #eee;
			margin:.4rem auto 1rem;
			width:92%;
			padding:.6rem 0;
			border-radius: .4rem;
			cursor: pointer;

			h4{
				font-size:.12rem;
				font-size:12px;
				font-weight:normal;
				text-align:center;
			}
		}

		.loadingStyle{
		margin:.06rem auto;

			div{
				height:6px;
				width:6px;
			}
		}




		//loading动画

		.spinner {
		  margin:.3rem auto;
		  width: 150px;
		  text-align: center;
		 
		  
		}
		 
		.spinner > div {
		  background: #afafaf;
		  width: 8px;
		  height: 8px;
		  border-radius: 100%;
		  display: inline-block;
		  margin:0 5%;
		  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
		  animation: bouncedelay 1.4s infinite ease-in-out;
		  /* Prevent first frame from flickering when animation starts */
		  -webkit-animation-fill-mode: both;
		  animation-fill-mode: both;
		}
		 
		.spinner .bounce1 {
		  -webkit-animation-delay: -0.32s;
		  animation-delay: -0.32s;
		}
		 
		.spinner .bounce2 {
		  -webkit-animation-delay: -0.16s;
		  animation-delay: -0.16s;
		}
		 
		@-webkit-keyframes bouncedelay {
		  0%, 80%, 100% { -webkit-transform: scale(0.0) }
		  40% { -webkit-transform: scale(1.0) }
		}
		 
		@keyframes bouncedelay {
		  0%, 80%, 100% {
		    transform: scale(0.0);
		    -webkit-transform: scale(0.0);
		  } 40% {
		    transform: scale(1.0);
		    -webkit-transform: scale(1.0);
		  }
		}


		



		







	}
	
	

</style>