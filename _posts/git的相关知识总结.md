---

toc: true

title: git+github相关知识总结

tags: 
  - git
  - github
---

####                                    Git&Github

### 1.版本控制

<!--more-->

#### 下面一段是理论介绍

#### 版本控制工具

1.  集中式版本控制工具：
   - CVS、SVN、VSS...

2.  分布式版本控制工具：
   - Git、Mercurial、Bazzar...

#####  优势：

1. 大部分操作都在本地完成，不需要联网。
2. 完整性保证
3. 尽可能添加数据而不是删除或修改数据
4. 分支操作非常流畅
5. 与linux命令全面兼容

##### 安装：

官网：https://git-scm.com/选择与电脑版本兼容的下载

安装目录：最好选择**非中文无空格**位置下载，避免后续出现错误。

##### Git在本地的结构：

![](../images/git1.png)

本地区（git仓库）：最终确定的文件保存在仓库，成为一个新的版本，并且对他人可见。

暂存区：暂存已经修改的文件最后统一提交到git仓库中。

工作区：添加、编辑、修改文件等动作。

##### Git和代码托管中心（Github就是git的一个托管中心)

代码托管中心的作用：维护远程库

代码托管中心：

1. 局域网环境下：Gitlab服务器
2. 外网环境下：github、码云

##### 本地库和远程库

1. 团队内部协作

![](../images/git2.png)

2. 跨团队协作

### Git的相关命令操作

#### 1.本地库初始化

- **命令**：（让git知道，他需要来管理这个目录）

  > **git init**

