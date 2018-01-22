<template>
	<div id="appAdmin">
		<router-view></router-view>

		
	</div>
</template>


<script>
	

	

	export default{
		data(){
			return{

			}
		},


		
	}

</script>

<style lang="less">
	*{margin:0;padding:0;}



html{
	font-family: 'Helvetica Neue', 'Helvetica', 'Microsoft Yahei', sans-serif;
	background: #86c3d8;
	color:#333;
}

input,button{
	outline:none;
}

ul,li{
	list-style:none;
}

li{
	cursor: pointer; 
}
</style>