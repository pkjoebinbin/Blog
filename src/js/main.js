import Vue from './vue.min.js';


//引入vue-resource
import VueResource from 'vue-resource';

//引入路由
import VueRouter from './vue-router.min.js';

import routerConfig from './router.config.js';

import '../css/style.css';



//左边组件引入
import Sidebar from '../components/Sidebar.vue';

//右边组件引入
import Rightside from '../components/Rightside.vue';

//移动端nav组件引入
import MobileNav from '../components/MobileNav.vue';




























Vue.use(VueRouter);

Vue.use(VueResource);














var router = new VueRouter(routerConfig);


//时间过滤器
 Vue.filter('time', function (value) {
        //return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
        var time = new Date(parseInt(value)*1000);
        var year = time.getFullYear();
        var month = time.getMonth()+1;
        month = month < 10?'0' + month:month;
        var day = time.getDate();
        day = day<10?'0' + day:day;
        return year + '.'+month+'.'+day;

    })




//全局标签过滤器
 Vue.prototype.htmlDecode = function(str){
          var s = "";   
          if (str.length == 0) return "";   
          s = str.replace(/&gt;/g, ">");   
          s = s.replace(/&lt;/g, "<"); 
          s = s.replace(/&gt;/g, ">");     
          s = s.replace(/amp;/g, "");     
          //s = s.replace(/&nbsp;/g, " ");   
          s = s.replace(/&#39;/g, "\'");   
          s = s.replace(/&quot;/g, "\"");   
          //s = s.replace(/<br>/g, "\n");   
          return s; 
 }





//图片延迟加载
Vue.prototype.imgLoad = function(){



    var htmlWidth = document.body.clientWidth;
    var htmlHeight = document.documentElement.clientHeight;
    var bodyHeight = document.getElementById('body').clientHeight;
    var bodyScrollTop = document.getElementById('body').scrollTop;
    var htmlScrollTop = document.body.scrollTop;

    var imgList = document.querySelectorAll('.img');

    if(htmlWidth > 992){



       

        for(var i =0;i<imgList.length;i++){


            if(Math.abs(bodyScrollTop - imgList[i].offsetTop)<bodyHeight-60 && Math.abs(bodyScrollTop - imgList[i].offsetTop) > 0 ){
                

                var dataSrc = imgList[i].getAttribute('data-src');
                imgList[i].setAttribute('src',dataSrc);
                //imgList[i].classList.add('fadeIn'); 
                //imgList[i].style.opacity = 0;
                if(imgList[i].classList.contains('fadeIn')==false){
                    
                }
               
                

              
                
                /*if(imgList[i].getAttribute('src') == imgList[i].getAttribute('data-src')){
                    
                }*/

              
                
            }; 
                        
        }

       
    }else{
        
        


        for(var i =0;i<imgList.length;i++){

            if(Math.abs(htmlScrollTop - imgList[i].offsetTop)< htmlHeight/1.7 && Math.abs(htmlScrollTop - imgList[i].offsetTop) > 0 ){
             
                var dataSrc = imgList[i].getAttribute('data-src');
                imgList[i].setAttribute('src',dataSrc);
                
               
               

                
                   
                  /* if(imgList[i].getAttribute('src') == imgList[i].getAttribute('data-src')){
                      imgList[i].className ='fadeIn';
                   }*/

               
                
          }; 
                        
        }

        
    }
            
      



}










var vm = new Vue({
	router,
  el: '#vueBlog',
  components:{
  		'my-sidebar':Sidebar,
  		'my-rightside':Rightside,
      'my-mobilenav':MobileNav,
      //'my-loading':Loading,
  },

  mounted:function(){
    
    document.getElementById('loading').style.display='none';
   
    
  },

  

 

 

 

  

 


  
})
















