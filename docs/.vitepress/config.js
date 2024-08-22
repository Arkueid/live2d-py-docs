export default {
  title: 'live2d-py',
  description: 'live2d-py文档',
  themeConfig: {
    nav: [
      // { text: 'Guide', link: '/guide' },
    ],
    sidebar: [
      {
        text: '使用说明',
        collapsed: false,
        link: '使用说明/index',
        items: [
          { text: '安装', link: '/使用说明/安装' },
          { text: '模型加载与绘制', link: '/使用说明/模型加载与绘制'},
          { text: '口型同步', link: '/使用说明/口型同步'},
          { text: '简易面捕', link: '/使用说明/简易面捕'},
        ]
      },
      {
        text: '更新内容',
        link: '/更新内容/index'
      }
    ]
  },
  base: "/live2d-py-docs/"
}