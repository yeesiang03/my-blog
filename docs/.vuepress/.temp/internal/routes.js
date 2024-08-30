export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/blog/article1.html", { loader: () => import(/* webpackChunkName: "blog_article1.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/blog/article1.html.js"), meta: {"title":"article1"} }],
  ["/blog/article2.html", { loader: () => import(/* webpackChunkName: "blog_article2.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/blog/article2.html.js"), meta: {"title":"Second"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/USER/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
