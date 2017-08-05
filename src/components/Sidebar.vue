<template>
	<aside id="aside" >
		
		
		<img src="../assets/touxiang.jpg" alt="" class="touxiang" @click="toAdmin">
		

		<!-- <h4 class="firstTitle">盖浇技术栈</h4> -->
		<svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="250px" height="50px" viewBox="0 0 250 50" enable-background="new 0 0 250 50" xml:space="preserve" class="titleSvg">
<g>
	<path fill="#35aa66" d="M4.713,28.439h44.125l-1.852,11.692h1.076L46.8,48.105H0.571l1.263-7.974h1.027L4.713,28.439z M6.13,20.417
		h11.104l0.178-1.125H6.309l1.069-6.751h11.104l0.163-1.027H7.541l1.077-6.8h2.642l-0.927-2.789h17.904l0.928,2.789h2.69l1.86-2.789
		h17.856L49.71,4.713h2.69l-1.077,6.8H40.268l-0.163,1.027h11.056l-1.069,6.751H39.036l-0.178,1.125h11.056l-1.062,6.702H5.069
		L6.13,20.417z M14.416,36.364l-0.573,3.62h2.299l0.573-3.62H14.416z M23.822,39.984h2.348l0.573-3.62h-2.348L23.822,39.984z
		 M36.15,39.984l0.573-3.62h-2.3l-0.573,3.62H36.15z"/>
	<path fill="#35aa66" d="M63.275,33.674l-2.27,14.333H49.411l2.27-14.333H63.275z M65.809,17.677L63.538,32.01H51.944l2.271-14.333
		H65.809z M68.311,1.875l-2.254,14.237H54.463l2.254-14.237H68.311z M78.837,48.153l1.643-10.37h-1.174l-4.235,10.37H62.547
		l0.798-5.038l2.313-5.332h-1.468l1.689-10.665h33.069l-1.689,10.665h-4.256l-0.504,3.18l4.589-2.104l-1.472,9.294H78.837z
		 M82.977,26.336l-1.682-3.278l-6.683,3.278h-8.609l1.31-8.268l9.127-4.5l-0.862-1.663h-7.289l1.434-9.05h1.223l-0.439-0.93h15.997
		l0.488,0.93h15.801l-1.434,9.05h-9.734l0.522,1.027h9.05l-1.596,10.078h-2.25l1.723,3.327H82.977z"/>
	<path fill="#FFFFFF" d="M123.348,1.875l-7.322,46.23h-15.802l3.119-3.327l0.465-2.935L99.048,43.8l2.782-17.563l4.753-1.908
		l0.534-3.375h-4.451l2.666-16.828h4.451l0.356-2.251H123.348z M129.952,1.875h17.024l-0.318,2.006h4.843l-1.968,12.426h-4.843
		l-0.256,1.614h4.843l-2.448,15.458l-3.853,2.397l3.101,2.348l-1.58,9.98h-9.686l-3.127-3.425l-4.211,3.425h-9.735l1.581-9.98
		l3.698-2.348l-2.946-2.397l2.448-15.458h4.892l0.256-1.614h-4.892l1.968-12.426h4.892L129.952,1.875z M134.385,29.174l4.175-2.888
		l-7.322-0.097L134.385,29.174z"/>
	<path fill="#FFFFFF" d="M160.089,48.203h-12.914l3.719-23.482l4.802-4.061h8.756L160.089,48.203z M169.048,1.827h16.34
		l-1.263,7.974h15.458l-1.503,9.49h-14.479l-4.579,28.912h-17.318l4.579-28.912h-14.528l2.123-13.404h14.528L169.048,1.827z
		 M184.998,20.661h8.757l3.465,4.061l-3.719,23.482h-12.865L184.998,20.661z M186.708,1.827h14.139l-1.069,6.751H185.64
		L186.708,1.827z"/>
	<path fill="#FFFFFF" d="M208.14,1.827h9.293l-0.457,2.886h4.746l-1.395,8.806h-4.941l4.384,3.521l-4.936,31.163l-5.577-4.012
		l-0.628,3.962h-6.36l0.62-3.913l-6.84,3.963l4.936-31.163l5.498-3.521h-4.94l1.395-8.806h4.746L208.14,1.827z M217.849,37.195
		l8.075-1.565l-0.115-2.055l-7.596,1.322l1.596-10.078l5.446-1.028l-0.123-2.005l-4.975,0.832l1.597-10.078l2.824-0.538
		l-0.597-10.127h12.229l0.676,7.779l11.966-2.349l-1.689,10.665l-9.403,1.615l0.162,1.761l8.978-1.713l-1.673,10.568l-6.44,1.124
		l0.154,1.811l6.007-1.174l-1.681,10.615l-3.469,0.587l0.1,1.223l2.493,3.719h-15.703l-0.169-2.642l-10.266,1.81L217.849,37.195z
		 M249.713,1.875l-0.667,4.208l-10.704,2.104l-0.81-6.311H249.713z"/>
