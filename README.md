# 盖浇技术栈博客
www.pkjoebinbin.cn

>很久前就想写个博客系统了，程序员嘛，总要有个载体记录日常开发的一些问题及经验。目前市面上蛮多好的博客平台，功能也相当完善，包括一些像wordpress这类较为出名的博客系统框架。但这些平台及框架在界面设计以及布局上我自己还是觉得比较一般，做为懂点设计的前端，我决定自己写一个博客系统，功能性上说不上强大，但界面设计上还是可以随心所遇的。

<br/>

<strong>技术栈</strong>

 - Vue
 - vue-resource
 - vue-router
 - php（感谢17岁神童少年基佬城的数据接口及服务器友情赞助）

<br/>
<strong>vue项目文件结构及置文件</strong>

<br/>
<br/>

> vue-cli脚手架搭建，使用的simple模版，单页应用。考虑到数据量及组件间的数据通讯相对没有那么复杂，故没有使用vuex。

<br/>

<img src="https://github.com/pkjoebinbin/Blog/blob/master/readme%E9%A2%84%E8%A7%88%E5%9B%BE/package%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.png"/>




<br/>
<strong>项目需求</strong>

<br/>
<br/>

> 前台展示数据、用户评论，后台实现博客增删改查、富文本编辑、评论提醒及评论回复。

<br/>
<strong>设计</strong>

<br/>
<br/>


> 起初使用常规的文档流的布局，后来推翻了，觉得太普通，而且单页应用做成文档流布局体现不出单页效果！！最后定稿为左右栏布局，整体垂直水平居中，四边留白。（这样的布局也给自己挖了不少坑）

<br/>
<strong>Vue组件架构</strong>

<br/>
<br/>

> 左边栏、右边栏、导航栏、分类、博文详情、标签列表。



  
<br/>
<strong>首页</strong>
<img src="https://github.com/pkjoebinbin/Blog/blob/master/readme%E9%A2%84%E8%A7%88%E5%9B%BE/index.png" />


<br/>
<strong>博客详情</strong>
<img src="https://github.com/pkjoebinbin/Blog/blob/master/readme%E9%A2%84%E8%A7%88%E5%9B%BE/detail.png" />


<br/>
<strong>移动端</strong>
<img src="https://github.com/pkjoebinbin/Blog/blob/master/readme%E9%A2%84%E8%A7%88%E5%9B%BE/%E7%A7%BB%E5%8A%A8%E7%AB%AF.png" />


<br/>
<strong>后台登录页面</strong>
<img src="https://github.com/pkjoebinbin/Blog/blob/master/readme%E9%A2%84%E8%A7%88%E5%9B%BE/login.png" />

<br/>
<strong>数据页面</strong>
<img src="https://github.com/pkjoebinbin/Blog/blob/master/readme%E9%A2%84%E8%A7%88%E5%9B%BE/dashboard.png" />

<br/>
<strong>博客编辑发布</strong>
<img src="https://github.com/pkjoebinbin/Blog/blob/master/readme%E9%A2%84%E8%A7%88%E5%9B%BE/adminDetail.png" />

