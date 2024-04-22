<template><div><h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>Changelog</span></a></h1>
<h3 id="_2024-1-27" tabindex="-1"><a class="header-anchor" href="#_2024-1-27"><span>2024-1-27</span></a></h3>
<p><em><strong>fix</strong></em></p>
<ol>
<li>屏幕缩放比例过大导致界面变形</li>
<li>保存模型设置导致程序崩溃</li>
</ol>
<p><em><strong>add</strong></em></p>
<ol>
<li>添加对话框背景（assets文件夹下的bubble.png），可自行替换，命名为&quot;bubble.png&quot;</li>
</ol>
<p><em><strong>注</strong></em></p>
<ul>
<li>自带的百度语音识别存在问题，后续可能解决该问题或改用sherpa（程序体积会增大）</li>
<li>由于之前没有长远更新的打算，想到什么加什么，没有考虑代码的组织设计，现在有点难以维护，后续可能重构/弃坑了。</li>
</ul>
<h3 id="_2023-08-31" tabindex="-1"><a class="header-anchor" href="#_2023-08-31"><span>2023-08-31</span></a></h3>
<p><em><strong>add</strong></em><br>
Hitokoto 插件，每隔 5s 播放一言中的文本（独立计时，有动作播放时停止计时），数据来自 <a href="https://github.com/hitokoto-osc/sentences-bundle" target="_blank" rel="noopener noreferrer">hitokoto-osc/sentences-bundle<ExternalLinkIcon/></a></p>
<p><em><strong>fix</strong></em></p>
<ol>
<li>动作的结束判断现在以音频、文本、动画三者全部播放完毕为判断标准。动作播放间隔相应从动作完全播放完毕时为起点开始计时。</li>
<li>禁用多个插件时相应的设置页面无法关闭。</li>
<li>启用 Greeting 插件后程序无法正常退出。</li>
</ol>
<h3 id="_2023-08-25" tabindex="-1"><a class="header-anchor" href="#_2023-08-25"><span>2023-08-25</span></a></h3>
<p><em><strong>add</strong></em></p>
<ol>
<li>
<p>插件生命周期</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">IPlugin</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token operator">~</span><span class="token function">IPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">;</span>

	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Activate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 关闭插件时调用</span>

	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 开启插件时调用</span>

	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Initialize</span><span class="token punctuation">(</span>ILApp<span class="token operator">*</span> app<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 插件示例化后，初次使用前应该先初始化</span>

	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 程序启动时调用</span>

	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnScheduledTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 周期性任务，每帧调用一次</span>

	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnShutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 程序关闭时调用</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>插件状态管理</p>
<p>插件开启状态保存在 config.json 中:</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token property">"Plugins"</span> <span class="token operator">:</span> 
<span class="token punctuation">{</span>
	<span class="token property">"com.arkueid.greeting/1.0.0"</span> <span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_2023-08-12" tabindex="-1"><a class="header-anchor" href="#_2023-08-12"><span>2023-08-12</span></a></h3>
<p><em><strong>add</strong></em></p>
<ul>
<li>插件系统
<ul>
<li>
<p>可以依照给出的接口类编写 <em><strong>QT插件</strong></em>，编译为动态库 *<strong>.dll</strong>，放在桌宠目录下的 plugins 中，即可被扫描读取 (目前没有设计安全检测，详细见 <em><strong>develop</strong></em> 分支的 <em><strong>Greeting</strong></em> 插件样例)</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>live2d-x86.exe
live2d-x86-debug.exe
plugins
	|----Greeting
	|		|----Greeting.dll
	|
	|----Plugin2
	|		|----Plugin2.dll
	|		|----customResourceDir // 插件所需的资源文件夹
	|		|----Dir2
	|		...
	|
	|----Plugin3
	...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件可以实现在 <em><strong>托盘右键菜单</strong></em> 和 <em><strong>设置窗口</strong></em> 添加 <em><strong>选项</strong></em> / <em><strong>页面</strong></em>，可以添加自定义的窗口和自定义功能（自定义功能后续会逐步拆解原项目实现更灵活的操作）</p>
<p><img src="/sample_images/plugin-demo1.png" alt="示例"></p>
<p><img src="/sample_images/plugin-demo2.png" alt="示例"></p>
<p><img src="/sample_images/plugin-demo3.png" alt="示例"></p>
</li>
</ul>
</li>
</ul>
<p><em><strong>fix</strong></em></p>
<ul>
<li>修复系统默认编码为 GBK 时加载包含中文的路径导致程序崩溃和 debug 输出乱码。现在在Windows 区域设置是否中勾选 Unicode UTF-8 不会对中文路径造成影响。</li>
<li>修复首次加载聊天功能时由于没有 chat 文件夹导致 sqlite 数据库文件创建报错。</li>
</ul>
<h3 id="_2023-08-09" tabindex="-1"><a class="header-anchor" href="#_2023-08-09"><span>2023-08-09</span></a></h3>
<p><em><strong>change</strong></em></p>
<ul>
<li>现在可以从聊天记录中复制聊天内容</li>
</ul>
<p><em><strong>fix</strong></em></p>
<ul>
<li>聊天时角色的回答动作会被 Idle 动作组的动作打断</li>
</ul>
<h3 id="_2023-08-08" tabindex="-1"><a class="header-anchor" href="#_2023-08-08"><span>2023-08-08</span></a></h3>
<p><em><strong>changes</strong></em></p>
<ul>
<li>设置窗口使用 Material 风格，组件来自：https://github.com/laserpants/qt-material-widgets</li>
</ul>
<p><em><strong>fix</strong></em></p>
<ul>
<li>修复模式的开启与关闭无法保存</li>
<li>源码改为 UTF-8 后导致含中文路径的模型资源加载崩溃，打开设置页面崩溃(v0.3.5 存在该问题)</li>
</ul>
<h3 id="_2023-08-07" tabindex="-1"><a class="header-anchor" href="#_2023-08-07"><span>2023-08-07</span></a></h3>
<p><em><strong>changes</strong></em></p>
<ul>
<li>聊天记录使用 sqlite 储存</li>
<li>重新启动应用会加载当天的所有聊天记录</li>
<li>聊天记录现在可以以天为单位在历史记录窗口查询</li>
<li>拆分 UI 资源和模型资源文件夹，现在 UI 资源固定放置在 assets 文件夹下</li>
<li>源代码由 GBK 更改为 UTF-8</li>
<li>自定义文本聊天和语音聊天统一用 json 格式进行传输，请求类型为 POST，参见<a href="dev-server/dev-server.py">自定义聊天服务器模板</a></li>
</ul>
<p><em><strong>add</strong></em></p>
<ul>
<li>添加随机播放内置文本，数据源一言：https://github.com/hitokoto-osc/sentences-bundle</li>
</ul>
<p><em><strong>fix</strong></em></p>
<ul>
<li>历史记录中播放音频无效</li>
<li>自定义语音聊天开启后再次启动程序开启无效</li>
</ul>
<h3 id="_2023-08-05" tabindex="-1"><a class="header-anchor" href="#_2023-08-05"><span>2023-08-05</span></a></h3>
<p><em><strong>change</strong></em></p>
<ul>
<li>优化所有窗口的拖动功能，现在不会出现窗口抖动</li>
<li>取消聊天历史靠边隐藏</li>
<li>所有窗口统一左键拖动</li>
<li>左键双击调出聊天输入框</li>
<li>暂时取消对话框的字体颜色和背景颜色的设置</li>
</ul>
<p><em><strong>add</strong></em></p>
<ul>
<li>添加环形菜单，菜单组件来自：https://github.com/SimonBuxx/piemenu-qt
<img src="/sample_images/Snipaste_2023-08-05_13-34-56.png" alt="环形菜单"></li>
</ul>
<h3 id="_2023-07-14" tabindex="-1"><a class="header-anchor" href="#_2023-07-14"><span>2023-07-14</span></a></h3>
<ul>
<li>移除鸡肋的番剧列表功能</li>
<li>用回之前的鼠标追踪</li>
<li>修复角色移到桌面左边缘图像消失的问题</li>
</ul>
<h3 id="_2023-05-31" tabindex="-1"><a class="header-anchor" href="#_2023-05-31"><span>2023-05-31</span></a></h3>
<ul>
<li>微调UI</li>
<li>系统托盘中的设置选项现在不需要退出才保存</li>
<li>近期停更</li>
</ul>
<h3 id="_2023-4-30" tabindex="-1"><a class="header-anchor" href="#_2023-4-30"><span>2023-4-30</span></a></h3>
<ul>
<li>
<p>增加模型设置</p>
<ul>
<li>增加角色X，Y坐标设置
<ul>
<li>参数范围：-1.00~1.00 (精度最高2位小数)</li>
<li>坐标(0, 0)为窗口中心坐标，即对应屏幕坐标(windowWidth/2, windowHeight/2)</li>
</ul>
</li>
<li>对于<a href="https://github.com/Arkueid/Live2DMascot/issues/14" target="_blank" rel="noopener noreferrer">#14<ExternalLinkIcon/></a>中提及的类似模型，可以通过调整窗口大小和角色X、Y来达到最佳显示位置</li>
</ul>
</li>
<li>
<p>已知问题：</p>
<ol>
<li><a href="https://github.com/Arkueid/Live2DMascot/issues/12" target="_blank" rel="noopener noreferrer">#12<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/Arkueid/Live2DMascot/issues/14" target="_blank" rel="noopener noreferrer">#14<ExternalLinkIcon/></a>的截图中出现了类似<a href="https://github.com/Arkueid/Live2DMascot/issues/12" target="_blank" rel="noopener noreferrer">#12<ExternalLinkIcon/></a>的问题，同时角色嘴唇附近出现黑边，详细参考下方链接：
<ul>
<li>https://docs.live2d.com/zh-CHS/cubism-sdk-manual/texture-trouble-shooting/</li>
<li>https://tieba.baidu.com/p/6029180797</li>
</ul>
</li>
</ol>
<ul>
<li>问题解释
<ul>
<li>问题1、2可能是同一原因导致</li>
<li>由于在Live2D Viewer中测试可以正常显示，因此不太可能是设备适配问题，可能与纹理图片的正片叠底有关？</li>
</ul>
</li>
<li>问题解决
<ul>
<li>目前只有问题2得到解决，问题1由于在我的设备上没遇到过不能确定是否解决，如果问题2和问题1是同一原因导致那么本次更新将解决<a href="https://github.com/Arkueid/Live2DMascot/issues/12" target="_blank" rel="noopener noreferrer">#12<ExternalLinkIcon/></a></li>
<li>运行效果</li>
<li><img src="/sample_images/Snipaste_2023-04-30_14-29-43.png" alt="运行效果"></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_2023-4-28" tabindex="-1"><a class="header-anchor" href="#_2023-4-28"><span>2023-4-28</span></a></h3>
<h4 id="develop分支" tabindex="-1"><a class="header-anchor" href="#develop分支"><span>develop分支</span></a></h4>
<ul>
<li>修改项目生成中间文件路径，现在更换Console和Window配置不需要全部重新编译</li>
<li>修改静态库生成目录，现在生成的所有静态库在对应项目（x64或x86）的lib文件夹下</li>
<li>同一个Demo项目共用Framework，glew，glfw的中间生成目录</li>
</ul>
<h4 id="master分支" tabindex="-1"><a class="header-anchor" href="#master分支"><span>master分支</span></a></h4>
<ul>
<li>修改鼠标追踪，应该所有改动中是效果最好的</li>
</ul>
<h3 id="_2023-4-26" tabindex="-1"><a class="header-anchor" href="#_2023-4-26"><span>2023-4-26</span></a></h3>
<ul>
<li>添加分支develop，用于保存工程项目</li>
</ul>
<h3 id="_2023-4-4" tabindex="-1"><a class="header-anchor" href="#_2023-4-4"><span>2023-4-4</span></a></h3>
<p>Fix:</p>
<ul>
<li>修复<a href="https://github.com/Arkueid/Live2DMascot/issues/11" target="_blank" rel="noopener noreferrer">#11<ExternalLinkIcon/></a></li>
<li>角色在屏幕边缘鼠标追踪不正常</li>
</ul>
<h3 id="_2023-4-2" tabindex="-1"><a class="header-anchor" href="#_2023-4-2"><span>2023-4-2</span></a></h3>
<ul>
<li>修改鼠标追踪的坐标计算，使角色视线在对角线附近变化平缓</li>
<li>修复聊天时角色对话框一段时间后不消失的的问题</li>
</ul>
<h3 id="_2023-4-1" tabindex="-1"><a class="header-anchor" href="#_2023-4-1"><span>2023-4-1</span></a></h3>
<ul>
<li>
<p>语音输入</p>
<ul>
<li>
<p>频繁点击录音按钮现在不会造成崩溃</p>
</li>
<li>
<p>添加自定义语音聊天接口，详细见test-server的<a href="test-server/server.py">模板</a></p>
</li>
<li>
<p>录音文件是.wav格式，采样率16000，单声道，其他参数需要自行测试</p>
</li>
</ul>
</li>
<li>
<p>聊天记录</p>
<ul>
<li>
<p>添加聊天记录窗口，支持语音播放，仅显示本次运行的所有聊天，下次启动会清空</p>
<p><img src="/sample_images/Snipaste_2023-04-01_20-27-55.png" alt="聊天记录窗口"></p>
<p><img src="/sample_images/Snipaste_2023-04-01_20-56-24.png" alt="测试结果"></p>
</li>
<li>
<p>聊天记录窗口和输入窗口可以拖住边缘移动，聊天记录窗口支持屏幕侧边隐藏</p>
</li>
<li>
<p>本地聊天记录改为html格式，记录时间，角色名，聊天内容，语音路径（可播放），浏览器打开如下：</p>
<p><img src="/sample_images/Snipaste_2023-04-01_20-48-56.png" alt="Html聊天记录"></p>
</li>
</ul>
</li>
<li>
<p>关于自定义</p>
<ul>
<li>
<p>聊天输入面板的三个图标是可以更换的，在Resources文件夹下把自己的图标改成对应名称即可</p>
</li>
<li>
<p>有一部分样式在config.json中可以自定义</p>
</li>
</ul>
</li>
</ul>
<h3 id="_2023-3-26" tabindex="-1"><a class="header-anchor" href="#_2023-3-26"><span>2023-3-26</span></a></h3>
<ul>
<li>语音输入
<ul>
<li>
<p>录音和绘图放在不同线程，不会造成卡顿</p>
</li>
<li>
<p>不要在短时间内多次点击录音按钮</p>
</li>
<li>
<p>长按<strong>语音输入按钮</strong>或者激活输入窗口后按<strong>alt键</strong>进行录音</p>
</li>
<li>
<p>目前使用百度语音识别 <a href="https://ai.baidu.com/ai-doc/SPEECH/Vk38lxily#raw-%E6%96%B9%E5%BC%8F%E4%B8%8A%E4%BC%A0%E9%9F%B3%E9%A2%91" target="_blank" rel="noopener noreferrer">api<ExternalLinkIcon/></a>，client_id 和 client_secret 可以在 config.json 中更换</p>
<p><img src="/sample_images/Snipaste_2023-03-26_11-11-53.png" alt="语音输入"></p>
</li>
</ul>
</li>
</ul>
<h3 id="_2023-3-25" tabindex="-1"><a class="header-anchor" href="#_2023-3-25"><span>2023-3-25</span></a></h3>
<ul>
<li>语音输入
<ul>
<li>目前使用百度语音识别 <a href="https://ai.baidu.com/ai-doc/SPEECH/Vk38lxily#raw-%E6%96%B9%E5%BC%8F%E4%B8%8A%E4%BC%A0%E9%9F%B3%E9%A2%91" target="_blank" rel="noopener noreferrer">api<ExternalLinkIcon/></a>，client_id 和 client_secret 可以在 config.json 中更换</li>
<li>长按<strong>语音输入按钮</strong>或者激活输入窗口后按<strong>alt键</strong>进行录音</li>
<li>后续会添加自定义 POST 录音数据到自建服务端</li>
<li>开始录音时界面会卡顿，卡顿时间看设备性能，原因是启动录音的函数和图形界面放在了一个线程里。不另开线程的原因是使用QAudioInput录音时，创建的实例不在主线程，输出的音频文件为空，暂时没有找到解决的方法，后续会考虑其他录音接口。</li>
</ul>
</li>
</ul>
<h3 id="_2023-3-21" tabindex="-1"><a class="header-anchor" href="#_2023-3-21"><span>2023-3-21</span></a></h3>
<ul>
<li>
<p>输入框调整</p>
<p><img src="/sample_images/chat.png" alt="聊天"></p>
</li>
</ul>
<h3 id="_2023-3-16" tabindex="-1"><a class="header-anchor" href="#_2023-3-16"><span>2023-3-16</span></a></h3>
<ul>
<li>
<p>聊天输入窗口可右键按住边缘拖动；窗口添加发送和关闭按钮，点击发送不会自动关闭窗口；config.json中可修改部分样式属性</p>
<p><img src="/sample_images/Snipaste_2023-03-16_21-54-33.png" alt="预览"></p>
</li>
<li>
<p>文本框自动换行优化，句末标点不会出现在行首</p>
</li>
<li>
<p>已知问题：<br>
频繁启动和退出可能弹出资源路径不正确的提示，该问题与&lt;io.h&gt;的_access函数有关，具体原因暂时不清楚</p>
</li>
</ul>
<h3 id="_2023-3-15" tabindex="-1"><a class="header-anchor" href="#_2023-3-15"><span>2023-3-15</span></a></h3>
<ul>
<li>音量控制
<ul>
<li>
<p>使用 waveOutSetVolume api 控制输出音量</p>
</li>
<li>
<p>开启后会检测模型的动作文件参数是否正确，如果不正确会对参数进行修正并保存。此功能用于应对<a href="https://github.com/Arkueid/Live2DMascot/issues/5" target="_blank" rel="noopener noreferrer">#5<ExternalLinkIcon/></a>。开启后可能增加模型加载时间，修复模式下加载的模型，第二次加载可以不需要开启修复模式。</p>
</li>
</ul>
</li>
</ul>
<h3 id="先前更新" tabindex="-1"><a class="header-anchor" href="#先前更新"><span>先前更新</span></a></h3>
<ul>
<li>修复
<ul>
<li>
<p>Win64下设置页面打开导致程序崩溃</p>
</li>
<li>
<p>程序启动失败的问题</p>
<p><strong>可能原因1</strong></p>
<p>启动时获取当前系统用户名的代码运行错误，现已删除获取当前系统用户名，默认用户名固定为UserXXXX。</p>
<p><img src="/sample_images/error_fixed.png" alt="错误代码1"></p>
<p><strong>已确认原因2</strong></p>
<p>Dialog初始化时未给_fontMetrics变量赋值，程序启动时分配的初始值不为NULL，在LoadConfig函数中导致用delete释放了一个未被分配的内存。<del>哼哼哼啊啊啊(#&gt;д&lt;)ﾉ</del></p>
<p><img src="/sample_images/bug_fixed.png" alt="错误代码2"></p>
</li>
<li>
<p>番剧列表初次加载频闪问题（第二次修复）</p>
</li>
<li>
<p>网络请求模块无网络时导致程序崩溃 (第二次修复)</p>
</li>
</ul>
</li>
</ul>
</div></template>


