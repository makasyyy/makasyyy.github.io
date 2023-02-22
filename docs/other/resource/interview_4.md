# newcoder
## HTML
- svg元素可直接嵌入html文件中，通过< embed> < object> 或< iframe>
- manifest是html5中新增标签，作用是应用资源缓存清单，规定文档的缓存manifest的位置，manifest文件是一个简单的文本文件，列举出了浏览器用于离线访问而缓存的资源
- src用于替换当前元素，href用于在当前文档和引用资源之间建立联系link=>href！
- 数据序列化技术 json property list数据格式 protocal buffer是google出品的一种轻量&高效的结构化数据存储格式，性能比json，xml强
- 万维网通过url统一资源定位符标识分布因特网上的各种文档
- Audio/Video 方法-加载-load()/播放-play()/暂停-pause()
- 一个完整的网页加载流程
1. 解析html结构
2. 加载外部脚本script和样式表文件link  // 页面中的多个脚本文件采用同步的方式加载，会产生‘线程等待’
3. 解析并执行脚本代码、
4. 构建html dom模型
5. 加载图片等外部资源文件 //图片等文件会以异步线程的方式加载，不会产生等待
6. 页面加载完毕，触发onload事件
- css加载不会阻塞dom树的解析，会阻塞dom树的渲染，会阻塞后面js语句的执行
- display:inline-block会触发BFC,不与float元素重叠
- 常理来说块级元素内部可以嵌套块级元素，但p比较特殊，它内部不可以嵌套块级元素
- html5废弃了一些html4的标签，但为了兼容性，还是对html4元素提供支持
- html5跨文档消息传输-跨文档本身就是跨域了
- canvas绘制的元素不可以通过浏览器提供的接口获取到，svg绘制的可以，因为canvas绘制的图形不是dom元素，无法像操作dom一样操作修改，而svg是直接绘制dom元素，可以操作修改。
- delete只有在删除对象成员这种引用时才有意义，只能删除对象成员，其余情况没有太大意义。返回布尔值true表示没有错误
- undefined+数字是NaN
- for in会遍历数组以及数组的可枚举属性，eg: var arr=[1],arr.b=0 for in 输出是【1，0】
- 原型链中如果后续对prototype重新赋值，不影响已经实例化出来的对象，eg:let B = new A() 在实例化时B.__proto__=A.prototype ,即使后面A的原型对象重新赋值，开辟新的空间指向别的对象，B__proto__也不会改变。
- 