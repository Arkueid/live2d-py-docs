import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.BayvGiKz.js";const g=JSON.parse('{"title":"口型同步","description":"","frontmatter":{},"headers":[],"relativePath":"使用说明/口型同步.md","filePath":"使用说明/口型同步.md"}'),p={name:"使用说明/口型同步.md"},e=n(`<h1 id="口型同步" tabindex="-1">口型同步 <a class="header-anchor" href="#口型同步" aria-label="Permalink to &quot;口型同步&quot;">​</a></h1><p>读取 wav 文件响度的工具：<a href="https://github.com/Arkueid/live2d-py/tree/main/package/live2d/utils/lipsync.py" target="_blank" rel="noreferrer">live2d.utils.lipsync.WavHandler</a></p><p>示例代码：<a href="https://github.com/Arkueid/live2d-py/tree/main/package/main_pygame.py" target="_blank" rel="noreferrer">main_pygame.py</a></p><p>用法：</p><p>创建 <code>wavHandler</code> 对象并设置口型同步幅度 <code>lipSyncN</code></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> live2d.lipsync </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WavHandler</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wavHandler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WavHandler()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lipSyncN </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span></code></pre></div><p>在播放动作的同时，播放音频并进行口型同步</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> start_callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(group, no):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 播放音频</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pygame.mixer.music.load(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;audio1.wav&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pygame.mixer.music.play()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 处理口型同步</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    wavHandler.Start(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;audio1.wav&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model.StartMotion(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Speak&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, live2d.MotionPriority.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FORCE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.value, start_callback)</span></span></code></pre></div><p>将 wav 响度同步到 <code>ParamMouthOpenY</code> 上</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">live2d.clearBuffer()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model.Update()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 Update 之后，Draw 之前调用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wavHandler.Update():  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取 wav 下一帧片段的响度（Rms），并返回当前音频是否已结束</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    model.AddParameterValue(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ParamMouthOpenY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, wavHandler.GetRms() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lipSyncN)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model.Draw()</span></span></code></pre></div>`,10),l=[e];function t(h,k,r,d,E,o){return i(),a("div",null,l)}const y=s(p,[["render",t]]);export{g as __pageData,y as default};
