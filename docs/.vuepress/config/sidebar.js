/*
 * @Author: zhizhuo 
 * @Date: 2022-07-01 19:18:15 
 * @Last Modified by: zhizhuo
 * @Last Modified time: 2022-07-17 11:48:23
 */

module.exports = {
    '/about/': require('../../about/sidebar_contents'), //初始下拉为about文件夹下sidebar_contents中包含的下拉菜单，及具体的内容
    '/vulnerability/router/': require('../../vulnerability/router/sidebar_contents'),
    '/vulnerability/firewall/': require('../../vulnerability/firewall/sidebar_contents'),
    '/vulnerability/camera/': require('../../vulnerability/camera/sidebar_contents'),
    '/vulnerability/vehicle/': require('../../vulnerability/vehicle/sidebar_contents'),
    '/vulnerability/control/': require('../../vulnerability/control/sidebar_contents'),
    '/vulnerability/other/': require('../../vulnerability/other/sidebar_contents'),
    '/agreement/wifi/': require('../../agreement/wifi/sidebar_contents'),
    '/agreement/bluetooth/': require('../../agreement/bluetooth/sidebar_contents'),
    '/agreement/other/': require('../../agreement/other/sidebar_contents'),
    '/develop/front/': require('../../develop/front/sidebar_contents'),
    '/develop/after/': require('../../develop/after/sidebar_contents'),
    '/develop/tools/': require('../../develop/tools/sidebar_contents'),
    '/notes/iot/': require('../../notes/iot/sidebar_contents'),
    '/notes/apk/': require('../../notes/apk/sidebar_contents'),
};