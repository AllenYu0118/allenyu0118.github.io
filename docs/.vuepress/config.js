module.exports = {
    title: '余小磊的博客',
    description: '前端工程师，技术爱好者，记录自己的学习内容以及技术思考',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'TypeScript', link: '/ts/' },
            { text: 'CSS3', link: '/css3/' }
        ],
        sidebar: {
            '/ts/': [
                {
                    title: '首页',
                    collapsable: false,
                    path: '/ts/',
                    children: [
                        { title: '基础类型', path: 'base' },
                        { title: '变量声明', path: 'variable-declarations' }
                    ]
                }
            ]
        }
    }
}