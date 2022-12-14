---
slug: build-website
title: 应用docusaurus及github-pages搭建网站
authors:
  name: XR
  title: PM/PMO
  url: https://github.com/futurexr
  image_url: https://avatars.githubusercontent.com/u/113611835?v=4
tags: [github, docusaurus, technology]
---

# 为何突然想不开自己来搭建网站呢？

第一次接触GitHub，是因为公司准备出海，需要开源，这个时候作为项目经理的我就需要了解GitHub是个啥东西、别人是怎么做的、gitflow标准流程是怎样的，如何应用于我们的产研团队，我们产研团队的协作流程以及工具使用又需要作何改变，如何实操落地…

第一次接触vscode，是因为公司出海前需要做文档网站，需要各部门非研发同学来落地内容创作，我来主导负责这个项目，这个时候最为困难的就是要了解创作的内容是如何编辑并且发布上线的（这里大佬已经将网站搭建好了，也提供了基础的代码教程，我这里重中之重就是搞定各部门各角色各环节的实际操作流程，指导都是小白的大家如何实操落地，高效保质发布上线）

作为一个纯技术小白，真的都得去搜去看去问，究竟这些都是个啥，头都大了~~

搞这些的过程中，便萌发了自己也要搞个网站的想法，将自己学到的了解到的想说的内容都沉淀到自己的网站上，与大家分享交流~当然，越是有难度越是有挑战性，越是想把它给搞下来~

# 为何选用docusaurus及github-pages搭建网站？

可能大家会疑惑，为何我要选用docusaurus及github pages来搭建网站呢？

哈哈哈，并没有选，理由很简单：我是小白，公司应用docusaurus来搭建的网站，刚好也是供于内容创作，而gitHub-pages又能够提供免费域名（域名指向某一个IP地址，即打开我个人网站要用的网址）

# 那么作为小白的我，咋去搭建这个网站？

作为小白，我究竟该如何下手呢？

搜了各方资料，发现对小白都很不友好啊，我也只能参考这参考那摸爬滚打的去落地了，期间真的遇到了超多问题，花费了超多时间，可能是因为我侧重于用gitpod来实现吧，不明问题贼多，建议还是用vscode来整。这个网站实际上是我第二个搭建的了，主要是为了写这篇教程，能让大家避免更多的坑。

## 官方参考链接

* [github-pages建站流程](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
* [docusaurus安装流程](https://docusaurus.io/zh-CN/docs/installation)
* [docusaurus部署流程](https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages)

## 第一步：创建仓库及网站，参考[github-pages建站流程](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

### 1.1 创建仓库

创建并登录GitHub账号，为网站创建公开仓库即public repository，仓库命名为`<user>.github.io`。

![](./1.1-1.PNG)

![](./1.1-2.PNG)

![](./1.1-3.PNG)

### 1.2 创建网站

点击“settings”，点击“Pages”，点击“Visite site”，便可跳转到个人网站：https://futurexr.github.io
，可以随时访问了，此时的网站内容只有创建仓库时填写的描述内容，并且存在创建仓库时勾选的readme文件里。那如何构造docusaurus形式的博客空间呢，还需进行下述步骤

![](./1.2-1.JPEG)

![](./1.2-2.JPEG)

![](./1.2-3.PNG)

![](./1.2-4.PNG)

> 补充：返回code主页，你会发现，多了Enviroments及其githup-pages。
> 
> ![](./1.2-5.PNG)

### 1.3 新建gh-pages分支，并将其设置为部署分支

上一步骤的创建网站，是将main分支默认为部署分支了的。为便于后续的部署，我这边将以main分支作为源分支，gh-pages分支作为部署分支。

![](./1.3-1.JPEG)

![](./1.3-2.JPEG)

## 第二步：下载安装基础软件

### 2.1 下载安装[Node.js](https://nodejs.org/en/download/) v16.14 或以上版本

### 2.2 下载安装[Visual Studio Code](https://code.visualstudio.com/Download)

![](./2.2-1.JPEG)

### 2.3 下载安装[GIT](https://git-scm.com/downloads)

![](./2.3-1.JPEG)

### 2.4 下载安装[GitHub Desktop](https://desktop.github.com/)

## 第三步：安装docusaurus，启动本地网站，参考[docusaurus安装流程](https://docusaurus.io/zh-CN/docs/installation)

### 3.1 使用GitHub登录vscode

> 这里涉及到github desktop、vscode、git、github的相互打通授权，这里就不赘述了。

![](./3.1-1.PNG)

### 3.2 vscode打开Teminal面板，按[docusaurus安装流程](https://docusaurus.io/zh-CN/docs/installation)，启动本地预览网站

![](./3.2-1.JPEG)

![](./3.2-2.JPEG)

![](./3.2.3.JPEG)

![](./3.2.4.jpg)

![](./3.2.5.jpg)

![](./3.2.6.png)

## 第四步：部署到GitHub Pages，参考[docusaurus部署流程](https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages)

### 4.1 将docusaurus所有文件搬至根目录下

把XR文件夹里的文件全都搬到根目录下，然后再把XR文件夹去掉。（可以本地文件夹操作）

> 我这里是因为把远程仓库拉到本地再初始化项目，造成docusaurus文件并不直接在根目录下，所以才多此步骤。如果你是直接本地初始化项目后再同步至远程仓库，那么就不需要操作此步骤啦。

![](./4.1-1.png)

### 4.2 修改`docusaurus.config.js`文件内容

![](./4.2-1.png)

### 4.3 添加`.github/workflow`文件夹+`.github/workflows/deploy.yml`文件内容+`.github/workflows/test-deploy.yml`文件内容

![](./4.3-1.png)

### 4.4 使用命令npm run build，然后npm run serve看是否能够成功构建本地网站

![](./4.4-1.png)

### 4.5 本地构建没有问题后，将main分支代码推送至远程仓库

这里我先提交commit，然后再使用命令`git push origin main`推送至远程仓库。

> 不明原因：直接git push不行，手动commit+手动sycn不行

### 4.6 切换至gh-pages分支，将main分支合并至gh-pages分支并将gh-pages分支推送至远程仓库，打开网址看效果

这里使用到命令：`git switch gh-pages`+`git merge main`+`git push origin gh-pages`，原以为这是报错有问题，后来打开网址https://futurexr.github.io
看到最终效果正常，终于搞定！！

![](./4.6-1.jpg)

![](./4.6-2.png)

> 补充：回去GitHub看main与gh-pages分支代码，如下所示
> 
> ![](./4.6-3.png)
> 
> ![](./4.6-4.png)

至此，个人网站已经搭建完成，接下来就是该如何优化界面及输出文档内容啦✿✿ヽ(°▽°)ノ✿
