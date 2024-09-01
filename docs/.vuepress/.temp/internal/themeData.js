export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"宇翔的博客\",\"children\":[{\"text\":\"Github\",\"link\":\"https://github.com/MSiang03\"},{\"text\":\"掘金\",\"link\":\"https://juejin.cn/user/712139234359182/posts\"}]}],\"sidebar\":[\"\",{\"text\":\"Blog\",\"prefix\":\"/blog/\",\"children\":[\"article1\",\"article2\"]},{\"text\":\"微积分\",\"prefix\":\"/study/Calculas/\",\"children\":[\"1_集合与函数\",\"2_极限\",\"3_导数\",\"4_微分\",\"5_不定积分\",\"6_定积分\",\"7_多元函数微分\",\"8_二重积分\",\"9_微分方程\",\"10_无穷级数\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
