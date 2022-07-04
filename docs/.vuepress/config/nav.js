/*
 * @Author: zhizhuo 
 * @Date: 2022-07-01 18:48:00 
 * @Last Modified by: zhizhuo
 * @Last Modified time: 2022-07-04 08:46:55
 */

module.exports = [
    {
        text: '首页',
        link: '/',
    },
    {
        text: '漏洞相关',
        items: [
            {
                text: '路由器',
                link: '/vulnerability/router/',
            },
            {
                text: "防火墙",
                link: "/vulnerability/firewall/",
            },
            {
                text: "摄像头",
                link: "/vulnerability/camera/",
            },
            {
                text: "车联网",
                link: "/vulnerability/vehicle/",
            },
            {
                text: "工控",
                link: "/vulnerability/control/",
            },
            {
                text: "其他",
                link: "/vulnerability/other/",
            }
        ]
    },
    {
        text: '协议相关',
        items: [
            {
                text: 'WIFI协议',
                link: '/agreement/wifi/',
            },
            {
                text: "蓝牙协议",
                link: "/agreement/bluetooth/",
            },
            {
                text: "其他协议",
                link: "/agreement/other/",
            },
        ]
    },
    {
        text: '安全开发',
        items: [
            {
                text: "前端开发",
                link: "/develop/front/",
            },
            {
                text: "后端开发",
                link: "/develop/after/",
            },
            {
                text: "工具",
                link: "/develop/tools/",
            }
        ]
    },
    {
        text: '学习笔记',
        items: [
            {
                text: "物联网学习笔记",
                link: "/notes/物联网/",
            },
        ]
    },
    {
        text: '关于文库',
        items: [
            {
                text: "文库介绍",
                link: "/about/",
            },
            {
                text: "支持项目",
                link: "/about/support",
              },
        ]
    },
];