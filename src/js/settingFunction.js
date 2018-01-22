
//标签转换函数
function htmlDecode(str){
          
          if(str.length == 0){return ''};
            var s = "";     
            s = str.replace(/&gt;/g, ">");   
            s = s.replace(/&lt;/g, "<"); 
            s = s.replace(/&gt;/g, ">");     
            s = s.replace(/amp;/g, "");     
            //s = s.replace(/&nbsp;/g, " ");   
            s = s.replace(/&#39;/g, "\'");   
            s = s.replace(/&quot;/g, "\"");   
            //s = s.replace(/<br>/g, "\n");   
            return s;  
 };




 //时间戳
 function timer(value){
       var time = new Date(parseInt(value)*1000);
       var year = time.getFullYear();
       var month = time.getMonth()+1;
       month = month < 10?'0' + month:month;
       var day = time.getDate();
       day = day<10?'0' + day:day;
       return year + '.'+month+'.'+day;
 };



 //图片延迟加载
 function imgLoad(){
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
               /* imgList[i].classList.add('fadeIn'); 
                imgList[i].style.opacity = 0;
                if(imgList[i].classList.contains('fadeIn')==false){
                    
                }*/
               
                

              
                
                /*if(imgList[i].getAttribute('src') == imgList[i].getAttribute('data-src')){
                    
                }*/

              
                
            }; 
                        
        }

       
    }else{
        
        


        for(var i =0;i<imgList.length;i++){

            if(Math.abs(htmlScrollTop - imgList[i].offsetTop)< htmlHeight/1.4 && Math.abs(htmlScrollTop - imgList[i].offsetTop) > 0 ){
             
                var dataSrc = imgList[i].getAttribute('data-src');
                imgList[i].setAttribute('src',dataSrc);
                
               
               

                
                   
                  /* if(imgList[i].getAttribute('src') == imgList[i].getAttribute('data-src')){
                      imgList[i].className ='fadeIn';
                   }*/
     
          }; 
                        
        }

        
    }

 };









 export default {htmlDecode,timer,imgLoad};



