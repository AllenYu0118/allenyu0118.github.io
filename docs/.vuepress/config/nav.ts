export const nav = [
  { text: 'Home', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [{ text: 'JavaScript', link: '/pages/8143cc480faf9a11/' }],
      },
      {
        text: '学习笔记',
        items: [{ text: '《TypeScript入门教程》', link: '/note/ts/' }],
      },
    ],
  },
  // {
  //   text: '分类',
  //   items: [
  //     { text: 'JavaScript', link: '/js/intersection-observer' },
  //     { text: 'Vue 3.0', link: '/vue3/' },
  //     { text: 'Nodejs', link: '/nodejs/' },
  //     { text: 'Other', link: '/other/browser-cache' },
  //   ],
  // },

  { text: 'TypeScript', link: '/ts/' },
]
