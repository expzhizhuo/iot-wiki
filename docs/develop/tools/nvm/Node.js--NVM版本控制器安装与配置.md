---
title: Node.js--NVM版本控制器安装与配置
---

## 前言

在我们的项目基于nodejs的前端项目或者后端的server服务都是会使用到ndoejs环境的，由于很多新的依赖插件最新版本的是不是不支持ndoe16版本一下的node环境运行的所以我们需要将我们的node版本进行无缝切换以确保我们的项目是可以正常的运行。所以这个时候我们就需要使用到我们的nodejs版本控制器--nvm

## 下载与安装

nvm的官方GitHub地址是:https://github.com/nvm-sh/nvm

这里面都是源代码需要我们进行编译之后才可以运行的，这样对于我们的小伙伴来说就复杂了。

这个时候我们就有大佬提供的一键式集成打包的文件，项目地址是https://github.com/coreybutler/nvm-windows/releases

由于本人使用的是Windows，所以这里放的就是Windows的集成化下载地址

Mac的安装方式就可以直接参考Linux的安装方式就可以了，官方下面的README写的很清楚，按照步骤一步一步的走就可以啦。

![image-20220703220556935](http://img.zhizhuoshuma.cn/images/202207032206039.png) 

这里我们下载这个版本，然后我们在我们的C盘下面创建一个nvm目录用来安装nvm版本控制器**（注*nvm的安装目录是不可以使用中文的或者含有中文的）**

 ![image-20220703220748184](http://img.zhizhuoshuma.cn/images/202207032207905.png) 

然后我们开始安装我们的nvm

 ![image-20220703221057544](http://img.zhizhuoshuma.cn/images/202207032211545.png) 

 ![image-20220703221116768](http://img.zhizhuoshuma.cn/images/202207032211485.png) 

![image-20220703221136662](http://img.zhizhuoshuma.cn/images/202207032211131.png) 

 ![image-20220703221157308](http://img.zhizhuoshuma.cn/images/202207032212498.png)

然后安装就可以，注意上面的路径一定不要错了，nodejs的安装位置用默认的就可以 ，nvm的安装位置一定要修改！！！

这个时候我们需要修改一个nvm的下载源不然默认是国外的很慢很慢很慢（重要的事情说3遍）

nvm配置文件地址

```bash
C:\nvm
```



![image-20220703222249741](http://img.zhizhuoshuma.cn/images/202207032222045.png) 

淘宝源地址

```bash
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

接下安装完成，建议重启一下电脑，等电脑开机，搜索cmd，以管理员身份运行

![image-20220703221434330](http://img.zhizhuoshuma.cn/images/202207032214715.png) 

 ![image-20220703221527319](http://img.zhizhuoshuma.cn/images/202207032215571.png)  

这样就是显示nvm已经成功安装了

使用以下命令就可以自由配置我们的nodejs环境了

```bash
nvm list #查看当前本地已经安装的nodejs版本
```

![image-20220703221730610](http://img.zhizhuoshuma.cn/images/202207032217535.png) 

```bash
nvm use nodejs的版本号 #切换使用的nodejs版本
```

![image-20220703221836537](http://img.zhizhuoshuma.cn/images/202207032218382.png) 

```bash
nvm list available #显示所有可以下载的nodejs版本
```

 ![image-20220703221956969](http://img.zhizhuoshuma.cn/images/202207032220360.png)  

```bash
nvm install nodejs版本号 #安装这个版本的nodejs
```

![image-20220703222126486](http://img.zhizhuoshuma.cn/images/202207032221274.png)  