module.exports = {
    title: "余小磊的博客",
    description: "前端工程师，技术爱好者，记录自己的学习内容以及技术思考",

    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "TypeScript", link: "/ts/" },
            { text: "CSS3", link: "/css3/" },
        ],
        sidebar: {
            "/ts/": [
                {
                    title: "简介",
                    collapsable: false,
                    path: "/ts/",
                },
                {
                    title: "基础",
                    collapsable: false,
                    children: [
                        { title: "基础类型", path: "basic-types" },
                        { title: "变量声明", path: "variable-declarations" },
                    ],
                },
            ],
        },
    },
};
