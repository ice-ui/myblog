---
toc: true

title: 如何将项目上传到github

tags: 
 - git
 - github
---

#### 需要准备：

<!-- more-->

1. github账号
2. 安装git(在网上找，官网下载非常慢，可以去找别人提供的)

##### github账号注册：

1. 进入GitHub官网：

https://github.com/

注册账号

进入首页，点击右上角+号：新建一个仓库

![](../images/1.png)

自己决定取名，比如我取名为blog

![](../images/2.png)

勾选上下面选项

![](../images/3.png)

2. 仓库建立好了之后开始，找到**settings**,往下面翻，找到**github pages**,点击sourse里面的none--->改为master分支，点击save。此时github pages上面多了你的github pages网址。

在除了C盘的位置，右键点击**git bash here**(前提是你的git安装好了，并且将git bash here设置在了鼠标右键)。

![](../images/4.png)

3. 打开后，执行命令**mkdir blog**(创建一个blog文件夹)；

接着执行**cd blog/**(将位置转换到blog目录下)；

4. 执行 **git clone https://github.com/你注册github的用户名/你创建的问价夹名.git**

这里我建立的是文件夹blog1（因为我已经存在blog文件夹了，名字由你自己决定）

![](../images/5.png)

这时可能会陆续弹出两个输入框，输入你的用户名和登录密码

![](../images/6.png)

一切弄好之后，在你刚刚建立问价夹的位置就会出现一个blog文件夹目录。

5. 打开里面有一个README.md，将你要上传的项目粘贴在这个页面，陆续执行下面命令（每一行都回车执行）：

> cd blog/(这一步是转到blog(master)下)
>
> ls（查看目录里面的文件有哪些）
>
> git status
>
> git add .(注意add后面空格后还有一个点)
>
> git status
>
> git commit -m “modify”
>
> git pull(推送)
>
> git push（到这一行就完成了）
>
> 



然后去github查看，打开你新建的仓库，你上传的项目就上去了。





![](/images/test.jpg)

