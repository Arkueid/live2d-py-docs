# 使用说明
Cubism 2.0 模型使用接口见 [package/live2d/v2/live2d.pyi](https://github.com/Arkueid/live2d-py/tree/v2/package/live2d/v2/live2d.pyi)。

Cubism 3.0（含4.0） 模型使用接口见 [package/live2d/v3/live2d.pyi](https://github.com/Arkueid/live2d-py/tree/main/package/live2d/v3/live2d.pyi)。

具体与图形库结合的用例示例见 [package](https://github.com/Arkueid/live2d-py/tree/main/package/) 文件夹。

## 文件说明

```
live2d-py
|-- CMakeLists.txt # CMake 配置文件，用于生成 live2d-py 
|-- Core # Cubism Live2D Core 头文件和库文件，详情见 Cubism 官方
|-- Framework # Cubism 开发框架
|-- LAppModelWrapper.cpp # live2d native 的 python 封装
|-- Main  # live2d native 类
|-- README.md
|-- Resources # 资源文件夹，live2d 模型，应用图标
|-- docs
|-- glew     # opengl 接口依赖
|-- include  # 项目包含目录
`-- package  # 生成的 live2d-py 包，可用 setup.py 打包和安装
```

文件：
* `live2d.so` 和 `live2d.pyd`：封装了 c++ 类的动态库，供 python 调用。在 `import live2d.vX as live2d` 时，解释器在文件目录中寻找 `live2d.so`/`live2d.pyd` 并载入内存。其中 `live2d.pyd` 在 windows 下使用，`live2d.so` 在 linux 下使用。
* `live2d.pyi`：python 接口提示文件，仅用于在 IDE 编写时产生代码提示和补全信息。