- **执行**：

  - 新建一个空的目录:**mkdir 文件夹名**（比如mkdir js)

  ![](../images/git4.png)

  - 在命令行中进入项目目录 **cd 文件夹名**。

  - 执行git init的目的就是创建了一个.git的隐形文件。

  - 如果想要看.git文件夹下面内容，可以执行**ll .git/**命令

![](../images/git3.png)

- 注意：**.git**目录存放的是本地库相关的子目录和文件，不要删除，也不要胡乱的修改。

####  2. 设置签名

1.**形式**

   用户名：

   Email地址：

2. **作用**：为了区分不同开发人员的身份
3. **解释**：这里设置的签名和登录远程仓库的账号和密码没有任何的关系。
4. **命令**：

- 项目级别/仓库级别：仅在当前本地范围内有效

> **git config user.name 用户名**
>
> **git config user.email 邮箱地址**

![](../images/git5.png)

信息保存位置：./.git/config

![](../images/git6.png)

- 系统用户级别：登录当前操作系统的用户范围

> git config **--global** user.name 用户名
>
> git config **--global** user.email 邮箱地址

####  3. 基本操作

1. **命令**

> **git status**(查看当前状态)

2.**添加**

  **目的**：将工作区的“新建/修改”添加到暂存区

   将文件创建或者复制到当前文件夹下

   执行下面命令：

   > **git add文件名**（可以添加一个文件，也可以同时添加多个文件，中间以空格隔开）
   >
   > 如果是直接复制在文件夹下就执行
   >
   > **git add .**（表示添加当前目录到缓存区中）

我是直接复制在文件夹下：
![](../images/git7.png)

3. **提交**

   > **git commit -m “注释内容（可以写中文）”文件夹名**
   >
   > 

![](../images/git8.png)

在后续对于文件（可以操作一个或者多个后），重复使用git add 和git commit指令即可。

**目的**：将暂存区的内容提交到本地库

4. **查看历史记录**（当你误删或者误修改时）

   > **git log**（查看版本）
   >
   > 多屏显示控制方式：
   >
   > 空格向下翻页
   >
   > b 向上翻页
   >
   > q 退出

###### 如果想要看起来更简洁，可以使用下面几种方式

> **git log --pretty=oneline**（注意都是两个短线）

> **git log --oneline**（两个短线）



如何实现前进后退

1. **基于索引值操作（推荐）**

   > **git reset - -hard**(局部索引值)
   >
   > **git reset - -hard a6ace91**(只需要复制第一段数就可)

2.**使用^符号（只能实现后退）**

   > **git reset - -hard HEAD^**
   >
   > 一个^表示后退一步，n个表示后退n步

3. **使用~符号：只能后退**

   > **git reset - -hard HEAD~n**
   >
   > 表示后退n步

**注意**：回到过去以后，要想回到之前最新的版本的时候，则需要下面的指令去查看历史操作，以得到最新的 **commit id**。

> **git reflog**

###### reset命令的三个参数对比

- **- -soft**:仅仅在本地库移动HEAD指针
- **- -mixed**：在本地库移动指针，重置暂存区
- **- -hard**:在本地库移动HEAD指针，重置暂存区，重置工作区

####  4. 删除文件并找回

前提条件：删除前文件存在时的状态提交到了本地库

**操作**

> **git reset --hard[指针位置]**
>
> 删除操作已经提交到本地库：指针位置指向历史记录位置。
>
> 删除操作尚未提交到本地库：指针位置使用HADE

#### 5. 比较文件差异

> **git diff 文件名**
>
> 将工作区的文件和暂存区进行比较
>
> **git diff[本地库中历史版本][文件名]**

#### 以上是git上相关操作，现在以github为例讲解远程仓库。

##### 首先，打开github官网，注册账号和密码。

打开见到如下界面：

![](../images/github1.png)

点击右上角加号,创建一个仓库。

![](../images/github2.png)

![](../images/github3.png)

##### 仓库创建好后，有两种使用方式

###### 基于https方式

1. 步骤

a.创建空目录，名称由你决定

b.在创建好的目录下右键打开**git bash here**或者直接在命令行使用指令打开目录。

2. 使用**clone**指令克隆线上仓库到本地

   - **语法**：**git clone 线上仓库地址**

   ![](../images/github4.png)

3. 建立好之后，就可以在仓库上做对应的操作
   - 提交暂存区
   - 提交本地仓库
   - 提交线上仓库
   - 拉取线上仓库

#### 提交到线上仓库的指令：git push(这个过程需要联网，所以有点慢)

这个时候回提示你出现错误，没有权限！！（在首次往线上仓库提交内容的时候出现了403的错误，原因是不是任何人都可以往线上仓库提交内容，需要鉴权）

#### 进行权限配置

打开.git/config文件夹

![](../images/github5.png)

在此处加上**用户名：密码@**

最后：**git push**

执行完成后，打开github仓库，里面就显示你的目录了。

拉取线上仓库：**git pull**

###### 基于ssh协议



#### 下面进行git的分支介绍

1. 什么是分支？

   在版本控制中，使用多条线同时推进多个任务。

   ![](../images/git9.png)

2. 分支的好处
   - 同时并行并推进多个功能的开发，提高开发效率
   - 各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支重新开始即可。

3. 分支操作

   > 创建分支
   >
   > **git branch[分支名]**
   >
   > 查看分支
   >
   > **git branch -v**（注意：当前分支前面有个*标记）
   >
   > 切换分支
   >
   > **git checkout（想要切换的分支名）**（切换成功后，当前分支名为绿色）
   >
   > 如果你想要在当前分支下进行修改文件操作后，执行**git add 文件名**、**git commit -m**操作
   >
   > 
   >
   > 合并分支
   >
   > ​      第一步：切换到接收修改的分支（被合并，增加新内容）上**git checkout[被合并分支名]**。
   >
   > ​     第二步：执行**git merge[有新内容分支名]**

> **删除分支：git branch -d 分支名**
>
> 注意：在删除分支的时候，一定要退出要删除的分支，然后才能删除。

#### 提交到远程仓库

> **git remote -v 仓库地址**

> 如果你不想每次都使用仓库地址（太长）
>
> 可以创建一个名字来代替仓库地址，这样下次直接用这个名字
>
> 具体步骤如下：
> **git remote add origin 仓库地址**（使用origin来代替仓库地址）
>
> **git remote -v **（出现仓库地址）
>
> **git push origin master**（推送）



#### 以上内容只是对本地分支进行了操作，要想线上分支也发生变化

#### git push