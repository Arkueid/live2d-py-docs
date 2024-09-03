---
layout: home

hero:
  name: live2d-py
  tagline: Live2D Library for Python
  actions:
    - theme: brand
      text: 快速开始
      link: /使用说明/index
    - theme: alt
      text: Github
      link: https://github.com/Arkueid/live2d-py
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