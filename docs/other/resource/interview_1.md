# CSS

## 1.你理解的盒模型，你在你的项目中一般用的什么盒模型，你自己项目开发怎么计算宽度

-

## 2.重排和重绘有什么区别（也可能叫做回流 reflow 和重绘 repaint）

    对render树进行渲染，对dom的增删改查，location等会引发重排，重排必将引发重绘。

## 3.请你介绍一下伪类和伪元素有什么区别

## 4.你了解到 css 的样式隔离手段有哪些，你在项目中用过哪些

1.  css module import 引入
2.  预处理器 less scss 的样式隔离？
3.  vue 的 scope -引申-scope 样式隔离的原理（每个原理都要去探究一下） 添加伪随机数的 hash 值
4.  浏览器原生的 shadow dom

## 5.css 的优先级是怎么计算的

1. 它是一个加权的分值

## 6.说一下 BFC,(其余还有 FMC,FMC)

1. BFC 用来描述什么，可以怎么开启，会导致什么，经常用来解决什么问题，用不同的 BFC 包裹可以用来解决外边距塌陷的问题

## 7.position 有哪些值，它的作用是什么

1. 尽量说全，sticy

## 8.flex:1 是由什么构成的 这个问题 95%以上，问到弹性盒子布局的话

1. 顺序不能说错，代表三个元素的属性的结合，具体的三个值是什么 1 1 0%（0%和 0 有区别）

## 9.css 怎么画常用的三角形

1. 给个 border-width，三个边框给个透明度
2. 朝右的三角形

## 10.单行文本溢出省略号，多行呢

## 11.想在页面上画一个 0.5px 的线怎么画 scale

## 12.css3 怎么开启硬件加速，gpu 加速 3d 滤镜 透明度

## 13.css 相关的性能优化

1. 优化加载速度-压缩体积，封装公共样式为类，用 link 来引入 css 资源而不是 import
2. 优化渲染速度-css 选择器是从右往左，要保证链尽可能的短
3. 优化通用性- 预处理器-嵌套及变量来写 css，后处理器 postcss-处理兼容性的问题，可以自定添加浏览器的特定前缀
4. 优化工程化

## 14.垂直水平居中有哪些方案

## 15.display:none 和 visibility:hidden,opacity 的区别,三者对于事件的触发呢？

## 16.你了解的 css 动画有哪些，如何做一个 css 动画呢 transition 也属于动效 animation

1. transitio 和 animation 的区别？

## 17.rem 和 em 的区别，那如果要做移动端适配，有哪些方法

1. rem 方案-media 查询，监听当前设备宽度，动态修改根节点 html size
2. 弹性布局 flex
3. 百分比

## 18.在浏览器的渲染中，有个队列机制，即使用 js 来操作页面元素或者样式，并不是操作了就渲染，它其实是有一个队列，可能操作 1000 次再对这 1000 次统一更新，那我们可以做什么来打破这个队列，让浏览器来立即进行更新呢，涉及 css 优化

1. window 的 resize
2. 滚动，offset，clientTop，要得到某些元素的即时有计算信息结果，那就会立马刷新，所以每次不要直接的去访问这些属性，一般都是用变量把这些信息记录下来。
3. 最终的落脚点是浏览器的刷新渲染是一个队列排队机制。
4. 尽量不要频繁的去触发浏览器的重新渲染，可能会触发浏览器的崩溃（低代码这里得研究下）

# JS

## 1.什么是原型和原型链

1. 原型链经典考题
   1. Object.prototype.**proto**原型链的尽头是什么
   2. Funciton.prototype.**proto**答案是什么
   3. 构造函数自身的**proto**是什么
   4. Object.**proto**但是什么 3.4 答案都是 Function.prototype
   5. Object instanceof Function
   6. Funciton instanceof Object
   7. Function.prototype===Funciton.**proto** 5.6.7 都是 true 5.6 用 instanceof 的原理解释下
   8. Funciton 的什么东西跟 Object 的相等 第二层相等，是 Function.prototypt.**proto** 跟 Object.**proto**相等

