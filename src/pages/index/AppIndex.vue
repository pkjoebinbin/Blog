<template>
  <div id="appIndex">
      <my-sidebar></my-sidebar>
      <my-rightside></my-rightside>
      <my-mobilenav></my-mobilenav>

  </div>
</template>

<script>

  //左边组件引入
  import Sidebar from '../../components/Sidebar.vue';

  //右边组件引入
  import Rightside from '../../components/Rightside.vue';

  //移动端nav组件引入
  import MobileNav from '../../components/MobileNav.vue';

  //index主样式
  import indexCss from '../../css/styleIndex.css';


  export default {
  

    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

     components:{
        'my-sidebar':Sidebar,
        'my-rightside':Rightside,
        'my-mobilenav':MobileNav,
    },


    mounted:function(){
      document.getElementById('loading').style.display='none';
      document.getElementsByTagName('html')[0].style.overflow ='visible';
     
    },
  }
</script>

<style>

</style>
