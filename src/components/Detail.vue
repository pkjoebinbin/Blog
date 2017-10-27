<template>
	
	


	<article id="detailBlog">
				<!-- lading动画 -->
			<div class="spinner" v-show="detailBlog.length==0">
				  <div class="bounce1"></div>
				  <div class="bounce2"></div>
				  <div class="bounce3"></div>
			</div>

		<section v-for="(val,index) in detailBlog">
			

			<hgroup>
				<h4 class="title" v-html="val.book_title">{{val.book_title}}</h4>

				<p class="dateTag">
					<span class="date">时间:{{val.book_begintime | time}}</span>
					<span class="tag">标签:{{val.book_label}}</span>
				</p>
			</hgroup>

			
				

			<div class="content" v-html="htmlDecode(val.book_content)">
				
			</div>


			


			


			


			

			

			

			
			
			

			


					
				
				
			

			

			


				
				 
			

			
		</section>
			
			
			
	</article>
	
</template>

<script>

	//import  '../js/prism.js';

	import '../css/prism.css';

	


	export default{
		data(){
			return{
				detailBlog:[],
				detailUrl:'admin/index.php?m=Home&c=Index&a=detail',
				
				
				
				

			}
		},

		

		methods:{
			getAllData(){
				this.detailBlog=[];
				this.$http.post(this.detailUrl,{id:this.$route.params.id},{emulateJSON:true})
				.then(function(res){
					
					for(var i in res.body){
						this.detailBlog=[];
						this.detailBlog.push(res.body[i]);
						
						
						
					}



					

				},function(){
					console.log('error');
				})

			},

			

		
		},

		

		created:function(){

			this.getAllData();

		},

		mounted:function(){

		},

		updated:function(){

			


			var code = document.getElementsByTagName('code');
			
			if(code){
				
				for(var i =0;i<code.length;i++){

					//code[i].className ='language-javascript';

					if(code[i].innerHTML.indexOf('-HTML-') >= 0){
						code[i].className ='language-markup';
					}else if(code[i].innerHTML.indexOf('-CSS-') >= 0){
						code[i].className ='language-css';
					}else if (code[i].innerHTML.indexOf('-JS-') >= 0){
						code[i].className ='language-javascript';
					}else{
						code[i].className ='language-javascript';
					}
					
					
				}

			Prism.highlightAll();

			}

			
			
				
		},



		
		
		

		


		



		watch:{
			'$route':'getAllData'
		}

		
		

	}
</script>

<style lang="less" scoped>
	

	

	#detailBlog{

		
		
		margin:.45rem 2% 0;



		hgroup{
			//background:#eee;
			border-left:4px solid #219a54;
			box-sizing:border-box;
			padding-left:.2rem;

			.title{
				
			}

			.dateTag{
				margin-top:1%;
				font-size:12px;
				color:#9e9e9e;

				.tag{
					margin-left:.5rem;
				}
			}

		}

		.content{
			font-size:14px;
			line-height:2;
			margin:.4rem auto;

			
		}

		
	}


	

</style>