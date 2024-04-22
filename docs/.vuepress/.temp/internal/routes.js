export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/forDesktop/DesktopLive2d-Docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Live2D Desktop Mascot"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/forDesktop/DesktopLive2d-Docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
