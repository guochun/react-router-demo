# React Router

## MPA(multiple page app) 多页面应用

- 当url变化的时候返回新的页面的html

- 更加易于网络爬虫的爬取 更加容易做seo

## SPA(single page app) 单页面应用

- 当url变化html不会发生改变

- 单页面应用当切换url的时候不会重行请求html只是组件的复用,对用户更加友好。

## 组件

- react-router

- react-router-dom

- react-router-native

## <BrowserRouter >

基于HTML5的内部history api (push state replace state)

需要对web服务器额外的配置

## <HashRouter>

- 使用路由部分的hash部分作为路由信息

- 兼容老版本的浏览器


## route

路由之中配置路由信息的组件

path 表示路由的匹配规则

match: 通过 props.macth.params 获得动态路由的信息


exact: 表示path和route完全相同的时候才会匹配成功

<switch> 