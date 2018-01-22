<template>
	<div id="loginborder">

		

		<article id="login">
			<img src="../assets/adminLogo.png" alt="">

			<article id="input">
				<input type="text" placeholder="User" v-model="username"/>
				<input type="password" placeholder="Password" v-model="password"/>
				
				
				<button id="submit" @click="success">Login in</button>
			</article>

		


	</article>


	</div>

	

	
</template>

<script>
	export default{
		
		data(){
			return{
				username:'',
				password:'',
			}
		},

		methods:{
			success(){
				
				
				if(this.username=='' || this.password==''){
					alert('请填写用户名与密码');
					return false;
				}else{
					this.$http.post(
					'admin/index.php?m=Home&c=Index&a=login',
					{name:this.username,pwd:this.password},{emulateJSON:true},
					).then(function(res){
						if(res.body.txt == 1){
							alert('登录成功');
							sessionStorage.setItem("blogUserName",this.username);
							this.$router.push({ name:'add'});


						}else if(res.body.txt == 0){
							alert('密码或用户名错误');
							return false;
						}
					},function(res){
						alert('网络错误，请刷新后重试');
					})
				}
				
			}
		},


		beforeRouteEnter(to,from,next){
   
		 	var user = sessionStorage.getItem("blogUserName");
		 	
		 	if(user){
		 		
		 		next('/dashboard/add')
		 	}else{
		 		
		 		next();
		 	}

		 	

		 	
		 }
		
		

	}

</script>













<style lang="less" scoped>
	
	
		
		#login{
			border-radius: 4px;
			box-shadow: 8px 8px 16px #72a8bb;
			background: #fff;
			width:400px;
			height:550px;
			position: absolute;
			margin:auto;
			top:0;
			bottom:0;
			left:0;
			right:0;

			img{
				display: block;
				margin-left:70px;
				margin-top:55px;
			}

			#input{
				margin-top:40px;

				input{
					text-align:center;
					padding-bottom:10px;
					font-size:14px;
					color:#8f8f8f;
					display: block;
					margin:50px auto;
					width:65%;
					border:none;
					border-bottom:1px solid #8f8f8f;
				}

				#submit{
					display: block;
					margin:0 auto;
					border:none;
					color:#fff;
					background:#86c3d8;
					width:30%;
					height:38px;
					border-radius: 19px;
				}
			}
		}
	

</style>