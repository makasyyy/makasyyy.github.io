module.exports = {
    title: '前端手册',
    description: '前端路上的小蘑菇一只鸭！',
    author:'makasyyy',
    base: '/',
    lang: 'zh-CN',
    markdown: {
        lineNumbers: true, //显示行号
        // anchor: { premalink: false },
        // toc: { includeLevel: [1, 2] },
        config: (md) => {
            const { demoBlockPlugin } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }, 
    lastUpdated:true,
    head: [
        [
            'link',
            {
                rel: 'icon',
                href:'/img/logo.png'
            }
        ]
    ],
    //主题配置
    themeConfig: {
        repo: 'https://github.com/makasyyy',
        author:'makasyyy',
        lastUpdatedText: '上次更新时间：',
        docFooter: {
            prev: '上一篇',
            next:'下一篇'
        },
        // 头部导航
        nav: [
            { text: '首页', link: '/' },
            {text: '前端小记', link:'/read/'},
            {
                text: 'self', items: [
                    { text: '年度总结&计划', link: '/other/year/' },
                    { text:'resource 汇总', link: '/other/resource/'}
                ]
            },
        ],
        // 侧边导航
        sidebar: [
            {text:'我的',link:'/mine/'}
        ]
    }
}

function getSideBar() {
    return [{

    }]
}