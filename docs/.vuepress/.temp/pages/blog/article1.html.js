import comp from "C:/Users/USER/blog/docs/.vuepress/.temp/pages/blog/article1.html.vue"
const data = JSON.parse("{\"path\":\"/blog/article1.html\",\"title\":\"Welcome to BIT! 欢迎来到北理！！\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1725167980000,\"contributors\":[{\"name\":\"yeesiang\",\"email\":\"yeesiangku@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"blog/article1.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
