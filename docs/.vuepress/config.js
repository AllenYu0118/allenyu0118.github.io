module.exports = {
    title: 'Allen Yu',
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
                    title: '简介',
                    collapsable: false,
                    path: '/ts/'
                },
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        { title: '原始数据类型', path: 'primitive-data-types' },
                        { title: '任意值', path: 'any' },
                        { title: '类型推论', path: 'type-inference' }
                    ]
                }
            ]
        },
        lastUpdated: 'Last Updated'
    }
}
