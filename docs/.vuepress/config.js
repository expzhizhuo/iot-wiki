/*
 * @Author: zhizhuo 
 * @Date: 2022-07-01 21:01:04 
 * @Last Modified by:   zhizhuo 
 * @Last Modified time: 2022-07-01 21:01:04 
 */

module.exports = {
    title: 'SunHat文库', //首页左上角的名称
    theme: 'antdocs', //使用的主题
    description: '一个专注于物联网安全的WIKI文库，\n暂时由于目前比较繁忙，后续有时间会慢慢推送文章上来，感谢各位大佬谅解与支持！', //描述信息
    head: [
        ['link', { rel: 'icon', href: '/img/SunHat_icon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2,
        backToTop: true,
        smoothScroll: true,
        nav: require('./config/nav'),
        sidebar: require('./config/sidebar'),
        sidebarDepth: 0,
        lastUpdated: '上次更新',
        logo: '/img/SunHat_icon.png',
        repo: 'https://github.com/zhizhuoshuma/iot-wiki',
        editLinks: true,
    }
}