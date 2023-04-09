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
        // config: (md) => {
        //     const { demoBlockPlugin } = require('vitepress-theme-demoblock')
        //     md.use(demoBlockPlugin)
        // }
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
        smoothScroll:true,
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
        sidebar: {
            '/other/resource/':getSideBar()
        }
    }
}

function getSideBar() {
    return [{
        text: '基础三剑客',
        link:'/other/resource/total'
    },
    {
        text: 'netwotk',
        link:'/other/resource/netWork'
        },
        {
            text: 'netwotk_带answer',
            link:'/other/resource/netWork_all'
        },
    {
        text: '浏览器',
        link:'/other/resource/browser'
        },
        {
            text: '浏览器_带answer',
            link:'/other/resource/browser_all'
        },
    {
        text: '代码输出',
        link:'/other/resource/codeInput'
    },
    {
        text: '总结一',
        link:'/other/resource/interview_1'
    },
    {
        text: '总结二',
        link:'/other/resource/interview_2'
    },
    {
        text: '总结三',
        link:'/other/resource/interview_3'
    },
    {
        text: '总结四',
        link:'/other/resource/interview_4'
    }
    ]
}