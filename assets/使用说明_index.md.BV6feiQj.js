import{_ as e,c as s,a0 as n,o as p}from"./chunks/framework.Dz_4l__G.js";const h=JSON.parse('{"title":"使用说明","description":"","frontmatter":{},"headers":[],"relativePath":"使用说明/index.md","filePath":"使用说明/index.md"}'),i={name:"使用说明/index.md"};function l(d,a,c,t,o,r){return p(),s("div",null,a[0]||(a[0]=[n(`<h1 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h1><p>Cubism 2.0 模型使用接口见 <a href="https://github.com/Arkueid/live2d-py/tree/v2/package/live2d/v2/live2d.pyi" target="_blank" rel="noreferrer">package/live2d/v2/live2d.pyi</a>。</p><p>Cubism 3.0（含4.0） 模型使用接口见 <a href="https://github.com/Arkueid/live2d-py/tree/main/package/live2d/v3/live2d.pyi" target="_blank" rel="noreferrer">package/live2d/v3/live2d.pyi</a>。</p><p>具体与图形库结合的用例示例见 <a href="https://github.com/Arkueid/live2d-py/tree/main/package/" target="_blank" rel="noreferrer">package</a> 文件夹。</p><h2 id="文件说明" tabindex="-1">文件说明 <a class="header-anchor" href="#文件说明" aria-label="Permalink to &quot;文件说明&quot;">​</a></h2><h3 id="live2d-py-库结构" tabindex="-1">live2d-py 库结构 <a class="header-anchor" href="#live2d-py-库结构" aria-label="Permalink to &quot;live2d-py 库结构&quot;">​</a></h3><p>将 <code>package/live2d</code> 文件夹放置在使用者 <code>main.py</code> 同目录下，在 <code>main.py</code> 中使用如 <code>import live2d.v3 as live2d</code>。若已通过 pip 安装可以直接导入。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package\\live2d</span></span>
<span class="line"><span>|-- utils</span></span>
<span class="line"><span>|   |</span></span>
<span class="line"><span>|   |-- lipsync.py  # 口型同步工具</span></span>
<span class="line"><span>|   \`-- log.py      # 日志工具</span></span>
<span class="line"><span>\`-- v3</span></span>
<span class="line"><span>    |-- __init__.py</span></span>
<span class="line"><span>    |-- live2d.pyd  # 动态库/封装c++函数</span></span>
<span class="line"><span>    |-- live2d.pyi  # 接口&amp;文档</span></span>
<span class="line"><span>    \`-- params.py   # live2d 标准参数</span></span></code></pre></div><p>注：</p><ul><li><code>live2d.so</code> 和 <code>live2d.pyd</code>：封装了 c++ 类的动态库，供 python 调用。在 <code>import live2d.vX as live2d</code> 时，解释器在文件目录中寻找 <code>live2d.so</code>/<code>live2d.pyd</code> 并载入内存。其中 <code>live2d.pyd</code> 在 windows 下使用，<code>live2d.so</code> 在 linux 下使用。</li><li><code>live2d.pyi</code>：python 接口提示文件，仅用于在 IDE 编写时产生代码提示和补全信息。</li></ul><h3 id="仓库源码结构" tabindex="-1">仓库源码结构 <a class="header-anchor" href="#仓库源码结构" aria-label="Permalink to &quot;仓库源码结构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>live2d-py</span></span>
<span class="line"><span>|-- CMakeLists.txt # CMake 配置文件，用于生成 live2d-py </span></span>
<span class="line"><span>|-- Core # Cubism Live2D Core 头文件和库文件，详情见 Cubism 官方</span></span>
<span class="line"><span>|-- Framework # Cubism 开发框架</span></span>
<span class="line"><span>|-- LAppModelWrapper.cpp # live2d native 的 python 封装</span></span>
<span class="line"><span>|-- Main  # live2d native 类</span></span>
<span class="line"><span>|-- README.md</span></span>
<span class="line"><span>|-- Resources # 资源文件夹，live2d 模型，应用图标</span></span>
<span class="line"><span>|-- docs</span></span>
<span class="line"><span>|-- glew     # opengl 接口依赖</span></span>
<span class="line"><span>|-- include  # 项目包含目录</span></span>
<span class="line"><span>\`-- package  # 生成的 live2d-py 包，可用 setup.py 打包和安装</span></span></code></pre></div>`,12)]))}const u=e(i,[["render",l]]);export{h as __pageData,u as default};
