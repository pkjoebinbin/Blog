<template>
	<aside id="rightSide" >
			
			
			<my-nav></my-nav>

			
			
		

		<article id="body">
			<keep-alive>    <!-- 组件缓存标签 -->
    			<router-view></router-view>
			</keep-alive>
		</article>

	</aside>
	
</template>

<script>
	//引入导航组件
	import Nav from './Nav.vue';
	

	


	


	export default{
		components:{'my-nav':Nav},

		


		

		methods:{
			setBodyHeight(){
				var htmlWidth = document.body.clientWidth;
			

			if(htmlWidth >= 992 ){
				var rightSideHeight = document.getElementById('rightSide').offsetHeight;		//右边板块的高度
				var footerHeight = document.getElementById('header').offsetHeight;				//导航栏的高度
				var bodyTag = document.getElementById('body');									//获取到body这个元素
				var bodyMarginTop = parseFloat(document.defaultView.getComputedStyle(bodyTag, null).marginTop);		//body元素的marginTop,paresInt转换为数字
				var bodyHeight = rightSideHeight - footerHeight - bodyMarginTop;
				bodyTag.style.height = bodyHeight + "px";
				document.body.style.overflow ='hidden';
			}else{
				document.getElementById('body').style.height = 'auto';
				document.body.style.overflow ='visible';
				


			}

			}

			
		},

		//组件挂载示例完成
		mounted:function(){
			//console.log(document.querySelectorAll('.list'))
			//console.log(2);
			//body部分高度自适应
			this.setBodyHeight();
			window.onresize = this.setBodyHeight;


			//console.log('body高度：'+document.getElementById('body').clientHeight);

			
			

			document.getElementById('body').onscroll = function(){

				

			}





		},

		updated:function(){
			//console.log(document.querySelectorAll('.list'))
		}

		

		

		


	}
	
	

</script>



<style lang="less" scoped>
	
	#rightSide{
		position:absolute;
		height:93.5%;
		margin:auto;
		top:0;
		bottom:0;
		right:2%;
		width:70%;

		

		

		#body{

			background:#fff;
			margin-top:1.4%;
			bottom:0;
			width:100%;
			overflow-y:auto;
			overflow-x:hidden;
		}

	}
	

</style>

