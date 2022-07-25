export default {
    title: '小百科 (TinyPedia)',
    description: '专注于一个人（或一些人）的小百科',
    base: '/TinyPedia/',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        siteTitle: '小百科 (TinyPedia)',
        logo: 'https://raw.githubusercontent.com/vanhstp/TinyPedia/master/docs/.vitepress/public/TinyPedia2.png',
        footer: {
            copyright: 'TinyPedia by vanhstp ｜ Powered by VitePress'
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '坤坤小百科', link: 'https://vanhstp.github.io/KunPedia/' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vanhstp/TinyPedia' },
        ],
    },
}
