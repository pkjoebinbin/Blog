<template>
	<article id="suibiList" class="listStyle">
		

			<!-- lading动画 -->
			<div class="spinner" v-show="suibiList.length==0">
				<div class="bounce1"></div>
				<div class="bounce2"></div>
				<div class="bounce3"></div>
			</div>

			<router-link :to="{name:'detail',params:{id:val.book_id}}" tag="section" v-for="(val,index) in suibiList" class="list">

			
				<img src="../assets/loadingPic.jpg" :data-src="val.book_imgpath" alt="前端 html5 nodejs vue webpack" class="img">

				
				<hgroup>
					<h4>
						{{val.book_title}}
					</h4>

					<h5 v-html="htmlDecode(val.book_content)">
						
					</h5>
				</hgroup>

				<div class="dateTag">
					<span class="date">日期:{{val.book_begintime | time}}</span>
					<span class="tag">标签:{{val.book_label}}</span>
					<div class="clear"></div>
				</div>
				</router-link>


				<div class="loading" v-show="ajaxOnoff">
					<div class="spinner loadingStyle" v-if="loadingOnoff">
						<div class="bounce1"></div>
						<div class="bounce2"></div>
						<div class="bounce3"></div>
					</div>
					<h4 @click="ajax" v-else>加载更多</h4>
				</div>
			

			

			



			

		
		
	</article>
	
	
</template>

<script>
	export default{
		
		data(){
			return {
				suibiUrl:'admin/index.php?m=Home&c=Index&a=content',
				
				suibiList:[],
				loadingOnoff:false,
				ajaxOnoff:false,


				
					
				
				



				

			}
		},


		created:function(){

			
			
			this.$http.post(
				this.suibiUrl,
				{classify:4},{emulateJSON:true}
				).then(function(res){

					var suibi = res.body;

					
					for(var i in suibi){
						
						this.suibiList.push(suibi[i])
						


					}

					if(this.suibiList.length >=12){
						this.ajaxOnoff =true;
					}

				},function(){
					console.log('数据错误')
				})


		},

		

		methods:{
			ajax:function(){   
				
				this.$http.post(
		          'admin/index.php?m=Home&c=Index&a=loading',
		          {classify:4,now:this.suibiList.length},{emulateJSON:true},this.AjaxDonghua()
		          ).then(function(res){
					
           			 
		            for(var i in res.body){
		            	
		              if(res.body[i]==0){
		                
		                
		                this.ajaxOnoff =false;
		                return false;
		                
		             }else{
		              	this.suibiList.push(res.body[i])   
		             }

		              
		            }

		            this.AjaxDonghua()
					

		          },function(res){
		            alert('网络故障，请重新加载');
		            this.AjaxDonghua();
		            
		            
		          })

								
				
				},

			AjaxDonghua:function(){
				this.loadingOnoff =!this.loadingOnoff;
				
			},
		},

		updated:function(){
		 	
          	this.imgLoad();
          	document.getElementById('body').onscroll = this.imgLoad;
          	window.onscroll = this.imgLoad;
      
      	},


		 





	}



















</script>






<style lang="less" scoped>


	
	
	

</style>

