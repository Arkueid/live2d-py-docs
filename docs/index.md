---
layout: home

hero:
  name: live2d-py
  text: Live2D for Python
  tagline: 使用 Python 将 live2d 绘制在基于 OpenGL 的窗口上
  actions:
    - theme: brand
      text: 快速开始
      link: /使用说明/index
    - theme: alt
      text: Github
      link: https://github.com/Arkueid/live2d-py

features:
  - icon: 
       src: /operations.png
    title: 基础 live2d 操作
    details: 加载模型，鼠标拖拽视线，鼠标点击触发动作，动作播放回调函数，口型同步，模型各部分参数控制。
  - icon:
      src: /window.png
    title: 兼容多种UI库
    details: PyQt / PySide / GLFW / FreeGlut / Qfluentwidgets...
  - icon:
      src: /cpp.png
    title: Live2D Native SDK
    details: 基于 Python C++ API 对 Live2D Native SDK (C++) 进行封装。
---

## 支持 Live2D 模型版本
* Cubism 2.X 导出的模型：文件名格式常为 `XXX.moc`，`XXX.model.json`，`XXX.mtn`
* Cubism 3.0 及以上导出的模型：文件名格式常为 `XXX.moc3`，`XXX.model3.json`, `XXX.motion3.json` 

## 平台支持
| `live2d-py` | 支持的live2d模型            | 支持的Python版本                                                    | 支持平台          |
|-------------|------------------------|----------------------------------------------------------------|---------------|
| `live2d.v2` | Cubism 2.0 及以上，不包括 3.0 | 仅 32 位，支持`Python 3.0` 及以上版本，但除 `Python 3.10.11` 外需要自行编译        | Windows       |
| `live2d.v3` | Cubism 3.0 及以上，包括 4.0  | 支持 `32` / `64` 位，支持`Python 3.0` 及以上版本，但除 `Python 3.12 64 bit` 外需要自行编译 | Windows、Linux |

注：对于 Cubism 2.0 模型，网络上能找到的现存 live2d opengl 静态库只有 32 位，因此只能使用 32 位 Python 解释器加载。