## 2.说一下 js 的继承，你觉得最好的继承方式应该是什么

1. 寄生组合继承是最好的？它的原理是什么，怎么实现，它的优点是什么(说具体)，它执行构造函数只执行了一次（容易遗忘的优点之一）

## 3.new 操作符做了什么事情

## 4.修改 this 指向 call aplly bind

1. bind 有什么特殊的点，是它自身要额外注意的，包括我们手写要注意什么 如果 bind 当初绑定的是一个构造函数，用 newblabla，第二个点是参数问题-它可以实现类似函数隔离化的二次传参，可以实现参数的合并
2. 如果我连续的对一个函数进行多次的.bind.bind.bind 那么它最后的指向是什么，又是为什么嘞，指向第一个

## 5.es6 有哪些新特性

1. let const var 区别，暂时性死区 blabla（在变量声明之前不允许访问）
2. 在 es5 中如何用 var 来模拟 es6 的暂时性死区，局部作用域呢？ 闭包+自行执行函数，怎么做，为什么嘞，原理是什么？函数的局部作用域造成的

## 6.怎么理解闭包，闭包的作用原理和使用场景

1. 使用场景-用于实现模块化，防抖节流

## 7.js 的垃圾回收机制是什么

1. 引用计数，标记清除

## 8.箭头函数和普通函数的区别

## 9.0.1+0.2=0.3 吗？在 js 里面

1. 精度丢失
2. 做增删改查，精度，怎么做，方案一，方案二小数转化为整数？

## 10.js 如何判断数据类型是一个数组

## 11.promise.all 和 promise.race 的区别

1. 对页面所有的超过 5 秒的请求都要 reject 或取消掉，怎么做呢。promise 的取消方案-不能用 axios 封装，promise.race 应用案例
2. 高频 - promise 的调度器，让我们能够在一定时间内限制只能有两个或三个 promise，或者异步请求发起。-应用场景：大文件上传，谷歌的浏览器在同一域名下最多有 6 个 tcp 连接数，并发会造成浏览器崩溃。所以要做 promise 调度器，这个方案要怎么设计呢【这个题目一定要会！】
   1. promise.all 和 promise.race 结合来实现
   2. 怎么让这个程序能自动运行起来呢-代码层面-采用什么机制-用同步的 for 循环来里面用 await 一次循环来完成
      1. 这个思路不太好，用函数的递归的方案，在调用函数的时候去判断是否超过了最大请求数,用计数器来判断-【shayu-juejin-最全的 js 手写题】

## 12.raf 和 rfc 是什么

## 13.js 异步加载有什么实现方式，asnyc defer 区别

## 14.html 文档声明周期有哪些

## 15.foreach 和 map 可以用 break 或者 return 来跳出循环吗

1. map 本来就是用 return 关键字来返回数据的，对数组来进行格式化操作
2. 那如果想在这两个循环体内跳出循环，怎么做-throw 一个 error
3. for 循环里使用 return，函数里使用 return 会跳出函数本身执行，有可能直接就把整个函数体给跳出去了

## 16.sort 排序算法的本质是什么？

1. 根据数组的整体长度来进行判断，长度小于 10 采用插入排序，大于 10 采用快排

## 17.什么是事件循环机制

## 18.什么是事件模型，也叫事件流

1. window.addEventListner 默认在什么时候触发，改一下呢，第三个参数

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

1. last-modified 缺点是什么？
2. last-modified 优先级低
3. 请你说下你们当前项目的静态资源缓存策略是什么-
   1. index.html 不缓存
   2. 根据文件名来判断，它的 hash 值变的话就说明变了，强缓存
   3. 我们能设置的就是响应头，请求头设置不了，什么在打包时设置什么什么什么

## 2. 浏览器从输入网址到展现的过程

## 3. cookie，session，localStorage,sessionStorage 区别

详细解释下 session 是什么，可以理解 session 就是存储在服务端的 cookie
cookie 有哪些属性可以设置？
cookie 可以跨域吗？如果要跨域那怎么做呢，前端其实也有一个属性需要设置-什么 withCredentials origin 不能设置为星号 要设置为一个具体的 domain 的域名，设置为星号会报错

