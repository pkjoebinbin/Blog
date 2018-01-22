<template>
	<div id="detail">
		
		<img :src="imgpath" alt="" id="titleImg" v-show="imgpath!=''">
		<input type="text" placeholder="图床路径" v-model="imgpath" class="inputText" id="test">
		<input type="text" placeholder="标题" v-model="title" class="inputText">
		<input type="text" placeholder="为博客添加标签" v-model="label" class="inputText">

		<div class="tagList">
			<span v-for="(label,index) in selectLabel" @click="setLabel($event)" ref="tag">{{label}}</span>

		</div>
		
		<div id="toolbar" class="toolbar">
	    </div>

	    

	    <div id="text" class="text">
	        
	    </div>

	    <div id="radiobutton" class="radio">
			<input type="radio" value="1" name="radioname" checked="checked" class="check" v-model="radio">前端
			<input type="radio" value="2" name="radioname"  class="check" v-model="radio">后端
			<input type="radio" value="3" name="radioname"  class="check" v-model="radio">设计
			<input type="radio" value="4" name="radioname"  class="check" v-model="radio">随笔
		</div>

        <button @click="submit" class="addXiugai" v-show="addButton">添加</button>
        <button @click="xiugai" class="addXiugai" v-show="xiugaiButton">修改</button>
        
        
        
        
		</div>	
		
	
	
</template>

<script>

	import E from '../js/editor.js';


	export default{
		
		data(){
			return{
				imgpath:'',
				title:'',
				label:'',
				radio:null,
				content:'',
				addButton : '',
				xiugaiButton : '',
				id:'',
				nowContent:'',
				jump:false,
				selectLabel:[],
				
				}
			},
		
		methods: {
	       
			setLabel(event){
				this.label=event.target.innerHTML;
				
			},
	      

	        getData(){
					
					
					
	        		if(this.$route.params.id){
	        			this.id = this.$route.params.id;
	        			
	        		}
	        		

	        		this.$http.post(
					'admin/index.php?m=Home&c=Index&a=detail',
					{id:this.$route.params.id},{emulateJSON:true},
					).then(function(res){
						var data = res.body;
						
						//this.list =[];
						for(var i in data){
							
							this.imgpath = data[i].book_imgpath;
							this.title = data[i].book_title;
							this.label = data[i].book_label;
							this.content = this.htmlDecode(data[i].book_content);
							this.radio = data[i].book_classify;
							this.nowContent = this.htmlDecode(data[i].book_content);
						}

						



					
					document.querySelector(".w-e-text").innerHTML = this.content;




						
						
					},function(){
						alert('网络延迟，请刷新后重试')
					})	
			},

			submit(){

					if(this.imgpath =='' || this.title=='' || this.label=='' || this.content =='' || this.radio=='' ){
						alert('东西都不写全你发个鸡巴');
						return false;
					}else{
						
						this.$http.post(
						'admin/index.php?m=Home&c=Index&a=add',
						{
							path:this.imgpath,
							title:this.title,
							label:this.label,
							content:this.content,
							classify:this.radio,
						},{emulateJSON:true}).then(function(res){
							
							
								for(var i in res.body){
									if(res.body[i] ==1){
										alert('提交成功');
										this.jump =true;
										this.$router.push({ name: 'bloglist',params: { classify: this.radio } });
									}else{
										alert('无添加');
										return false;
									}
								}
							
						},function(){
							alert('网络故障，请刷新后重试');
							return false;
						})
					}
		
			},

			xiugai(){

				
				this.$http.post(
				'admin/index.php?m=Home&c=Index&a=add',
				{
					path:this.imgpath,
					title:this.title,
					label:this.label,
					content:this.content,
					classify:this.radio,
					upid:this.id,
				},{emulateJSON:true}).then(function(res){
					
					for(var i in res.body){
						if(res.body[i] ==1){
							alert('修改成功');
							
							this.jump =true;
							




							this.$router.push({ name: 'bloglist',params: { classify: this.radio } })
						}else{
							alert('无修改');
							return false;
						}
					}
					
					

				},function(){
					alert('网络故障，请刷新后重试');
				})

			},

			getLabel(){
				this.$http.post(
					'admin/index.php?m=Home&c=Index&a=showlabel',
					{emulateJSON:true},
					).then(function(res){
						var data = res.body;
						
						
						for(var i in data){
							this.selectLabel.push(data[i].book_label);
							
							
						}
	
					},function(){
						alert('网络延迟，请刷新后重试')
					})
			}





			
      	},

		mounted: function(){
			

	        var editor = new E('#toolbar','#text');
	        editor.customConfig.onchange = (html) => {

	          this.content = html


	        }
	        editor.create();


	        

	        



	        
	        
	        
	       
	        
     	 },

     	 created:function(){
     	 	if(this.$route.name != 'add'){
     	 		this.getData();	
     	 	}
			
			this.getLabel();

			
     	 	
     	 	
     	 },

     	


     	

     	  beforeRouteEnter (to, from, next) {
  				
  				if(to.path=="/dashboard/add"){
  					next(vm => { 
  						vm.imgpath='';
	     	  			vm.title='';
	     	  			vm.label='';
	     	  			vm.radio = 1;
	     	  			vm.content='<p><br/></p>';
	     	  			document.querySelector(".w-e-text").innerHTML = vm.content;
	   					vm.addButton = true;
	     	  			vm.xiugaiButton = false;

	     	  			
  					});
  				}else{
  					next(vm => { 
  						vm.xiugaiButton = true;
  						vm.addButton = false;
	     	  			
  					});
  				}

  				
	
		 },

		 beforeRouteLeave(to,from,next){

			
			
		 	if(this.jump != true){
				if(this.$route.name != 'add'){
			 		if(this.nowContent.length != this.content.length){
					var again = confirm('还没保存，确定要离开？');
						if(again == true){
							next();
						}else{
							return false;
						}
					}
	
			 	}else{
			 		if(this.content.length !=12){
					var again = confirm('还没保存，确定要离开？');
						if(again == true){
							next();
						}else{
							return false;
						}
					}
			 	}



		 	}
				next();
		 	}
		 	




     	










	}
	
</script>

















<style lang="less">

	#detail{
		
		width:90%;
		margin:40px auto ;

		#titleImg{
			display: block;
			margin:0 auto;
			width:96.8%;

		}

		.inputText{
			width:95%;
			height:40px;
			border-radius: 8px;
			border-style:none;
			border:1px solid #c0c0c0;
			display: block;
			margin:25px auto;
			padding-left:20px;
			color:#333;
		}

		.tagList{
			width:97%;
			margin:25px auto;
			font-size:0;
			
			span{
				display:inline-block;
				font-size:0.12rem;
				font-size:12px;
				background:#eee;
				margin:.2rem;
				cursor: pointer;
				padding:.4rem 1rem;
				border-radius:4px;
				box-sizing:border-box;

			}



		}

		#radiobutton{
			width:96.6%;
			margin:20px auto 0;
			font-size:14px;

		}

		#toolbar{
			
			width:96.6%;
			margin:0 auto;
			border:1px solid #c0c0c0;
			border-bottom:none;
			background: #f1f1f1;

			.w-e-droplist{
				z-index:10001;
			}
		}

		#text{
			width:96.6%;
			margin:0 auto;
			border:1px solid #c0c0c0;
			height:500px;



		}

		.addXiugai{
			border:none;
			background: #f0ad4e;
			color:#fff;
			width:100px;
			height:36px;
			border-radius: 8px;
			margin:20px 0 0 1.8%;

		}

		
	}
	

	

</style>