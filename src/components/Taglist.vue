<template>
	<article id="designList" class="listStyle">
		
			<!-- lading动画 -->
			<div class="spinner" v-show="tagList.length==0">
				<div class="bounce1"></div>
				<div class="bounce2"></div>
				<div class="bounce3"></div>
			</div>

			<router-link :to="{name:'detail',params:{id:val.book_id}}" tag="section" class="list" v-for="(val,index) in tagList">
			
				
					
					<img src="../assets/loadingPic.jpg" :data-src="val.book_imgpath" alt="前端 javascript css html5 nodejs vue webpack" title="前端 javascript css html5 nodejs vue webpack" class="img">
				
					
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
			return{

				

				tagListUrl:'admin/index.php?m=Home&c=Index&a=labelsingle',
				
				tagList:[],
				loadingOnoff:false,
				ajaxOnoff:false,

				


			}
		},

		methods:{

			AjaxDonghua:function(){
					this.loadingOnoff =! this.loadingOnoff;
			},

			getData(){
				this.tagList=[];
				this.$http.post(this.tagListUrl,{label:this.$route.params.tag},{emulateJSON:true})
				.then(function(res){
					
					for(var i in res.data){
						
						this.tagList.push(res.data[i])
					}

					if(this.tagList.length>=12){
						this.ajaxOnoff =true;
					}else{
						this.ajaxOnoff =false;
					}

				},function(res){
					console.log('请求失败')
				})
			},

			ajax:function(){

				this.$http.post(
		          this.tagListUrl,
		          {label:this.$route.params.tag,now:this.tagList.length,loadings:6},{emulateJSON:true},this.AjaxDonghua()
		          ).then(function(res){

		          	
		          	 if(res.body==null){
						this.ajaxOnoff =false;	   
		                return false;

		             }else{
						
						for(var i in res.body){
		             		this.tagList.push(res.body[i]);
		              
		            	}

		             }
		                    

		            this.AjaxDonghua();
            

		          },function(res){
		            alert('网络故障，请重新加载')
		            this.AjaxDonghua()
		            
		          })

				},



			
		},

		watch:{
			'$route':'getData',
		},

		created:function(){
			this.getData();
		},

		updated:function(){

          	this.imgLoad();
          	document.getElementById('body').onscroll = this.imgLoad;
          	window.onscroll = this.imgLoad;
      
      	},

		
			
		


	
		}
</script>