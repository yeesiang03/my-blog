import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: '宇翔Blog',
  description: 'This is 宇翔Blog',
  base:'/my-blog/',
  theme: defaultTheme({
    // Use "navbar" instead of "nav"
    navbar: [
      { text: '首页', link: '/' },
      { 
        text: '宇翔的博客', 
        children: [
          { text: 'Github', link: 'https://github.com/MSiang03' },
          { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],

    // Sidebar configuration
    sidebar: [
      "",
      {
        text: "Blog",
        prefix: "/blog/",
        children: [
          "article1",
          "article2"
        ]
      },
      {
        text: "微积分",
        prefix: "/study/Calculas/",
        children: [
          "1_集合与函数",
          "2_极限",
          "3_导数",
          "4_微分",
          "5_不定积分",
          "6_定积分",
          "7_多元函数微分",
          "8_二重积分",
          "9_微分方程",
          "10_无穷级数"
        ]
      }
    ]
      
  }),
  bundler: viteBundler(),
})
