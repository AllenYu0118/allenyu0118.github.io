module.exports = {
    theme: 'reco',
    title: 'Allen Yu',
    description: '前端工程师，技术爱好者，记录自己的学习内容以及技术思考',
    head: [['link', { rel: 'icon', href: '/icon.png' }]],
    themeConfig: {
        type: 'blog',
        sidebarDepth: 2,
        nav: [
            { text: '首页', link: '/' },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            { text: 'TypeScript', link: '/ts/' }
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
                        { title: '类型推论', path: 'type-inference' },
                        { title: '联合类型', path: 'union-types' },
                        { title: '接口', path: 'interfaces' },
                        { title: '数组类型', path: 'type-of-array' },
                        { title: '函数类型', path: 'type-of-function' },
                        { title: '类型断言', path: 'type-assertion' },
                        { title: '声明文件', path: 'declaration-files' }
                    ]
                }
            ]
        },
        repo: 'yuxiaolei1989/yuxiaolei1989.github.io',
        repoLabel: 'GitHub',
        docsBranch: 'master',
        lastUpdated: 'Last Updated',
        // 博客配置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            }
        }
    },

    plugins: [['vuepress-plugin-google-tag-manager', { gtm: 'GTM-MRK7Q86' }]],

    markdown: {
        extractHeaders: ['h2', 'h3']
    },

    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },

    evergreen: true
}
