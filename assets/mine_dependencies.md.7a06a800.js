import{_ as n,c as d,o as a,a as e,b as s}from"./app.c5ba338d.js";const v=JSON.parse('{"title":"package 中的 dependencies 和 devDependencies 的去呗","description":"","frontmatter":{},"headers":[],"relativePath":"mine/dependencies.md","lastUpdated":1682479760000}'),c={name:"mine/dependencies.md"},t=e("h1",{id:"package-中的-dependencies-和-devdependencies-的去呗",tabindex:"-1"},[s("package 中的 dependencies 和 devDependencies 的去呗 "),e("a",{class:"header-anchor",href:"#package-中的-dependencies-和-devdependencies-的去呗","aria-hidden":"true"},"#")],-1),i=e("ol",null,[e("li",null,"我们都知道他两的区别是 dependencies 是生产环境需要依赖的包，devDependencies 是开发环境需要的包"),e("li",null,"但其实对于 SPA 应用来说，比如 react、vue 我们都是通过 webpack 打包成一个静态应用，再丢上去，打包的时候是不区分是开发环境还是依赖环境，只要依赖了就都会打包。"),e("li",null,"对于 nodejs 项目它是不打包的，它是直接将整套代码都放到服务器上，所以它是要区分包是生产环境的依赖还是开发环境的依赖。")],-1),p=[t,i];function o(r,l,_,h,u,m){return a(),d("div",null,p)}const k=n(c,[["render",o]]);export{v as __pageData,k as default};
