<template>
	
	<article id="allList" class="listStyle" >
		
				<!-- 无数据 -->
				<p class="noData" v-if="noDataonOff">还没写呢，看看其他的吧~</p>
			
				<!-- lading动画 -->
				<div class="spinner" v-else v-show="this.allList.length == 0">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
					

					<router-link :to="{name:'detail',params:{id:val.book_id}}" tag="section" v-for="(val,index) in allList"  class="list">
							
								
								<img src="../assets/loadingPic.jpg" :data-src="val.book_imgpath" alt="前端 html5 nodejs vue webpack" class="img">
								

								<hgroup>
									<h4 v-html="val.book_title">
										
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
			return{
				allListUrl:'admin/index.php?m=Home&c=Index&a=content',

				allList:[],
				loadingOnoff:false,
				ajaxOnoff:false,
				noDataonOff:false,
				
				

				

			}
		},

		created:function(){
				
			
			this.$http.post(
				this.allListUrl,
				
				{emulateJOSN:true}
				).then(function(res){
					var allData = res.body;

					if(allData == null){
						this.noDataonOff = true;
					}
					

					for(var i in allData){
						this.allList.push(allData[i]);	 
					}

					if(this.allList.length>=12){
						this.ajaxOnoff =true;
					}

					
				},function(){
					alert('网络故障，请重新加载')
				})
		},

		

		






		methods:{
			ajax:function(){
				
				this.$http.post(
		          'admin/index.php?m=Home&c=Index&a=loading',
		          {now:this.allList.length},{emulateJSON:true},this.AjaxDonghua()
		          ).then(function(res){
					
           			 
		            for(var i in res.body){
		            	
		              if(res.body[i]==0){
		                
		                
		                this.ajaxOnoff =false;
		                return false;
		                
		             }else{
		              	this.allList.push(res.body[i])   
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


