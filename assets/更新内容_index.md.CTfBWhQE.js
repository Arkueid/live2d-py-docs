import{_ as a,c as s,o as i,a2 as n}from"./chunks/framework.BayvGiKz.js";const g=JSON.parse('{"title":"更新内容","description":"","frontmatter":{},"headers":[],"relativePath":"更新内容/index.md","filePath":"更新内容/index.md"}'),e={name:"更新内容/index.md"},p=n(`<h1 id="更新内容" tabindex="-1">更新内容 <a class="header-anchor" href="#更新内容" aria-label="Permalink to &quot;更新内容&quot;">​</a></h1><h2 id="_2024-8-22" tabindex="-1">2024/8/22 <a class="header-anchor" href="#_2024-8-22" aria-label="Permalink to &quot;2024/8/22&quot;">​</a></h2><p>添加：</p><ol><li><p>中文路径支持</p></li><li><p>获取模型内置参数数量、参数对象：<code>LAppModel.GetParameterCount</code>，<code>LAppModel.GetParameter</code></p></li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> live2d.v3.params </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Parameter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取所有可用参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model.GetParameterCount()):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    param: Parameter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> model.GetParameter(i)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(param.id, param.type, param.value, param.max, param.min, param.default)</span></span></code></pre></div><h2 id="_2024-8-19" tabindex="-1">2024/8/19 <a class="header-anchor" href="#_2024-8-19" aria-label="Permalink to &quot;2024/8/19&quot;">​</a></h2><p>添加:</p><ul><li>日志打印、口型同步工具（需要<code>numpy</code>）：<code>live2d.log</code>，<code>live2d.lipsync</code></li><li>修改接口：<code>CalcParameters</code> =&gt; <code>Update</code>，<code>Update</code> =&gt; <code>Draw</code></li><li>标准参数：<code>live2d.v3.params.StandardParams</code></li><li><code>pip</code> 安装支持</li></ul><p>移除：</p><ul><li>内置口型同步功能：<code>LAppModel.SetLipSyncEnable</code>，<code>LAppModel.SetLipSyncN</code></li></ul><p>其他：</p><ul><li>将v3版本的更新同步到v2上</li></ul><p>新包结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package\\live2d</span></span>
<span class="line"><span>|-- utils</span></span>
<span class="line"><span>|   |</span></span>
<span class="line"><span>|   |-- lipsync.py  # 口型同步工具</span></span>
<span class="line"><span>|   \`-- log.py      # 日志工具</span></span>
<span class="line"><span>\`-- v3</span></span>
<span class="line"><span>    |-- __init__.py</span></span>
<span class="line"><span>    |-- live2d.pyd  # 动态库/封装c++函数</span></span>
<span class="line"><span>    |-- live2d.pyi  # 接口&amp;文档</span></span>
<span class="line"><span>    \`-- params.py   # live2d 标准参数id</span></span></code></pre></div><p>绘制步骤的接口名更改如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">live2d.clearBuffer()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始化呼吸、动作、姿势、表情、各部分透明度等必要的参数值（如果对应的功能开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model.Update()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># CalcParameters() 更改为 Update()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在初始化的基础上修改参数（具体用法参考 live2d.pyi 文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 直接赋值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model.SetParameterValue(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ParamAngleX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在原值基础上添加</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model.AddParameterValue(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ParamAngleX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行绘制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model.Draw()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 原来的 Update() 更改为 Draw()</span></span></code></pre></div><h2 id="_2024-8-17" tabindex="-1">2024/8/17 <a class="header-anchor" href="#_2024-8-17" aria-label="Permalink to &quot;2024/8/17&quot;">​</a></h2><p>添加：</p><ul><li>口型同步、自动呼吸、自动眨眼开关</li><li>动作参数控制，<code>LAppModel.SetParameterValue</code>，<code>LAppModel.AddParameterValue</code></li><li>简易面部动捕示例</li></ul><p>修复：</p><ul><li>v3 版本播放动作时没有对应的动作文件导致崩溃</li></ul><p>可用参数见 Live2D 官方文档：<a href="https://docs.live2d.com/en/cubism-editor-manual/standard-parameter-list/" target="_blank" rel="noreferrer">https://docs.live2d.com/en/cubism-editor-manual/standard-parameter-list/</a></p>`,22),l=[p];function t(d,h,r,k,o,c){return i(),s("div",null,l)}const m=a(e,[["render",t]]);export{g as __pageData,m as default};
