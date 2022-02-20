module.exports = {
    title: 'Allen Yu',
    description: '前端工程师，技术爱好者，记录自己的学习内容以及技术思考',
    head: [['link', { rel: 'icon', href: '/icon.png' }]],
    themeConfig: {
        logo: '/icon.png',
        sidebarDepth: 2,
        nav: [
            { text: 'Home', link: '/' },
            {
                text: '分类',
                items: [
                    { text: 'JavaScript', link: '/js/intersection-observer' },
                    { text: 'Vue 3.0', link: '/vue3/' },
                    { text: 'Nodejs', link: '/nodejs/' },
                    { text: 'Other', link: '/other/browser-cache' },
                ]
            },
            
            { text: 'TypeScript', link: '/ts/' }
        ],
        sidebar: {
            '/js/': [
                {
                    title: 'API',
                    collapsable: false,
                    // path: '/js/',
                    children: [
                        { title: '交叉观察器', path: 'intersection-observer' }
                    ]
                }
            ],
            '/vue3/': [
                {
                    title: '简介',
                    collapsable: false,
                    path: '/vue3/'
                },
                {
                    title: 'API',
                    collapsable: false,
                    path: 'api'
                },
            ],
            '/nodejs/': [
                {
                    title: 'Web  框架',
                    collapsable: true,
                    children: [
                        { title: 'Koa2', path: 'koa2' }
                    ]
                },
                {
                    title: '工具库',
                    collapsable: false,
                    children: [
                        { title: 'Puppeteer', path: 'puppeteer' },
                        { title: 'Log4js', path: 'log4js' }
                    ]
                },
            ],
            '/other/': [
                {
                    title: '其他',
                    collapsable: false,
                    // path: '/js/',
                    children: [
                        { title: '浏览器缓存机制', path: 'browser-cache' },
                        { title: '发布订阅模式', path: 'publish-subscribe' },
                    ]
                }
            ],
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
                        { title: '声明文件', path: 'declaration-files' },
                        { title: '内置对象', path: 'build-in-objects' }
                    ]
                },
                {
                    title: '进阶',
                    children: [
                        { title: '类型别名', path: 'types-alias' },
                        { title: '字符串字面量类型', path: 'string-literal-types' },
                        { title: '元组', path: 'tuple' },
                        { title: '枚举', path: 'enum' },
                        { title: '类', path: 'class' },
                        { title: '类与接口', path: 'class-and-interface' },
                        { title: '泛型', path: 'generics' },
                        { title: '声明合并', path: 'declaration-merging' },
                        { title: '编译配置', path: 'tsconfig' },
                    ]
                },
                {
                    title: '实战',
                    children: [
                        { title: '房贷试算器', path: 'mortgage-calculator' },
                    ]
                }
            ],
        },
        repo: 'yuxiaolei1989/yuxiaolei1989.github.io',
        repoLabel: 'GitHub',
        docsBranch: 'master',
        lastUpdated: 'Last Updated'
    },

    plugins: [['vuepress-plugin-google-tag-manager', { gtm: 'GTM-MRK7Q86' }]],

    markdown: {
        // 提取 h2 和 h3 的标题
        extractHeaders: ['h2', 'h3']
    },

    evergreen: true
}
