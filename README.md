## 0x01.关于文库
---

SunHat文库是一个面向物联网安全研究和逆向分析的知识库，涉及逆向分析，WEB，中间件等漏洞挖掘等方面的内容，主要用于整理逆向分析技巧及物联网漏洞挖掘技巧，帮助大家更好的入门物联网安全。。目前主要用于个人技能和团队知识库的储备。文库主题样式使用的是[PeiQi-WIKI-Book](https://github.com/PeiQi0/PeiQi-WIKI-Book)的样式，感谢`PeiQi`大佬的主题样式。

## 0x02.使用须知
---

由于传播、利用此文所提供的信息而造成的任何直接或者间接的后果及损失，均由使用者本人负责，文章作者不为此承担任何责任。

## 0x03.项目搭建
---

```shell
$ git clone https://github.com/zhizhuoshuma/iot-wiki.git
$ npm install vuepress-theme-antdocs -g #全局安装vuepress主题
$ npm install
$ npm run dev # dev开发版
$ npm run build # 编译完成的HTML位于当前项目的docs/.vuepress/dist/*
```

## 0x04.线上地址

SunHat-Wiki-Book的线上部署地址为：`https://wiki.iot-wiki.cn/`

## 0x05.贡献

如果你也想成为我们的一员，那么你可以通过git拉去到本地进行dev开发，确保所新增的文档是正常ok的，在通过git命令推送到dev分支下面，我们团队成员会进行分支合并的，有问题可以在lessus下面留言。

dev分支推送命令

```bash
$ git add .
$ git commit -m "描述"
$ git push orgin dev
```