## 4. 什么是 cors 的 options 的预检请求

## 5. 如何检查内存泄漏

## 6. 你们在实际开发过程中怎么解决跨域问题

我知道有哪些方案

1.  jsonp
2.  cors
3.  postmessage
4.  nginx
5.  h5 新出的协议
    实际中是。。。

## 7. content-type 有哪些值

## 8. 你了解到的状态码有哪些？

203 做错误监控很常见
400 九成是自己前端传的参数错误
401 没有登录或登录失效
403 已登录情况下没有权限

## 9. tcp/udp 区别

http3.0 为什么 udp 在 3.0 稳定性高

## 10. 安全-xss 注入攻击，csrf

# react

## 1. 为什么需要合成事件

合成事件是 react 模拟原生 dom 事件所有能力地一个事件对象，即浏览器原生事件地跨浏览器包装器。在 react 中，所有事件都是合成地不是原生 dom 事件，但是可以通过 e.nativeEvent 属性来获取 dom 事件

1. 进行浏览器兼容，实现更好的跨平台；react 提供的合成事件可以用来抹平不同浏览器事件对象之间的差异，将不同平台事件模拟合成事件
   1. 浏览器采用地是顶层事件代理机制，能够保证冒泡一致性，可以跨浏览器执行
2. 避免垃圾回收；react 事件对象不会被释放掉，而是存放进一个数组中，当事件触发，就从整个数组中弹出，避免频繁地去创建和销毁
   1. 事件对象可能会被浏览器频繁创建和回收，因此 react 引入了事件池，在事件池中获取或释放事件对象。
3. 方便事件统一管理和事务机制

4. 原理是什么呢？
   1. react17 之前是委托在 document 上地，之后是委托在挂载的容器上面了
      1. 原生事件就是挂载在 document 上的事件。
   2. 真实原因是由于 fiber 机制，生成一个 fiber 节点时，它对应的 dom 节点可能还没挂载，click 这样的事件处理函数作为 fiber 节点的 prop，也就不能绑定到真实的 dom 节点上了。所以 react 提供了‘顶层注册 事件收集 统一触发’的事件机制，这套机制规避了无法将事件直接绑定到 dom 节点的问题，并且能够很好的利用 fiber 树的层级关系来生成事件执行路径，进而模拟事件捕获和冒泡
   3. 在 react 中 onclick 依赖了 click 原生事件，代表事件需要在冒泡阶段触发，onClickcapture 代表在捕获阶段触发，onmouseenter 依赖了 mouseout 和 mouseover 两个原生事件
   4. 绑定到 root 上的事件监听不是我们在组件里写的事件处理函数，而是一个持有事件优先级，并能传递事件执行阶段标志的监听器

## 2. usememo 和 usecallback 区别，本身对性能影响如何呢，它本身就会加重性能负担 hooks 底层实现是闭包

1. 共同点：他两都是 hook 提供的两个用于缓存数据，优化性能的 API，第一个参数是一个回调函数，第二个是依赖的数据，共同点是只有在依赖数据发生改变的时候才会调用传进去的回调函数重新计算结果，起到一个缓存的作用
2. 区别是：usememo 缓存的结果是回调函数 return 回来的值，主要用于缓存计算结果的值，应用场景如需要计算的状态或者函数，usecallback 也是如果依赖项数组中的数据没有发生变化，就会返回上一次 callback 的函数，默认情况下，每当一个组件重新渲染，其中的函数都会重新声明，这样有一个问题就是，如果该组件将这个函数传递给子组件，那么子组件就也会重新渲染。
3. 所以总结：usecallback 其实是 usememo 第一个参数的返回值是函数时的特殊情况，usemomeo 缓存一个函数与直接使用 usecallback 的效果是一样的，它是 usememo 的语法糖
4. 对性能的影响：hooks 官网说是不会，在现代浏览器中，闭包和类的原始性能只有在极端场景下才会有明显的差别，一般情况下，react.memo 和 useCallback 搭配使用，memo 是在父组件传递给子组件的值没变化的时候不重新渲染，usecallback 是包裹的父组件传递给子组件的函数。但是 usecallback 本身传递的就是一个闭包函数，所以存在一定的风险，除非计算量特别大的子组件这种极端情况，否则不推荐使用 配合防抖节流使用

