<template><div><h1 id="live2d-desktop-mascot" tabindex="-1"><a class="header-anchor" href="#live2d-desktop-mascot"><span>Live2D Desktop Mascot</span></a></h1>
<p>源码和项目文件移步<a href="https://github.com/Arkueid/Live2DMascot/tree/develop" target="_blank" rel="noopener noreferrer"> develop 分支<ExternalLinkIcon/></a></p>
<h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览"><span>预览</span></a></h2>
<p><img src="/sample_images/preview1.png" alt="预览1"></p>
<p><img src="/sample_images/preview2.png" alt="预览2"></p>
<p><img src="/sample_images/preview3.png" alt="预览3"></p>
<p><img src="/sample_images/plugin-demo2.png" alt="预览3"></p>
<h2 id="更新内容" tabindex="-1"><a class="header-anchor" href="#更新内容"><span><RouteLink to="/CHANGELOG.html">更新内容</RouteLink></span></a></h2>
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
<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h2>
<ul>
<li>
<h3 id="自定义聊天服务器接口-可在设置页面更改" tabindex="-1"><a class="header-anchor" href="#自定义聊天服务器接口-可在设置页面更改"><span>自定义聊天服务器接口（可在设置页面更改）</span></a></h3>
<p>参考：<a href="dev-server/dev-server.py">自定义聊天服务器模板</a></p>
<p>动作组 <strong>Chat</strong>，调用茉莉云或者自定义聊天接口时触发的动作。</p>
<p>每次聊天都会在本地产生文本文件和音频缓存，注意及时清理。</p>
</li>
<li>
<h3 id="自定义动作组与点击触发位置" tabindex="-1"><a class="header-anchor" href="#自定义动作组与点击触发位置"><span>自定义动作组与点击触发位置</span></a></h3>
<p>参考：https://github.com/murcherful/Live2D_Displyer</p>
</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ul>
<li>
<p>模型文件夹即Resources文件夹，其位置可更改，但至少有一个模型</p>
</li>
<li>
<p>音频和动作文件列表应放在对应模型的sounds和motions文件夹内，不能为其他位置</p>
</li>
<li>
<p>音频文件只支持.wav格式，口型同步只支持单声道的.wav格式</p>
</li>
<li>
<p>程序错误无法启动时可删去config.json文件以初始化</p>
</li>
<li>
<p>LPK模型需要解压为包含*.moc3, *.model3.json和纹理图片的文件夹形式</p>
</li>
</ul>
<h3 id="已知问题" tabindex="-1"><a class="header-anchor" href="#已知问题"><span>已知问题</span></a></h3>
<ul>
<li>
<p>适用 Unity 的 Live2D 模型可以加载但可能出现图层错误（穿模？）</p>
</li>
<li>
<p>Cubism 2.0 及以前版本的模型（.moc，.mnt）无法加载</p>
</li>
<li>
<p>背景透明问题<a href="https://github.com/Arkueid/DesktopLive2D/issues/12" target="_blank" rel="noopener noreferrer">#12<ExternalLinkIcon/></a></p>
<p>目前成功解决的一个例子如下：</p>
<p>在旧电脑上使用官方镜像安装 Windows 10 家庭版，未升级显卡驱动前，启动程序出现纯黑背景，更换模型出现#12的问题。升级显卡驱动后，使用 <strong>集成显卡</strong> 运行程序，无论是启动还是更换模型，#12的问题没有出现。使用 <strong>独立显卡</strong> 运行程序，启动时没有出现背景透明问题，但是更换模型后仍然出现背景透明问题。</p>
<p>背景透明问题可能和显卡驱动版本、显卡类型（核显、独显）有关。</p>
</li>
<li>
<p>百度语音识别返回 request pv too much<br>
暂时解决方法：使用自定义聊天服务器</p>
</li>
</ul>
<h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境"><span>开发环境</span></a></h2>
<ul>
<li>
<p>Visual Studio 2022</p>
</li>
<li>
<p><a href="https://www.live2d.com/download/cubism-sdk/" target="_blank" rel="noopener noreferrer">Cubism Live2D SDK for Native<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.qt.io/download-qt-installer?hsCtaTracking=99d9dd4f-5681-48d2-b096-470725510d34%7C074ddad0-fdef-4e53-8aa8-5e8a876d6ab4" target="_blank" rel="noopener noreferrer">Qt5<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/open-source-parsers/jsoncpp" target="_blank" rel="noopener noreferrer">jsoncpp<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/yhirose/cpp-httplib" target="_blank" rel="noopener noreferrer">cpp-httplib<ExternalLinkIcon/></a> + <a href="https://slproweb.com/products/Win32OpenSSL.html" target="_blank" rel="noopener noreferrer">openssl<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/laserpants/qt-material-widgets" target="_blank" rel="noopener noreferrer">qt-material-widgets<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/SimonBuxx/piemenu-qt" target="_blank" rel="noopener noreferrer">piemenu-qt<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.sqlite.org/download.html" target="_blank" rel="noopener noreferrer">sqlite<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Hiyori，nn 的语音借助 <a href="https://github.com/chinoll/ACGTTS" target="_blank" rel="noopener noreferrer">ACGTTS<ExternalLinkIcon/></a> 生成</p>
</li>
<li>
<p>Live2D 模型来源:</p>
<ul>
<li>xuefeng_3 -&gt; 碧蓝航线</li>
<li>Hiyori，Mao -&gt; Cubism 官方</li>
<li>波奇酱2.0 -&gt; <a href="https://www.bilibili.com/video/BV1PY411k7Kj" target="_blank" rel="noopener noreferrer">再看一眼就会爆炸！波奇酱免费模型2.0<ExternalLinkIcon/></a></li>
<li>nn -&gt; <a href="https://www.bilibili.com/video/BV1s7411d7y9" target="_blank" rel="noopener noreferrer">【虚拟主播模型】 宁宁vup化！<ExternalLinkIcon/></a></li>
<li>爱 -&gt; <a href="https://www.bilibili.com/video/BV1g24y1F73e" target="_blank" rel="noopener noreferrer">传说级爱抖露点击就送【星野爱免费l2d】<ExternalLinkIcon/></a></li>
<li>星野爱，Hoshino_Ai -&gt; <a href="https://www.bilibili.com/video/BV1Us4y1c7P4" target="_blank" rel="noopener noreferrer">【星野爱免费live2d模型】重生之我在B站做虚拟爱抖露！星野爱永存！爱门！<ExternalLinkIcon/></a></li>
<li>LSS -&gt; <a href="https://www.bilibili.com/video/BV1KU4y1x7ep" target="_blank" rel="noopener noreferrer">魔女之旅伊蕾娜：番剧画风live2d 活的！<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>以Cubism官方Native SDK为模板，结合以下两篇文章进行的修改：<br>
https://zhuanlan.zhihu.com/p/126276925<br>
https://zhuanlan.zhihu.com/p/511077879</p>
</li>
</ul>
</div></template>


