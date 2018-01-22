<template>
	<input type="text" class="search" placeholder="直接搜更快~" v-on:keydown.enter="search" v-model="searchDetail">
</template>	


<script>
	export default{
		data(){
			return{
				searchDetail:null,
			}
		},

		methods:{
			search(){
				if(this.searchDetail =='' || this.searchDetail == null){
					alert('不输入你搜索个屌')
				}else{
					this.$router.push({ name: 'search',params: { search:this.searchDetail} });
					this.searchDetail = null;

				}
			}
		}

	}

</script>



<style lang="less" scoped>
		
		input::-ms-input-placeholder{text-align: center;}
		input::-webkit-input-placeholder{text-align: center;}
		input::-moz-input-placeholder{text-align: center;}

		.search{
			display: block;
			width:91.5%;
			height:24px;
			margin:18px auto 0px;
			outline:none;
			padding:4px 10px;
			color:#333;
			border-radius:4px;
			border:1.3px solid #d2d2d2;

		}

</style>