## 3. react hook

## 4. useEffect 和 useLayoutEffect 区别

1. useeffect 是异步执行的，uselayouteffect 是同步，当函数组件刷新时候，包含 useeffect 的组件运行过程是：触发组件重新渲染-组件函数执行-组件渲染后呈现到屏幕上-useeffect 执行 而 uselayouteffect 会在组件函数执行之后，组件呈现之前执行，react 会等待。
2. 异步的优点是 react 渲染组件不必等待 useeffect 函数执行完毕，造成阻塞，99%的情况用 useeffect 就可以了，在用它的时候，屏幕会出现闪烁的情况，组件在很短时间内渲染了两次，所以了解了 useeffect 的执行过程之后，我们可以通过 useref 获取组件上一个状态的 state 和 props，在 useeffect 里设置 ref 的 current 值
3. tip：useeffect 的 return 会在卸载阶段和组件更新时执行
4. 他两的钩子函数最终都会以 effect 对象的形式存入 fiber.updateQueue 链表中

## 5. react hook 中有一个闭包陷阱，有遇到过吗

useref 解决闭包问题？？

1. 原因是 useeffect 等 hook 里用到了某个 state 但是没有加入到依赖数组里，这样就导致了 state 改变了，但是没有执行新传入的函数，依然是旧 state
2. 解决就是加到依赖项里，或者使用 useref 不直接引用就 ok 拉，针对定时器循环的话也可以只加个 return 采取清除-重建-因为 useeffect 在页面更新时清除产生的闭包，useref 可以是因为 useref 本质是一个对象，对象是引用
3. useState 陷阱，更新是异步的，一个函数里 set 多次只会执行最后一个，上面的是 useeffect 陷阱，使用 usestate 的函数写法
4. 什么是闭包陷阱-react hooks 在渲染的时候维护了一个链表，用来记录 useState 和 useEffect 的位置和值，这也是 state 不能使用 if else 的原因，会导致链表中顺序错乱，不能获取到正确的数据，每次 state 更新的时候，链表从头开始重新渲染，但是 useEffect 没有依赖项，回调函数没有触发，前面的如果里面有个定时器循环就还是一直拿的是初始化时候的值，就是说在回调函数中使用了 usestate 创建的值，那么闭包就会产生。闭包在函数组件创建时产生，它会缓存创建时的 state 的值
5. 所以 usememo 和 usecallback 这种闭包的话，可以将所有依赖项都添加到数组里，也能形成更新效果，假如有 num1 和 num2 两个 state 都在一个事件更改里，写一个 num2 就可以了，因为他两是在同一个闭包里的，所以更新是同步的，就是如果多个依赖项是同时变化的话，那么只写一个就可以了

## 6. useref 定义的值和 usestate 的值有什么区别

1. 一个会触发重新渲染，useref 不会，usestate 的值在每个 renderer 中都是独立存在的
2. useref 基本作用是标识 dom 元素或者存储变量，被包裹的变量不经过 render 函数，类似于全局变量，所以一旦 render 函数内部对状态进行修改，useref 可以拿到最新的值
3. useref 特性：可变的 ref 对象，持久化

## 7. 为什么要出现 react fiber

