# Learned

- **html css and someJavaScript**

  我可以使用html和css去做一些简单的静态页面和布局,还可以用css3去实现一些简单的动态效果,像轮播图和动态3D图,还可以使用JavaScript去做一些简单的鼠标点击事件响应,像鼠标悬停特定区域,显示特定的内容,也可以鼠标点击特定区域,使相应区域实现相应的绑定事件.时间有限,所学有限,连dom基本操作都还没熟悉,寒假加油!
   <br/>
   - **html和css**
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190107140509591.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1Nwb25nZUJhb2Jhbw==,size_16,color_FFFFFF,t_70)
   - 代码详情见附件code->淘宝
     <br/>
   - **css3**
   
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190107140620726.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1Nwb25nZUJhb2Jhbw==,size_16,color_FFFFFF,t_70)
   - 代买详情见附件code->翻转


<br/><br/>
   - **js**
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190107140757171.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1Nwb25nZUJhb2Jhbw==,size_16,color_FFFFFF,t_70)
   - 代码详情见附件code->画笔
<br/>

- **一些冷门小知识**
  - **主流浏览器及其内核**

   <table>
     <tr>
       <td>浏览器<td/>内核
     <tr/>
     <tr>
       <td>IE<td>trident
     <tr/>
     <tr>
       <td>Chrome<td>webkit/blink
     <tr/>
     <tr>
       <td>Opera<td>presto
     <tr/>
     <tr>
       <td>Safari<td>webkit
     <tr/>
     <tr>
       <td>Firefox<td>Gecko
     <tr/>
   <table/>



  - ==obj.name==的实质是obj[name]
  
  - loading......
<br/><br/>
- 阿里云部署博客
  - 效果图

   ![我的博客主页](https://img-blog.csdnimg.cn/20190107131226580.png)

  - 安装过程的一些问题

    - 安装的是英文版本需要切换到中文版本,然后再wordpress的wp-config.php配置文件加上了define('WPLANg','zh_CN')一句后,刷新wordpress可以进行中文版更新,但是提示没有创建目录的权利,网上说可以通过使用放开权限777,但是这种方式安全隐患大,问题的原因是执行更新程序的是www用户，需要把插件或主程序下载到 /alidata/www/phpwind，而这个目录下很多文件的所有者是root用户，即www用户没有权限，所以修改目录所有者即可，进入 /alidata/www/phpwind 目录，输入命令：chown -R www:www然后就完美的解决了问题.

    - 服务器的主页是apache的主页,目前还不会更改.
  - 博客的地址为 : [https://www.spongebob.onlion/wordpress](https://www.spongebob.onlion/wordpress)

- **git以及github的使用**
  <br/>
  - **效果图**
 
  ![github主页](https://img-blog.csdnimg.cn/20190107133507421.png)
  <br/>
  - **相关指令**

  ```js
      git add 文件名         //提交到缓存区
      git commit -m '这里是我对提交文件的描述' //提交到本地仓库
      git pull origin master   //获取远程更新到本地
      git merge master     // 将远程更新和本地进行合并
      git push origin master //将本地仓库提交到远程仓库
  ```
  <br/><br/>
- **对于gitbook的使用**
  - 效果图
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190107135003896.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1Nwb25nZUJhb2Jhbw==,size_16,color_FFFFFF,t_70)
  - **安装的问题**
   
    没有什么明显的问题,主要就是还不会公开的部署.
<br/><br/>
- **常用快捷键**

     - [x] ==ctrl + c==  复制
     - [x] ==ctrl + v==  粘贴
     - [x] ==ctrl + a==  全选
     - [x] ==ctrl + z==  撤回
     - [x] ==ctrl + y==  反撤回
     - [x] ==win +  r== 运行
     - [x] ==ctrl + alt + delete== 任务管理器
<br/><br/>
- **linux常用指令**
   - [x] ==cd 路径==   打开对应路径
   - [x] ==cat 文件名== 打开文件
   - [x] ==cd ..== 返回上一级目录
   - [x] ==vim 文件名== 使用vim编辑器打开文件
   - [x] ==yum install 软件名== 软件安装
   - [x] ==wget 下载地址== 下载对应文件
<br/>
- **学习博客记录**

  - CSDN博客的地址为 : [https://blog.csdn.net/SpongeBaobao](https://blog.csdn.net/SpongeBaobao)
  因为阿里云博客出现问题,写在csdn上