</g>
</svg>

		<h5 class="secondTitle">无法停止我内心的狂热，对未来的执着</h5>
	
		<hgroup class="latestBlogs">
			<h4>最新文章</h4>
				
				<!-- lading动画 -->
				<div class="spinner" v-show="lastestBlogs.length==0">
				  <div class="bounce1"></div>
				  <div class="bounce2"></div>
				  <div class="bounce3"></div>
				</div>
			
			
			<ul>
				<router-link :to="{name:'detail',params:{id:lastestBlogs.book_id,title:lastestBlogs.book_title}}"  tag="li" v-for="(lastestBlogs,index) in lastestBlogs" v-html="lastestBlogs.book_title"></router-link>
			</ul>
		</hgroup>
	
		<hgroup class="tag">
			<h4>标签云</h4>
	
			<!-- lading动画 -->
				<div class="spinner" v-show="lastestBlogs.length==0">
				  <div class="bounce1"></div>
				  <div class="bounce2"></div>
				  <div class="bounce3"></div>
				</div>
			
			<ul>
				<router-link :to="{name:'taglist',params:{tag:blogTag}}" tag="li" v-for="(blogTag,index) in blogTag" >{{blogTag}}</router-link>
			</ul>
				
				
				
				
			
			
		
			
		</hgroup>
	
		<section id="contect">
			
			
			<ul>
				<li>
					<a href="https://github.com/pkjoebinbin"  target="_blank">
						<img src="../assets/github.svg" alt="github">
						
					</a>
					<h5>github</h5>
				</li>
	
				<li>
					<a href="http://www.weibo.com/stevejoe"  target="_blank">
						<img src="../assets/weibo.svg" alt="微博">
						
					</a>
					<h5>微博</h5>
	
				</li>
	
				<li>
					<img src="../assets/QQ.svg" alt="qq">
					
					<h5>QQ</h5>
				</li>
	
				<li>
					<img src="../assets/weixin.svg" alt="微信">
					
					<h5>微信</h5>
				</li>
			</ul>
	
	
		</section>
	
	</aside>

</template>



<script>
	

	
	export default{
		
		data(){
			return{
				latestBlogsTitleUrl:'admin/index.php?m=Home&c=Index&a=latesBlogs',    //标题接口
				tagUrl:'admin/index.php?m=Home&c=Index&a=showlabel',             //标签接口
				lastestBlogs:[],
				blogTag:[],
				
			}
		},

		methods:{
			toAdmin(){
				window.location.href="admin.html"; 
			}
		},

		created:function(){

			//获取最新文章
			this.$http.get(this.latestBlogsTitleUrl)       
			.then(function(res){
				var lastestBlogs = res.data;
				

				for(var i in lastestBlogs){
					
					this.lastestBlogs.push(lastestBlogs[i]);
					
					
				}


					

				},function(){
					console.log('没有获取到')
				});



				//获取标签
				this.$http.get(this.tagUrl).then(function(res){
					
					
					for(var i in res.data){
						var blogTag = res.data[i];
						this.blogTag.push(blogTag.book_label)
						
					}

					

					
				},function(){
					
				})

			},

			mounted:function(){

  				
  				



			}
	
	}


</script>




<style lang="less" scoped>
	


	#aside{
		width:25%;
		background:url('../assets/sidebarBc.jpg') no-repeat center;
		
		background-size: cover;
		height:93.5%;
		position:absolute;
		top:0;
		bottom:0;
		left:2%;
		margin:auto;
		text-align:center;
		
		.touxiang{
			margin:8% auto 5%;
			max-width:30%;
			border-radius: 50%;
			cursor: pointer;
			display:block;

		}

		.firstTitle{
			//background: pink;
			color:#fff;
		}

		.secondTitle{
			color:#fff;
			
			font-weight:normal;
			margin:1% auto 4%;
		}

		.latestBlogs{
			//background:red;
			margin:10% 8%;

			h4{
				color:#fff;
			}


			li{
				
				margin:4% auto;
				font-size:.14rem;
				white-space:nowrap; 
				text-overflow:ellipsis;
				overflow:hidden;
				color:#fff;
				
			}

			li:hover{
				font-weight:bold;
			}

		}

		.tag{
			//background:pink;
			margin:15% 8%;

			h4{
				color:#fff;
			}

			ul{
				text-align:left;
				font-size:0;
				margin-top:3%;
				li{
					color:#fff;
					border:1px solid #fff;
					box-sizing:border-box;
					padding:1% 4%;	
					border-radius: .2rem;
					display: inline-block;
					font-size:12px;
					margin:.04rem;

				}

				li:hover{
					color:#333;
					background: #fff;
					//font-weight:bold;	
				}
			}
			
		}

		#contect{
			//background:pink;
			position:absolute;
			bottom:2%;
			width:100%;


			
			ul{
				
				
				//margin:6% auto 0;
				font-size:0;

				li{
					display:inline-block;
					width:23%;

					img{

						display:block;
						margin:0 auto;
					}

					h5{
						font-size:.12rem;
						margin-top:10px;
						color:#fff;
						font-weight:normal;
					}
	
				}

			}
				


		}


	}


	//加载动画样式
	.spinner{
		
		margin:4% auto;
		div {
				 width: 8px;
		  		 height: 8px;
				background: #fff;

			}
		}


		.titleSvg{
			//background:red;
			width:80%;
		}









	


	
















</style>