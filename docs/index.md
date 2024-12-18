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

| `live2d-py` | 支持的live2d模型        | 实现                | 支持的Python版本                           | 支持平台                     |
|-------------|--------------------|-------------------|---------------------------------------|--------------------------|
| `live2d.v2` | Cubism 2.1 以及更早的版本 | 纯 Python 实现       | 支持 `32` / `64` 位，支持`Python 3.0` 及以上版本 | Winodws、Linux、MacOS（理论上） |                                                       |
| `live2d.v3` | Cubism 3.0 及以上版本   | Python C API 封装 | 支持 `32` / `64` 位，支持`Python 3.0` 及以上版本 | Windows、Linux            |

注：

* `live2d.v2` 由 Cubism Web SDK 转写为纯 Python，尚未使用 numpy 等优化的库，性能有待提升。对 live2d 实现原理感兴趣的同学可以查看 `live2d.v2` 的源码（比较乱）
* Cubism 2.X 导出的模型：文件名格式常为 `XXX.moc`，`XXX.model.json`，`XXX.mtn`
* Cubism 3.0 及以上导出的模型：文件名格式常为 `XXX.moc3`，`XXX.model3.json`, `XXX.motion3.json`