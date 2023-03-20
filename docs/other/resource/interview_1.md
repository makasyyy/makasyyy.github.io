# CSS
## 1.你理解的盒模型，你在你的项目中一般用的什么盒模型，你自己项目开发怎么计算宽度
- 
## 2.重排和重绘有什么区别（也可能叫做回流reflow和重绘repaint）
    对render树进行渲染，对dom的增删改查，location等会引发重排，重排必将引发重绘。

## 3.请你介绍一下伪类和伪元素有什么区别
## 4.你了解到css的样式隔离手段有哪些，你在项目中用过哪些
   1. css module import引入
   2. 预处理器 less scss的样式隔离？
   3. vue 的scope  -引申-scope样式隔离的原理（每个原理都要去探究一下） 添加伪随机数的hash值
   4. 浏览器原生的 shadow dom

## 5.css的优先级是怎么计算的 
1. 它是一个加权的分值
## 6.说一下BFC,(其余还有FMC,FMC)
1. BFC用来描述什么，可以怎么开启，会导致什么，经常用来解决什么问题，用不同的BFC包裹可以用来解决外边距塌陷的问题
## 7.position有哪些值，它的作用是什么
1. 尽量说全，sticy
## 8.flex:1 是由什么构成的 这个问题95%以上，问到弹性盒子布局的话
1. 顺序不能说错，代表三个元素的属性的结合，具体的三个值是什么 1 1 0%（0%和0有区别）
## 9.css怎么画常用的三角形
1. 给个border-width，三个边框给个透明度
2. 朝右的三角形
## 10.单行文本溢出省略号，多行呢
## 11.想在页面上画一个0.5px的线怎么画 scale
## 12.css3怎么开启硬件加速，gpu加速 3d 滤镜 透明度
## 13.css相关的性能优化
1. 优化加载速度-压缩体积，封装公共样式为类，用link来引入css资源而不是import
2. 优化渲染速度-css选择器是从右往左，要保证链尽可能的短
3. 优化通用性- 预处理器-嵌套及变量来写css，后处理器postcss-处理兼容性的问题，可以自定添加浏览器的特定前缀
4. 优化工程化
## 14.垂直水平居中有哪些方案
## 15.display:none 和 visibility:hidden,opacity 的区别,三者对于事件的触发呢？
## 16.你了解的css动画有哪些，如何做一个css动画呢 transition也属于动效 animation
1. transitio和animation的区别？
## 17.rem和em的区别，那如果要做移动端适配，有哪些方法
1. rem方案-media查询，监听当前设备宽度，动态修改根节点html size
2. 弹性布局 flex
3. 百分比
## 18.在浏览器的渲染中，有个队列机制，即使用js来操作页面元素或者样式，并不是操作了就渲染，它其实是有一个队列，可能操作1000次再对这1000次统一更新，那我们可以做什么来打破这个队列，让浏览器来立即进行更新呢，涉及css优化
1. window的resize
2. 滚动，offset，clientTop，要得到某些元素的即时有计算信息结果，那就会立马刷新，所以每次不要直接的去访问这些属性，一般都是用变量把这些信息记录下来。
3. 最终的落脚点是浏览器的刷新渲染是一个队列排队机制。
4. 尽量不要频繁的去触发浏览器的重新渲染，可能会触发浏览器的崩溃（低代码这里得研究下）
   
# JS
## 1.什么是原型和原型链
1. 原型链经典考题
   1. Object.prototype.__proto__原型链的尽头是什么
   2. Funciton.prototype.__proto__答案是什么
   3. 构造函数自身的__proto__是什么
   4. Object.__proto__但是什么  3.4答案都是Function.prototype
   5. Object instanceof Function
   6. Funciton instanceof Object
   7. Function.prototype===Funciton.__proto__  5.6.7都是true 5.6用instanceof的原理解释下
   8. Funciton的什么东西跟Object的相等 第二层相等，是Function.prototypt.__proto__ 跟Object.__proto__相等
