import comp from "C:/Users/USER/blog/docs/.vuepress/.temp/pages/blog/article2.html.vue"
const data = JSON.parse("{\"path\":\"/blog/article2.html\",\"title\":\"Second\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Second Article\",\"slug\":\"second-article\",\"link\":\"#second-article\",\"children\":[]}],\"git\":{\"updatedTime\":1725031546000,\"contributors\":[{\"name\":\"yeesiang\",\"email\":\"yeesiangku@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"blog/article2.md\"}")
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
