---
title: apk测试方式及注意点
---

## 参考资料
参考书籍《Android应用安全测试与防护》<br />参考连接：[https://mp.weixin.qq.com/s/zDYS84vUiFqI_Upq7jWuMA](https://mp.weixin.qq.com/s/zDYS84vUiFqI_Upq7jWuMA)<br />   [https://wenku.baidu.com/view/6dee472b6f85ec3a87c24028915f804d2a168757.html](https://wenku.baidu.com/view/6dee472b6f85ec3a87c24028915f804d2a168757.html)<br />   [https://baijiahao.baidu.com/s?id=1654322436173036859&wfr=spider&for=pc](https://baijiahao.baidu.com/s?id=1654322436173036859&wfr=spider&for=pc)<br />   [https://max.book118.com/html/2021/0324/6234241124003124.shtm](https://max.book118.com/html/2021/0324/6234241124003124.shtm)<br />   [https://blog.csdn.net/websinesafe/article/details/118753781](https://blog.csdn.net/websinesafe/article/details/118753781)
<a name="dUlPL"></a>
### 一、apk测试工具
静态分析工具：apktool、baksmali、smali、dex2jar+jd+GUI、JRB<br />动态分析工具：DDMS、gdb、IDA Pro、Drozer<br />抓包分析工具：组网环境、Fiddler、wireshark<br />挂钩框架：xposed框架、frida、inject

<a name="Bg08y"></a>
### 二、安全测试基础
1、信息资产<br />app文件、程序进程、内存数据、前端界面、本地存储、网络链路、交互接口、云端接口等<br />2、安全测试框架<br />程序代码安全测试：运行环境测试、防反编译测试、防篡改测试、防调试测试、防注入测试<br />本地数据安全测试：数据创建测试、数据存储测试、数据处理测试、数据共享测试、数据备份测试、数据销毁测试<br />服务交互安全测试：进程间交互测试、屏幕交互测试、web view测试、接口端口测试<br />网络传输安全测试：安全传输层测试、数据加密测试、中间人攻击测试<br />鉴权认证安全测试：注册过程测试、登录过程测试、会话过程测试、登出过程测试、注销过程测试


APP信息资产与安全测试的对应关系<br />![](http://img.zhizhuoshuma.cn/images/202207171230206.jpeg)

<a name="AfLVm"></a>
### 三、程序代码测试
<a name="eYeZ5"></a>
#### 五个纬度进行安全测试
![](http://img.zhizhuoshuma.cn/images/202207171230107.jpeg)

<a name="ZuZKN"></a>
#### 安全测试要求：
运行环境要求进行ROOT检测、模拟器环境检测和挂钩框架测试；<br />防反编译要求进行反编译工具检测、代码混淆检测、混淆程度检测和关键代码检测；<br />防篡改要求进行文件防篡改检测和内存防篡改检测；<br />防调试要求进行调试工具保护检测、调试行为保护和内存防护检测；<br />防注入要求进行进程保护检测；

<a name="pQjAy"></a>
#### 安全测试方法：
<a name="pQYJi"></a>
##### 运行环境：
1、Android root 环境检测<br />目的—检测app运行时是否对android root环境运行进行检测；<br />方法步骤：<br />1.安装app到root主机中；<br />2.运行app查看是否正常运行并提示用户；

2、Android 模拟器环境检测<br />目的—检测qpp运行时是否对Android 模拟器环境进行检测；<br />方法步骤：<br />1.安装app至模拟器中；<br />2.确认是否可以正常运行并提示用户；

3、Android 挂钩框架环境检测<br />目的—检测app是否存在逆向框架检测机制；<br />方法步骤：<br />1、反编译app源代码，查看在app代码中是否存在检测逆向框架代码；<br />2、在已安装逆向框架上机上安全并运行app，查看是否提示用户app在不安全环境下运行；
<a name="TE9gg"></a>
##### 防反编译测试：
1、反编译工具测试：<br />目的—检测app是否可以防止反编译工具，是否具有逆向保护措施；<br />方法步骤：<br />1、通过反编译工具对apk文件进行反编译，查看是否有防逆向保护措施；<br />2、通过IDA Pro 等反编译工具对动态库 so文件进行反向编译，查看app是否具有防反编译的能力；

2、代码混淆测试：<br />目的—检测app反编译后的源代码是否经过混淆处理；<br />方法步骤：<br />1、通过反编译工具对app进行反编译，查看代码中的类、字段和方法是否使用混淆处理；

3、混淆强度检测：<br />目的—检测app反编译后源代码的混淆程度，查看是否能够有效保护代码安全；<br />方法步骤：<br />1、检测dex文件代码中所有的类名、函数名、字段、方法，是否都进过混淆处理，例如-反编译后无法正常识别java层函数功能；<br />2、检测so文件中所有的类名、函数名、字段、方法，是否进行了混淆处理，例如-反编译后无法正常识别natove层函数的功能；

4、关键代码（铭感逻辑和数据保护）检测<br />目的—检测app是否对关键代码和数据实施有效的保护措施，是否暴露业务逻辑；<br />方法步骤：<br />1、通过反编译工具对app进行反编译，结合xml配置文件，分析app登录、注册、支付过程】加密算法、数据通信关键代码，查看先关代码逻辑是否有明显的暴露；<br />2、对app进行反编译后，如果app没有对关键代码和数据进行保护，先关业务字符串将会以明文显示，容易暴露业务逻辑；
<a name="zeCLZ"></a>
##### 防篡改：
1、程序文件的篡改检测<br />目的—检测app启动时是否进行了完整性的效验，是否对客户端代码、资源文件进行修改，是否具有防篡改机制<br />方法步骤：<br />1、使用反编译工具apktool对目标文件进行反编译；<br />2、修改先关代码，篡改xml、assrets文件、res配置文件等<br />3、使用apktool重新打包签名再运行app，查看结果

2、内存数据防篡改检测<br />目的—检测app运行时，内存中的关键代码和敏感数据是否能够被篡改；<br />方法步骤：<br />1、将app安装到被测的移动智能终端上，并与服务器端进行连接；<br />2、动态分析调试代码逻辑，修改app运行期间内存中的数据，查看运行结果，比如修改登录逻辑，任意密码是否能登录；

<a name="KJl5D"></a>
##### 防调试：
1、调试工具保护检测<br />目的—检测app是否客户以利用动态调试工具加载调试；<br />方法步骤：<br />1、安装并运行app，通过动态调试工具有加载调试，查看是否可以正常运行；<br />2、解压测试app，把classes.dex拖到IDA Pro中点ok；<br />3、接着选择debugger→debugger options→aet specific options<br />根据Androidmanifest文件找到该apk入口点，进行动态调试，或下断点调试

2、调试行为防护检测<br />目的—检测app是否可以防止通过动态调试方法调取代码的关键代码和敏感数据；<br />方法步骤：<br />1、在真机上安装测试app，动态调试dex文件，查看能否调试出铭感的数据或者核心的逻辑代码；<br />2、在真机上安装测试app，动态调试so文件，查看能否调试出铭感的数据或者核心的逻辑代码；

3、内存防护检测<br />目的—检测app内存是否具有内存保护功能，例如 方内存转储；<br />方法步骤：<br />1、启动app，使用ps命令查看进程pid，使用gdb -p  命令挂载app进程，在使用gcore指令转储内存；
<a name="N5W3H"></a>
##### 
<a name="WjIwM"></a>
##### 防注入
1、进程保护<br />目的—检测app进程空间是否可以被二次注入第三方动态库so文件；<br />方法步骤：<br />1、将被检测app安装到移动智能测试终端，并启动应用进程；<br />2、通过注入工具或脚本，将第三方动态库文件注入app的进程空间，查看第三方so文件是否在进程的内存空间中；

<a name="URu9a"></a>
### 四、服务交互安全测试
app服务服务狡交互安全测试<br />![](http://img.zhizhuoshuma.cn/images/202207171230118.jpeg)

<a name="f1HRR"></a>
#### 安全测试要求
进程间交互要求进程间的通信数据安全检测；<br />屏幕交互要求进行界面劫持、防截屏检测、防录屏检测；<br />web view交互要求进行克隆攻击检测、web view安全检测、addjavascriptlnterface漏洞检测、fragment lnjection注入漏洞检测；<br />接口端口交互要求进行对象反序列化检测、外部输检测、不对外输入铭感信息检测；

<a name="odNbs"></a>
#### 安全测试方法
<a name="VvYXa"></a>
##### 进程交互
1、进程间通信数据安全检测<br />目的—检测进程间数据通信是否具有泄露用户信息的风险；<br />方法步骤：<br />1、在AndroidManifest.xml文件中查看Activity的exported属性是否为ture，是则可以被第三方app启动，绕过登录等其它界面，直接查看该界面信息，容易暴露用户铭感数据；<br />2、在AndroidManifest.xml文件中查看Contet Provider的exported属性是否为ture，是则可以被第三方app调用，实现增删改查等；<br />3、在AndroidManifest.xml文件中查看BroadCast的exported属性是否为ture，是则可以接受第三发送的广播消息；<br />4、在在AndroidManifest.xml文件中查看Svervice的exported属性手否为ture，是则可以被第三方app启动；

<a name="C5zT8"></a>
##### 屏幕交互
1、界面劫持检测<br />目的—app是否具有防劫持（也称透明UI欺骗）功能黑客伪造界面对原有界面进行副覆盖，窃取用户账号及密码等铭感信息；<br />方法步骤：<br />1、通过JEB工具反编译dex文件的源代码，查看客户端app是否具有检测程序进入后台裕兴的代码；<br />2、编写透明界面，当运行至登录、支付等界面时进行覆盖，查看是否具有风险提示。

2、防截屏检测<br />目的—app运行后是否存在防截屏保护；<br />方法步骤：<br />1、


未完待续-----vx：Xiaoli-20-21











