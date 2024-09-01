export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome to my blog"} }],
  ["/blog/article1.html", { loader: () => import(/* webpackChunkName: "blog_article1.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/blog/article1.html.js"), meta: {"title":"Welcome to BIT! 欢迎来到北理！！"} }],
  ["/blog/article2.html", { loader: () => import(/* webpackChunkName: "blog_article2.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/blog/article2.html.js"), meta: {"title":"Second"} }],
  ["/study/%E5%BE%AE%E7%A7%AF%E5%88%86.html", { loader: () => import(/* webpackChunkName: "study_微积分.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/微积分.html.js"), meta: {"title":""} }],
  ["/study/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0.html", { loader: () => import(/* webpackChunkName: "study_线性代数.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/线性代数.html.js"), meta: {"title":""} }],
  ["/study/Calculas/10_%E6%97%A0%E7%A9%B7%E7%BA%A7%E6%95%B0.html", { loader: () => import(/* webpackChunkName: "study_Calculas_10_无穷级数.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/10_无穷级数.html.js"), meta: {"title":"10 无穷级数"} }],
  ["/study/Calculas/1_%E9%9B%86%E5%90%88%E4%B8%8E%E5%87%BD%E6%95%B0.html", { loader: () => import(/* webpackChunkName: "study_Calculas_1_集合与函数.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/1_集合与函数.html.js"), meta: {"title":"1 微积分"} }],
  ["/study/Calculas/2_%E6%9E%81%E9%99%90.html", { loader: () => import(/* webpackChunkName: "study_Calculas_2_极限.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/2_极限.html.js"), meta: {"title":"2 极限"} }],
  ["/study/Calculas/3_%E5%AF%BC%E6%95%B0.html", { loader: () => import(/* webpackChunkName: "study_Calculas_3_导数.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/3_导数.html.js"), meta: {"title":"3 导数"} }],
  ["/study/Calculas/4_%E5%BE%AE%E5%88%86.html", { loader: () => import(/* webpackChunkName: "study_Calculas_4_微分.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/4_微分.html.js"), meta: {"title":"4 微分"} }],
  ["/study/Calculas/5_%E4%B8%8D%E5%AE%9A%E7%A7%AF%E5%88%86.html", { loader: () => import(/* webpackChunkName: "study_Calculas_5_不定积分.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/5_不定积分.html.js"), meta: {"title":"5 不定积分"} }],
  ["/study/Calculas/6_%E5%AE%9A%E7%A7%AF%E5%88%86.html", { loader: () => import(/* webpackChunkName: "study_Calculas_6_定积分.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/6_定积分.html.js"), meta: {"title":"6 定积分"} }],
  ["/study/Calculas/7_%E5%A4%9A%E5%85%83%E5%87%BD%E6%95%B0%E5%BE%AE%E5%88%86.html", { loader: () => import(/* webpackChunkName: "study_Calculas_7_多元函数微分.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/7_多元函数微分.html.js"), meta: {"title":"7 多元函数微分"} }],
  ["/study/Calculas/8_%E4%BA%8C%E9%87%8D%E7%A7%AF%E5%88%86.html", { loader: () => import(/* webpackChunkName: "study_Calculas_8_二重积分.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/8_二重积分.html.js"), meta: {"title":"8 二重积分"} }],
  ["/study/Calculas/9_%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B.html", { loader: () => import(/* webpackChunkName: "study_Calculas_9_微分方程.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/study/Calculas/9_微分方程.html.js"), meta: {"title":"9 微分方程"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