## 2.说一下js的继承，你觉得最好的继承方式应该是什么
1. 寄生组合继承是最好的？它的原理是什么，怎么实现，它的优点是什么(说具体)，它执行构造函数只执行了一次（容易遗忘的优点之一）
## 3.new操作符做了什么事情
## 4.修改this指向 call aplly bind
1. bind有什么特殊的点，是它自身要额外注意的，包括我们手写要注意什么 如果bind当初绑定的是一个构造函数，用newblabla，第二个点是参数问题-它可以实现类似函数隔离化的二次传参，可以实现参数的合并
2. 如果我连续的对一个函数进行多次的.bind.bind.bind那么它最后的指向是什么，又是为什么嘞，指向第一个
## 5.es6有哪些新特性
1. let const var区别，暂时性死区blabla（在变量声明之前不允许访问）
2. 在es5中如何用var来模拟es6的暂时性死区，局部作用域呢？ 闭包+自行执行函数，怎么做，为什么嘞，原理是什么？函数的局部作用域造成的
## 6.怎么理解闭包，闭包的作用原理和使用场景
1. 使用场景-用于实现模块化，防抖节流
## 7.js的垃圾回收机制是什么
1. 引用计数，标记清除
## 8.箭头函数和普通函数的区别
## 9.0.1+0.2=0.3吗？在js里面
1. 精度丢失
2. 做增删改查，精度，怎么做，方案一，方案二小数转化为整数？
## 10.js如何判断数据类型是一个数组
## 11.promise.all和promise.race的区别
1. 对页面所有的超过5秒的请求都要reject或取消掉，怎么做呢。promise的取消方案-不能用axios封装，promise.race应用案例
2. 高频 - promise的调度器，让我们能够在一定时间内限制只能有两个或三个promise，或者异步请求发起。-应用场景：大文件上传，谷歌的浏览器在同一域名下最多有6个tcp连接数，并发会造成浏览器崩溃。所以要做promise调度器，这个方案要怎么设计呢【这个题目一定要会！】
   1. promise.all和promise.race结合来实现
   2. 怎么让这个程序能自动运行起来呢-代码层面-采用什么机制-用同步的for循环来里面用await一次循环来完成
      1. 这个思路不太好，用函数的递归的方案，在调用函数的时候去判断是否超过了最大请求数,用计数器来判断-【shayu-juejin-最全的js手写题】
## 12.raf和rfc是什么
## 13.js异步加载有什么实现方式，asnyc defer区别
## 14.html文档声明周期有哪些
## 15.foreach和map可以用break或者return来跳出循环吗
1. map本来就是用return关键字来返回数据的，对数组来进行格式化操作
2. 那如果想在这两个循环体内跳出循环，怎么做-throw一个error
3. for循环里使用return，函数里使用return会跳出函数本身执行，有可能直接就把整个函数体给跳出去了
## 16.sort排序算法的本质是什么？
1. 根据数组的整体长度来进行判断，长度小于10采用插入排序，大于10采用快排
## 17.什么是事件循环机制
## 18.什么是事件模型，也叫事件流
1. window.addEventListner默认在什么时候触发，改一下呢，第三个参数
## 19.什么是事件委托，事件代理
1. 放到父元素，节省内存空间
## 20.什么是防抖和节流
## 21.事件循环的题目
1. 
```
代码打印题目
const async1 = async () => {
  console.log('async1');
  setTimeout(() => {
    console.log('timer1')
  }, 2000)
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 end')
  return 'async1 success'
} 
console.log('script start');
async1().then(res => console.log(res));
console.log('script end');
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then(res => console.log(res))
setTimeout(() => {
  console.log('timer2')
}, 1000)
```

# 浏览器
## 1. 浏览器的缓存策略是什么
1. last-modified缺点是什么？
2. last-modified优先级低
3. 请你说下你们当前项目的静态资源缓存策略是什么-
   1. index.html不缓存
   2. 根据文件名来判断，它的hash值变的话就说明变了，强缓存
   3. 我们能设置的就是响应头，请求头设置不了，什么在打包时设置什么什么什么
## 2. 浏览器从输入网址到展现的过程
## 3. cookie，session，localStorage,sessionStorage区别
  详细解释下session是什么，可以理解session就是存储在服务端的cookie
  cookie有哪些属性可以设置？
  cookie可以跨域吗？如果要跨域那怎么做呢，前端其实也有一个属性需要设置-什么withCredentials  origin不能设置为星号 要设置为一个具体的domain的域名，设置为星号会报错
## 4. 什么是cors的options的预检请求
## 5. 如何检查内存泄漏
## 6. 你们在实际开发过程中怎么解决跨域问题
我知道有哪些方案
 1. jsonp
 2. cors
 3. postmessage
 4. nginx
 5. h5新出的协议
实际中是。。。
## 7. content-type有哪些值
## 8. 你了解到的状态码有哪些？
203做错误监控很常见
400九成是自己前端传的参数错误
401没有登录或登录失效
403已登录情况下没有权限
## 9. tcp/udp区别
http3.0为什么udp在3.0稳定性高
## 10. 安全-xss注入攻击，csrf
# react
## 1. 为什么需要合成事件
## 2. usememo和usecallback区别，本身对性能影响如何呢，它本身就会加重性能负担  hooks底层实现是闭包
## 3. react hook
## 4. useEffect 和 useLayoutEffect区别
## 5. react hook中有一个闭包陷阱，有遇到过吗
useref解决闭包问题？？
## 6. useref定义的值和usestate的值有什么区别
## 7. 为什么要出现react fiber
## 8. redux中间件的机制
## 9. redux函数式编程的思想

