# package 中的 dependencies 和 devDependencies 的去呗

1. 我们都知道他两的区别是 dependencies 是生产环境需要依赖的包，devDependencies 是开发环境需要的包
2. 但其实对于 SPA 应用来说，比如 react、vue 我们都是通过 webpack 打包成一个静态应用，再丢上去，打包的时候是不区分是开发环境还是依赖环境，只要依赖了就都会打包。
3. 对于 nodejs 项目它是不打包的，它是直接将整套代码都放到服务器上，所以它是要区分包是生产环境的依赖还是开发环境的依赖。
