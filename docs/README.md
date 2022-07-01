---
home: true
heroImage: /img/SunHat_icon.png
actionBtn:
  text: 关于文库
  link: /about/
  type: primary
  ghost: true
  size: large
preactionBtn:
  text: 支持项目
  link: /about/support
  type: primary
  ghost: true
  size: large
features:
- title: 实用
  details: 真实实战
- title: 详细
  details: 一条龙服务
- title: 开源
  details: 自由搭建

head: [
    ['link', { rel: 'icon', href: '/img/SunHat_icon.png' }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'keywords', content: 'Sunhack文库,二进制,逆向分析,漏洞研究,物联网安全,模糊测试' }],
    ['meta', { name: 'description', content: 'SunHat文库是一个面向物联网安全研究和逆向分析的知识库，涉及逆向分析，WEB，中间件等漏洞挖掘等方面的内容，主要用于整理逆向分析技巧及物联网漏洞挖掘技巧，帮助大家更好的入门物联网安全。目前主要用于个人技能和团队知识库的储备。' }],
  ]
footer: Powered by SunHat文库 | Copyright © 2020-2022 SunHat文库
---

</br>
</br>
<a-alert type="info" message="提示" description="由于传播、利用此文所提供的信息而造成的任何直接或者间接的后果及损失，均由使用者本人负责，文章作者不为此承担任何责任。SunHat文库拥有对此文章的修改和解释权如欲转载或传播此文章，必须保证此文章的完整性，包括版权声明等全部内容。未经作者允许，不得任意修改或者增减此文章内容，不得以任何方式将其用于商业目的。" showIcon>
</a-alert>

</br>
</br>

<template>
  <a-steps>
    <a-step status="finish" title="Login Github">
      <a-icon slot="icon" type="github" />
    </a-step>
    <a-step status="finish" title="Star">
      <a-icon slot="icon" type="star" />
    </a-step>
    <a-step status="process" title="Reading">
      <a-icon slot="icon" type="loading" />
    </a-step>
    <a-step status="wait" title="Thank">
      <a-icon slot="icon" type="SunHat-o" />
    </a-step>
  </a-steps>
</template>