在之前的调度算法中，React 需要实例化每个类组件，生成一颗组件树，使用 同步递归 的方式进行遍历渲染，而这个过程最大的问题就是无法 暂停和恢复。
解决方案: 解决同步阻塞的方法，通常有两种: 异步 与 任务分割。
而 React Fiber 便是为了实现任务分割而诞生的
这里我理解为是一种 任务分割调度算法，主要是 将原先同步更新渲染的任务分割成一个个独立的小任务单位，根据不同的优先级，将小任务分散到浏览器的空闲时间执行，充分利用主进程的事件循环机制
在 React 16 及以后，协调改为了 Fiber Reconciler。它的调度方式主要有两个特点：
● 第一个是协作式多任务模式，在这个模式下，线程会定时放弃自己的运行权利，交还给主线程，通过 requestIdleCallback 实现。
● 第二个特点是策略优先级，调度任务通过标记 tag 的方式分优先级执行，比如动画，或者标记为 high 的任务可以优先执行。Fiber Reconciler 的基本单位是 Fiber，Fiber 基于过去的 React Element 提供了二次封装，提供了指向父、子、兄弟节点的引用，为 diff 工作的双链表实现提供了基础。
在新的架构下，整个生命周期被划分为 Render 和 Commit 两个阶段。
● Render 阶段的执行特点是可中断、可停止、无副作用，主要是通过构造 workInProgress 树计算出 diff。
○ 以 current 树为基础，将每个 Fiber 作为一个基本单位，自下而上逐个节点检查并构造 workInProgress 树。这个过程不再是递归，而是基于循环来完成。
○ 在执行上通过 requestIdleCallback 来调度执行每组任务，每组中的每个计算任务被称为 work，每个 work 完成后确认是否有优先级更高的 work 需要插入，如果有就让位，没有就继续。
○ 优先级通常是标记为动画或者 high 的会先处理。每完成一组后，将调度权交回主线程，直到下一次 requestIdleCallback 调用，再继续构建 workInProgress 树
● 在 commit 阶段需要处理 effect 列表，这里的 effect 列表包含了根据 diff 更新 DOM 树、回调生命周期、响应 ref 等。
○ 但一定要注意，这个阶段是同步执行的，不可中断暂停，所以不要在 componentDidMount、componentDidUpdate、componentWiilUnmount 中去执行重度消耗算力的任务

1. react 的核心思想是：内存中维护一个虚拟 dom 树，数据 state 变化时，自动更新虚拟 dom 树，得到一个新的树，然后 diff 新旧虚拟 dom 树，找到有变化的部分，得到一个 change（patch），然后将这个 patch 加入队列，最终批量更新这些 patch 到 dom
2. React Fiber 是对核心算法的一次重新实现。
   React Fiber 把更新过程碎片化，把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会
   因为一个更新过程可能被打断，所以 React Fiber 一个更新过程被分为两个阶段(Phase)：第一个阶段 Reconciliation Phase 和第二阶段 Commit Phase
3. 在第一阶段 Reconciliation Phase，React Fiber 会找出需要更新哪些 DOM，这个阶段是可以被打断的；
4. 第二阶段 Commit Phase，那就一鼓作气把 DOM 更新完，绝不会被打断
   这两个阶段大部分工作都是 React Fiber 做，和我们相关的也就是生命周期函数
   React Fiber 改变了之前 react 的组件渲染机制，新的架构使原来同步渲染的组件现在可以异步化，可中途中断渲染，执行更高优先级的任务，释放浏览器主线程
   解决方案 fiber
   ● 将调度算法阶段阶段任务拆分（Commit 无法拆分）
   ● DOM 需要渲染时暂停，空闲时恢复
   ● 分散执行: 任务分割后，就可以把小任务单元分散到浏览器的空闲期间去排队执行，而实现的关键是两个新 API: requestIdleCallback 与 requestAnimationFrame
   ○ 低优先级的任务交给 requestIdleCallback 处理，这是个浏览器提供的事件循环空闲期的回调函数，需要 pollyfill，而且拥有 deadline 参数，限制执行事件，以继续切分任务；
   ○ 高优先级的任务交给 requestAnimationFrame 处理

## 8. redux 中间件的机制

## 9. redux 函数式编程的思想

## 10. 虚拟 dom

虚拟 dom 是 js 对象，是对真实 dom 的一个映射。
react 从来没把它作为性

## 11.

## 12.

## 13.

## 14.

## 15.

## 16.

## 17.

## 18.

## 19.
