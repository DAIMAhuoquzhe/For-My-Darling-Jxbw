<a href="complete">
<button type="button" class="btn"  style="background-color: #7ED321;width: 200px;height: 100px;color: #FFFFFF">
开始浏览
</button>
</a>


### 点击上方按钮进入主网站

### 由于GitHub服务器位于海外，为了长期稳定的浏览体验请收藏我托管在国内的网站https://cwjxbw1314.gitee.io/love

### 以下是对网站模板化的说明

### 说明

这里是由GitHub Pages托管的页面

### 使用前提

 <a href="#important">注意点</a>

如果你具备前端开发的相关经验，那么可以自由地在这个模板上进行相关的修改

如果你不具备任何前端开发的经验，那么或许可以考虑换个东西

如果你只是简单了解相关知识，那么你可以阅读下面的引导来了解这个模板。

#### 修改密码
 在complete下，有js/index.js文件：
 ```javascript
 //修改此处的123,123即可修改登录的用户名和密码
 if(userName=="xxxx" &&  pwd=="xxxx"){
   event.preventDefault();
   $('form').fadeOut(500);
   $('.wrapper').addClass('form-success');
   setTimeout(function(){location.href="BirthdayCake.html";},2000);
 }
 ```

## 音乐组件（按需添加）：
下面代码请放置在独立的body标签下
```javascript
<meting-js 
	server="netease" 
	type="song" 
	id="1403250178"
	fixed="true" 
	autoplay="true"
	loop="all"
	order="random"
	preload="auto"
	list-folded="ture"
	list-max-height="500px"
	lrc-type="0">
</meting-js>
 ```
  另外网站主要应用了网易云插件具体教程请百度

## 如何给别人看
1. 发给别人
2. 部署至云服务器或者虚拟主机（需要域名，成本较高）
3. 部署至Gitee、 Github等托管网站
4. 内网穿透

## <a id="important" style="color: #000;">注意点</a>

Google Chrome浏览器更新后会拦截自动播放音乐

其他Chrome内核浏览器无影响，如新版Edge

Firfox未测试

**手机屏幕大小不同，建议根据实际屏幕大小修改Memories.html页面，防止图片遮挡文字。**


## 其它问题
有问题请发邮件至 love@cwjxbw1314.website，公有问题我会继续更新在README

## 改进计划
暂无，后续可能会升级代码（感觉要重写）

