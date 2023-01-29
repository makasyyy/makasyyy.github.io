module.exports = {
    title: '前端手册',
    description: '前端路上的小蘑菇一只鸭！',
    author:'makasyyy',
    base: '/',
    lang: 'zh-CN',
    markdown: {
        lineNumbers:true,
    }, 
    lastUpdated:true,
    head: [
        [
            'link',
            {
                rel: 'icon',
                href:'/img/linktolink.png'
            }
        ]
    ],
    //主题配置
    themeConfig: {
        repo: 'vuejs/vitepress',
        author:'makasyyy',
        lastUpdatedText: '上次更新时间：',
        docFooter: {
            prev: '上一篇',
            next:'下一篇'
        },
        // 头部导航
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端小记', link:'/read/'
            },
        ],
        // 侧边导航
        sidebar: [
            {text:'我的',link:'/mine/'}
        ]
    }
}