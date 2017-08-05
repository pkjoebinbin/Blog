<template>
	<article id="designList" class="listStyle">
		
			<!-- lading动画 -->
			<div class="spinner" v-show="tagList.length==0">
				<div class="bounce1"></div>
				<div class="bounce2"></div>
				<div class="bounce3"></div>
			</div>

			<router-link :to="{name:'detail',params:{id:val.book_id,title:val.book_title,content:val.book_content,date:val.book_begintime,tag:val.book_label}}" tag="section" class="list" v-for="(val,index) in tagList">
			
				
					
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
				

	</article>

</template>

<script>
	export default{
		

		data(){
			return{

				

				tagListUrl:'admin/index.php?m=Home&c=Index&a=labelsingle',
				
				tagList:[],

				


			}
		},

		methods:{
			getData(){
				this.tagList=[];
				this.$http.post(this.tagListUrl,{label:this.$route.params.tag},{emulateJSON:true})
				.then(function(res){
					
					for(var i in res.data){
						
						this.tagList.push(res.data[i])
					}

				},function(res){
					console.log('请求失败')
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