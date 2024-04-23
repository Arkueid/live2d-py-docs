export default {
  title: 'DeskPal',
  description: 'DeskPal 说明文档',
  themeConfig: {
    nav: [
      // { text: 'Guide', link: '/guide' },
    ],
    sidebar: [
      {
        text: '开发文档',
        collapsed: false,
        items: [
          {
            text: '需求分析',
            collapsed: false,
            items: [
              { text: '引言', link: '/开发文档/需求分析/引言' },
              { text: '总览', link: '/开发文档/需求分析/总览' },
              { text: '功能', link: '/开发文档/需求分析/功能' },
              { text: '外部接口', link: '/开发文档/需求分析/外部接口' },
              { text: '非功能性需求', link: '/开发文档/需求分析/非功能性需求' },
              { text: '其他', link: '/开发文档/需求分析/其他需求' },
              { text: '附录', link: '/开发文档/需求分析/附录' },
            ]
          },
        ]
      },
      {
        text: '使用说明',
        collapsed: false,
        items: [
          { text: '介绍', link: '/使用说明/index' },
        ]
      }
    ]
  },
  base: "/Live2DMascot-Docs/"
}