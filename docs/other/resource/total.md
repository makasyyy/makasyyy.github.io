## CSS
- css选择器
- display属性 常见的四个+flex grid inherit
- block ,inline-block,inline区别
- 隐藏元素的方法有哪些：display,visibility,opacity,position,z-index,transform:scale(0)
- link 和@import 区别
- transition和animation区别
- display:none 和 visibility:hidden 区别
- 伪元素和伪类的区别和作用
- 对盒模型的理解- 标准盒模型和ie盒模型 box-sizing
- 为什么有时用translate改变位置而不是定位？ 不会触发
- li与li之间看不见的空白间隙怎么回事，如何解决？
- css3新特性
- 常见图片格式及使用场景 bmp gif jpeg png-8/24 svg webp
- 什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x,@2x这种图片
- margin和padding的使用场景 -他两区别在于border
- 对line-height的理解及其赋值方式 
- css优化和提高性能的方法： 加载/选择器/渲染/可维护性.健壮性
- 引申一下为什么要少用浮动，清除浮动的方法？ 四种 总共就是两类：利用clear属性或者父元素开启BFC
- 引申一下什么是BFC,怎么开启BFC
- css预处理器和后处理器是什么，为什么要使用它们？
- ::before 和:after的双冒号和单冒号有什么区别
- display:inline-block什么时候会显示间隙 回车空格原因导致的 父元素font-size0 letter-sapcing(chrome) 
- 单行，多行文本溢出隐藏
- sass 和less 是什么，为什么用它们
- 对媒体查询的理解- 针对不同的屏幕尺寸设置不同的样式
- 对css工程化的理解 - 预处理器，工程化插件，webpack loader等
- 如何判断元素是否到达了可视区域
- z-index在什么情况下会失效？ 它的position属性，三种情况
- css3的transform有哪些属性：
- 常见的css布局单位及其使用场景
- 引申一个问题：设置height：100%失效 百分比单位相对于直接父元素
- 两栏布局的实现-左边栏固定，右边栏宽度自适应 -两个利用浮动，一个flex，两个绝对定位
- 三栏布局的实现- 左右两栏固定，中间自适应 -绝对定位，flex布局，浮动-中间一栏必须放最后，圣杯布局，双飞翼布局 
  - 圣杯和双飞翼看这个 ![https://juejin.cn/post/6973562604581027853] 讲得很详细
- 水平垂直居中实现方式 -三个绝对定位（transfrom跟margin），一个flex
- 如何进行移动端适配
- 对flex布局的理解及其使用场景 flex-容器6属性，项目6属性
- 为什么要清除浮动，清除浮动的方式（重要） 在父容器不设置高度，子容器浮动的情况下，父容器高度不会被子元素撑开，这种称之为溢出，因为浮动元素已经脱离文档流，不占据空间，所以引起了高度塌陷现象。所以要清除浮动  要注意clear属性只有block元素才有，所以如果是用伪元素的话要改display属性。
- 对BFC的理解，如何创建BFC（重要）计算BFC高度时候还要计算浮动元素的值，所以父元素开启BFC后,子元素的浮动引起的高度塌陷就没啦，常用的办法就是给父元素设置overflow:hidden
  - 可以利用BFC不跟浮动元素发生重叠的特性实现自适应两栏布局 
- 什么是margin重叠问题，如何解决（重要）
  - 垂直方向上两个块级盒子的上外边距和下外边距重叠问题，只会产生在普通流文档的上下外边距之间
  - 所以为什么父子元素的margin重叠可以给父元素加overflow:hidden 解决，因为父元素开启BFC 后，bfc中上下相邻的兄弟元素之间的margin才会重叠
- 所以什么情况下永远不会产生外边距重叠问题？
  - 水平外边距永远不会重叠
  - 设置了overflow不为visible的元素和它的子元素之间的margin不会重叠
  - 兄弟元素中，如果其中一个是浮动的，那么垂直margin也不会重叠，且这个浮动盒子和子元素也不会重叠
  - position为absolute和fixed的盒模型，兄弟元素和其子元素之间也不会重叠
  - 总结这四条：本质就是触发了bfc的元素不会发生margin重叠
- BFC和IFC  IFC是内联盒子块级格式上下文
- 为什么overflow:hidden不能清除兄弟元素的外边距重叠，但是display:inline-block可以清除兄弟元素的外边距重叠问题
  - 自答：display:inline-block可以是因为 外边距重叠是发生在普通文档流的块级盒子之间的，变成内联盒子的话当然就没有了，块级盒子只有block list-item table，而oveflow：hidden相当于把两个都变成了独立bfc，它两还是同一文档流的块级盒子，所以外边距问题还是存在
  - 浮动元素和绝对定位可以清除兄弟元素的外边距问题是因为设置了之后，该盒子就脱离了当前文档流，两个margin都不是相邻的了
  - 两个兄弟元素给任意一个设置overflow：hidden外边距问题还在，因为开启bfc决定的是元素如何对其子元素进行定位，以及与其他元素的关系和相互作用，任意一个开启，但这两还是在同一个bfc下面，所以外边距问题还是存在，同理子元素开了bfc，它跟父元素也还是在同一个bfc下。给一个兄弟包裹一下，给父容器开启bfc，这样两个兄弟元素就不在同一个bfc下了
- 元素的层叠顺序
- position有哪些属性，区别是什么 5种
- display,float,position的关系  优先级 display>positon>float （有点复杂，要着重看下）
  - 总的一点就是position ：absolute fixed float不为none 更多的会把盒子当块盒子看，设置inline或者inline-block都会将display值转化为block，要注意：position为relative时float也有值，那么它是相对于浮动之后的最终定位来相对计算位置的
- absolute和fixed 的共同点和不同点
- 实现一个三角形
- 实现一个扇形 -相比前面多了一个radius
- 实现一个宽高自适应的正方形 vw/margin,padding/margin-top(伪元素)
- 画一个0.5px的线  transform meta、viewport  伪元素经常
- 设置小于12px的字体  scale or svg
- 如何解决1px问题：在一些retina屏幕上，1px却很粗呈现的并不止1px的效果 
  - 移动设备的物理像素跟css世界的像素不一样，比如有个比率值：设备的物理像素/css像素 2倍3倍之类的 
  - 那么如何解决呢：
    1. 拿到devicePixelRatio值设置data-device值 兼容性不好
    2. 使用伪元素先放大后缩小-可行性and兼容性都好
    3. viewport解决 但是会无差别缩小，其他元素maybe会被影响

## js
- js数据类型，区别 八种
- 数据类型检测方式有哪些 typeof instanceof constructor Object.prototype.toString.call()
  -  null和undefined就没有constructor，constructor本质是对象实例访问它的构造函数，如果改变了它的原型的话-prototype,那么constructor就不能用来判断数据类型了,所以一般不用它来判断，它是有风险的。
  -  最后一个是使用Obejct对象的原型方法toString来判断
  -  对象直接调用toString方法和通过Object的原型prototype来调用结果不一样，为什么？
     -  当然是因为Array,function等类型其实已经重写了toString方法，function类型返回的是函数体的字符串，Array类型返回的是元素组成的字符串，而不会调用Object原型上的toString方法返回元素数据类型，他们重写了这个方法目的是将对象转为字符串类型，如果想得到对象的具体类型时得调用Obejct原型上的方法
- 判断数组的方式有哪些 5种方式
- null和undefined的区别
  - null是空值，undefined是代表未定义的值，声明了变量但是未初始化，他两可以两等不可以三等
- typeof null的结果是什么，为什么？ -object因为object是000开头的，而null的值是机器码NULL指向的也全都是0-所以会判断为object
- instanceof操作符的实现原理及实现 判断 右边的prototype是否在左边的原型链上的任何位置
- 为什么0.1+0.2！=0.3，如何使其相等（要细看一下）
- 如何获取安全的undefined值 void
- typeof NaN的结果是什么 number
- isNaN 和Number.isNaN函数的区别？ 
  - isNaN碰到非数字类型会尝试将这个数字转换为数字，因此非数字值也会返回true，蛮影响判断的
  - Number.isNaN会先判断传入的参数是不是数字
- ==操作符的强制类型转换规则是什么？ 先比较类型，不同
  - 双方类型不一样时会发生类型转换，判断层级
  - 先判断是不是在对比null和undefined，是就返回true
  - 判断两个对比的是不是string和number在对比，是就把string转为number
  - 判断其中一方是否为boolean，是就把它转为number判断
  - 判断其中一方是否为object，且另外一方为string，number或symbol，是就把obejct转化为原始类型再判断，symbol类型的不能转化为数字，会报错
- 其他值到字符串的转换规则
- 其他值到数字的转换规则 
  - 注意undefined是NaN null是0 对于string类型的会使用Number()来进行转换，若包含非数字值就转换为NaN,''空字符串转化为0
- 其他值到布尔类型的转换规则 
  - 假值: undefined null false +0 -0 NaN '' 共七个假值，其余的都是真值
- ||和&&操作符的返回值，返回其中一个操作数的值，而非条件判断的结果
- Object.is() 与比较操作符===，==的区别？
  - Object.is(val1,val2)一般情况下跟===一致，处理了两个特殊情况：+0和-0不再相等，两个NaN 是相等的
- 什么是JavaScript中的包装类型
  - js中基本类型是没有属性和方法的，为了方便操作，js会在后台隐式的将基本类型的值转为对象
- js中如何进行隐式类型转换 （细看一下）
-  +操作符什么时候用于字符串的拼接 
  - 其中一个操作数是字符串或者通过toPrimitive抽象操作，再调用[[DefaultValue]]可以转化为字符串就执行字符串拼接，否则执行数字加法
- 为什么会有Bigint的提案 用于大数计算
- object.assign和扩展运算符是深拷贝还是浅拷贝，深拷贝与浅拷贝的区别0.0
  - object.assign和扩展运算符对单层对象,拷贝过后，原对象更改是不会影响的，但是如果对象的属性还是引用对象的话，那原对象做更改，拷贝的值也会更改，二者都是浅拷贝，在修改副本对象的嵌套子对象时，原对象的嵌套子对象也会发生改变,改变第一层的值，不会改变。
- JSON.stringify(JSON.parse())来深拷贝有一些缺点弊端，是什么？
  - 时间对象
  - 正则RegExp对象 Error对象
  - 函数 undefined
  - NaN Infinity -Infinity
  - 只能序列化对象的可枚举的自有属性，有元素是构造函数生成的会丢失constructor
  - 对象中存在循环引用的则无法实现深拷贝

- 自己实现深拷贝：不要求正则和时间的情况下，手写自己熟悉的那个深拷贝，不然就是lodash那个吧还是

## ES6
- let const var的区别
  - 变量提升，块级作用域，全局属性，重复声明，暂时性死区，初始值，指针指向
- const对象的属性可以修改吗？
- 如果new一个箭头函数会怎么样？漏,不可以new。
  - 箭头函数没有prototype,也没有自己的this指向,更不可以使用arguments参数，而new的时候就是要让生成的新对象的__proto__指向构造函数的prototype属性
- 箭头函数与普通函数的区别
  - 更简洁
  - 没有自己的this，取决于箭头函数定义时它作用域上文中的this继承
  - 继承来的this指向永远不会变
    - 注意，定义对象的大括号{}是无法形成一个单独的执行环境的，所以如果定义一个对象，对象有个属性b是一个箭头函数，那这个箭头函数的this是指向window对象的
  - call apply bind等方法不能改变箭头函数中this的指向
  - 不可作为构造函数使用
  - 没有自己的arguments
  - 没有prototype
  - 不能用作Generator函数，不能使用yield关键字
- 箭头函数的this指向哪里
- 扩展运算符的作用以及使用场景
  - 对象扩展运算符 - 浅拷贝
  - 数组扩展运算符 - 
- Proxy可以实现什么功能 - 自定义对象中的操作
- 对对象与数组的解构的理解
  - 数组解构 - 以元素位置来匹配
  - 对象解构 - 以属性名称为匹配条件
- 如何提取高度嵌套的对象里的指定属性 {}知道层级字段的话直接用它一步到位深层取
- 对rest参数的理解 可以把函数的多个入参收敛进一个数组里，可以用于处理函数参数个数不确定的情况
- es6中模板语法与字符串处理
  includes startsWith endsWith repeat-自动重复
## JS base
- new操作符的实现原理
  - 创建一个新的空对象
  - 将这个对象的原型设置为构造函数的prototype
  - 让构造函数的this指向这个对象，执行构造函数的代码
  - 判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，就返回这个引用类型的对象
  - 手写实现：
    ```
      function ObjectFactory(){
        let newObject= null;
        let constructor = Array.prototypr.shift.call(arguments);
        let result = null;
        if(typeof constructor !== 'function'){
          console.log('type error');
          return;
        }
        newObject = Object.create(constructor.prototype);
        result = constructor.apply(newObject,arguments);
        let flag =result && (typeof result === 'object' || typeof result === 'function');
        return flag?result:newObeject;
      }
      objectFactory(构造函数，初始化参数);
    ```
- '__proto__' 和prototype
  - 每个对象都有__proto__来标识自己所继承的原型，而prototype是函数才有的属性
  - 原型链的顶端是Obejct.prototype,它的__proto__是null
- map和Object的区别
- map和weakMap的区别
  - map的键可以是任何类型，而weakMap的key必须是对象。
  - weakMap的键名所引用的对象都是弱引用（弱引用指的是-当该对象应该被垃圾回收机制回收时不会阻止GC的回收），Map的键是跟内存地址绑定的，只要内存地址不一样，就视为两个键，weakmap的键是弱引用，键所指向的对象可以被垃圾回收，此时键是无效的
  - weakmap的弱引用的只是键名，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象就会被GC回收，相应的key则变成无效的，所以weakmap的key是不可枚举的
  - map可以被遍历，weakmap不可以被遍历
- js的内置对象
  - 值-undefined,null
  - 函数-parseInt() parseFloat() eval()
  - 基本对象-Object Function Boolean Symbol Error 等
  - 数字和日期对象 Number Math Date
  - JSON Map Set WeakMap Promise
- 常用正则表达式
- js脚本延迟加载方式有哪些？
  - defer属性 async属性 动态创建dom settimeout延时 js脚本放在底部最后加载
- js类数组对象的定义，类数组转化为数组的方法（5种）
- 数组有哪些原生方法
- 常见的位运算符有哪些？计算规则？
  - 原码，反码，补码
- 为什么函数的arguments 参数是类数组而不是数组，如何遍历类数组
  - arguments是一个对象，
- dom和bom
- 对类数组对象的理解，如何转为数组 5种
- escape，encodeURI，encodeURIComponent的区别
- 对ajax的理解，实现一个ajax请求
  - 通过js的异步通信，从服务器获取数据，局部更新当前网页的对应部分，而不用刷新整个网页
- js为什么要进行变量提升，它导致了什么问题
  - 是什么造成了变量提升
- 什么是尾调用，使用尾调用有什么好处
  - 在一个函数的最后一步调用另一个函数。即一个函数返回的是另一个函数的调用结果
  - 只在es6严格模式下可开启尾调用优化，正常模式下无效
  - node环境和浏览器是默认关闭尾调用优化的，可能会有栈溢出error
- 尾调用实例：
- js中的执行上下文和执行栈
  - 有全局执行上下文，函数执行上下文，和eval执行上下文
  - 全局执行上下文在执行js脚本初始被压入执行栈最底层，函数执行栈在函数被调用时才会被压入执行栈，当该函数执行完毕后会被退出执行栈并销毁，直到所有代码都执行完毕，全局执行上下文也被推出执行栈销毁，then程序结束
  - 创建执行上下文- 确定this,创建词法环境，创建变量环境
    - 这里注意：this的值只有在执行的时候才能确定，定义的时候不能确认
    - 词法环境从全局和函数来讲，全局没有外部环境，outer是null，this指向全局对象，函数中定义的变量，arguments对象，外部环境的引用
    - 变量环境也是一个词法环境，所以它具有上面词法环境中的所有属性，在es6中前者用于存储let和const绑定，后者仅用于存储var绑定
  - 每个执行环境都有一个表示变量的对象-变量对象，在函数被调用且在具体的函数执行之前，js引擎会将当前函数的参数列表【arguments】初始化成变量对象，并将当前执行上下文与之关联，函数代码块中声明的变量和函数将作为属性添加到这个变量对象上。。
  - 作用域链-> 从当前上下文的变量对象中查找
  - 提升只针对var和函数声明，函数表达式并不会被提升
- es6模块与commonjs模块有什么异同
  - 不同：commonjs是浅拷贝，Es6是对模块的引用，只读，不能改变其值。可以对commonjs重新赋值，改变指针指向，但是esmodule会报错
  - 相同：都可对引入的对象进行赋值，即对象内部属性的值可以改变
  - 要详细瞅瞅: 
- 常见的dom操作有哪些？
  - dom节点的增删改查
- use strict什么意思，使用它区别是什么 (回家瞅瞅红宝书)
- 如何判断一个对象是否属于某个类 instanceOf contsructor Object,prototype.toString().call
- 强类型语言和弱类型语言区别 强：j c++ 强制类型定义
- 解释型语言和编译型语言区别
- for...in 和 for ...of区别
- 如何使用for ...of遍历对象
- ajax axios fetch区别
  - ajax是在无须重载整个页面的情况下，能够局部刷新网页的技术。
  - axiso和fetch分别是ajax的替代品
  - fetch是基于pomise设计的，它不是ajax的进一步封装吗，而是原生js
    - 优：语法简洁，基于promise，更加底层，脱离了xhr
    - 缺：只对网络请求报错，400.500都认为是成功请求，默认不懈怠cookie，需要添加credentials：‘include’ 不支持abort和超时控制，没有办法原生检测请求的进度
  - axios是基于promise封装的http客户端
- 数组遍历方法有哪些？
- forEach 和map方法有什么区别？
  - 因为它其实拿到的是一个浅拷贝的数组
  - forEach直接操作item是不会改变原数组的，如果item是引用类型的直接赋值改变也不可以，但是操作它的属性是会改变原数组的
  - map是返回一个新数组，引用类型如果map时做了操作也会改变
## 原型与原型链
- 理解
  - 这个记忆一下那个很经典的图
  - 那个经典图总结下三个注意点
    - Object.prototype.__proto__=null;
    - Object.__proto__=Function.prototype;
    - Function.__proto__=Funciton.prototype;
    - Function.prototype和Object.prototype这两个很特殊，他两由引擎来创建
  - 每个构造函数都有一个属性是prototype，它指向 了一个对象，这个对象就是原型，调用构造函数创建的实例会通过__proto__关联构造函数的prototype，每个对象都是从prototype“继承”属性
  - 我们常说的原型链查找机制就是从__proto__一层一层往上找，定层是object.prototype它的__proto__是null
  - 而构造函数的每一个prototype都有一个constructor属性，指向构造函数本身
  - 在这里 in 和hasOwnProperty的区别就是 in会判断属性是否在原型上，而hasOwnProperty不会判断原型上的属性，只判断对象实例上是否有
  - for... in 判断实例和原型链上的 Object.keys()只遍历实例上的可遍历属性
- 原型修改，重写
  - 修改就是ptototype.属性赋值修改
  - 重写是直接整个prototype整个赋值，注意可能就把constructor属性修改没了
- 原型链指向
  - 牢记那张图！
- 原型链终点
  - Object.prototype.__proto__是null
- 如何获取对象非原型链上的属性
  - 用hasOwnProperty()
## 执行上下文、作用域链、闭包
- 前行概念：
  - 栈是存储基本类型数据和执行上下文的，所以栈的空间一般不大，如果大，存太多会影响执行上下文切换的效率，进而影响整个程序的执行效率。所以如果函数调用层级过深，会抛出栈溢出的错误
  - js两个阶段：编译阶段和执行阶段，编译阶段要进行词法语法分析，确定作用域规则，生成可执行代码
- 对闭包的理解
  - 浅显的理解就是一个函数嵌套另一个函数，有权访问另一个函数作用域中变量的函数：
  - 经典面试题：循环中使用闭包解决var定义函数的问题
    ```
    for (var i=1;i<5;i++){
      setTimeout(
        function timer(){
          console.log(i);
        }
        ,i*1000)
    }

    首先下结论：因为settimeout异步，所以循环先走完，i是6，会输出一堆6；

    解决方式：
    1.闭包 使用立即执行函数
    2.setTimeout的第三个参数 第三个参数会作为定时器里面的参数传入
    3.使用let定义 <-最推荐的方式
    ```
- 对作用域，作用域链的理解
  - 作用域：全局作用域，函数作用域，块级作用域（由let和const声明的包含在{ }中的代码片段）
  - 作用域链 向父级查找，直到找到window，它的本质是一个指向变量对象的指针列表
- 对执行上下文的理解
  - 全局执行上下文和函数执行上下文，eval函数执行上下文
## this/call/apply/bind
- 对this的理解
  - this可以根据四种调用方式判断
  - 函数调用 全局
  - 方法调用 作为对象的方法那就是对象
  - 构造器调用模式 new的时候
  - apply.call.bind调用 显示指定this指向进行修改。bind修改的指向除了使用new的时候会改变，其他情况下都不变，
- call和apply的区别
  - 他两作用一模一样，除了传入参数的形式不一样，apply是参数数组或类数组，
- 手写首先call apply bind函数
- 一个函数，一个对象，如果想改变函数内部的this指向，流程操作是：
- 将这个函数设置为这个对象的一个属性
- 执行函数（关键点在于怎么取出这个对象的参数）-this指向
- 删除这个属性
```
1.call
  Function.prototype.myCall =function(context){
    if(typeof this !=='function'){
      console.error('type error);
    }
    <!--这里应该是什么，这种情况下0 false 空字符串也会被判断为window -->
    if(!context || context === null){
      context = window;
    }
    <!-- 为什么要截取第一个参数后端额所有参数-》因为第一个参数是context呀 -->
    let args =[...arguments].slice(1);
    let fn = Symbol();
    context[fn]=this;
    const result =context[fn](..args);
    delete context.fn;
    return result;
  }
2.apply
  Function.prototype.myApply =function(context,arguments){
    if(typeof this !=='function'){
      console.error('type error);
    }
    if(!context || context === null){
      context = window;
    }
    let args =[...arguments].slice(1);
    let fn = Symbol();
    context[fn]=this;
    const result =context[fn](..args);
    delete context.fn;
    return result;
  }
3.bind
  Function.prototype.myBind(context,arguments){
    if(typeof this !=='function'){
      console.error('type error);
    }
    if(!context || context === null){
      context = window;
    }
    let args =[...arguments].slice(1);
    const _this =this;
    let fn = Symbol();
    context[fn]=this;
    const result=function(...innerArgs){
      
      if(this instanceof _this === true){
        <!-- 此时this指向result的实例，这时不需要改变this指向 -->
        this[fn]=_this;
        this[fn](...[...args,...innerArgs]);
      }else{
        <!-- 如果只是作为普通函数调用，直接改变this指向为传入的context -->
        context[fn](...[...args,...innerArgs]);
      }
    }
    <!--如果绑定的是构造函数，需要继承构造函数原型属性和方法  -->
    result.prototype=Object.create(this.prototype);
    return result;
  }

```
## 异步编程 promise
- 异步编程的实现方式
  - 回调函数/promise/generator/async
- setTimeout promise async/await的区别
  - settimeout会被放入异步队列
  - promise本事是同步的立即执行函数，执行resolve或者reject的时候是异步操作，会先执行then/catch，当主栈完成后，才会调用resolve/reject中存放的方法去执行，它的then和catch是会进微任务队列，在本轮事件循环的末尾进行，先于settimeout完成，settimeout是进宏任务队列的
  - async函数返回一个promise对象，函数遇到await会先返回，等到触发的异步操作完成，再执行函数
  体内后面的语句，让出了线程，跳出了async函数体
  - async函数awiat后面可以是promise或原始类型的值（但这时就是同步操作了）
  - await后的异步操作，如果彼此没有依赖关系最好同时触发，promise.all并发执行
- 对promise的理解
  - 异步编程的一种解决方案，它是一个对象，可以获取异步操作的信息，解决了回调地狱问题
  - 三个状态pending resolved rejected 两个过程：一旦从进行状态变为其他状态就永远不能更改状态了
  - 缺点：无法取消promise，不设置回调的话，promise内部抛出的错误，无法反应到外部，处于pending时无法得知目前发展到哪个阶段，刚开始还是即将完成
- promise的基本用法
  - new Promise参数是一个函数，带了resolve和reject参数，它两的返回值也是一个promise对象可以进行then调用
  - 五个常用方法： then() catch() all() race() finally()
    - race接收一个每项都是promise的数组，根据最先执行完的promise的状态来决定race的状态，使用场景可以是将一个promise跟一个延时放一起，超过多长时间就不做了，可以用race来解决
    - finally不接收任何参数,与promise的状态无关，不依赖于promise的执行结果，本质是then方法的特例，then有两个参数。
- promise解决了什么问题
  - 回调地狱问题，后一个依赖前一个的结果
- promise.all和promise.race的区别和使用场景
  - all将多个promise实例包装成一个新的promise实例，成功时返回一个结果数组，失败返回最先reject的值，成功的结果数组跟all接收到的数组顺序一致
  - race就是赛跑
- 对async、await的理解
  - 本质是generator的语法糖，它是为了优化then链开发出来的
  - async函数返回的是一个promise对象，如果async里没有await，return关键字会把把返回值通过promise.resolve包装成promise对象,可以后续用then接收，如果没有返回值的话会包装成promise.resolve(undefined)。所以在没有await的情况下，它会立即执行，返回一个promise对象，并且不会阻塞后面的语句。
  - 注意：Promise.resolve(x) 可以看作是 new Promise(resolve => resolve(x)) 的简写，可以用于快速封装字面量对象或其他对象，将其封装成 Promise 实例。
- await在等什么
  - await等待是返回值，只是普通是用来等待async，它可以等待任意表达式的结果，可以接普通函数调用或直接量，完全可以正常运行
  - 总价await：如果它等的不是一个promise对象，那运算结果就是值；如果等的是一个promise对象，那它要忙起来了，它会阻塞后面的代码，等待promise对象resolve得到resolve的值作为其运算结果
  - async函数本身不会造成阻塞，它内部所有的阻塞被封装在一个promise对象中异步执行，await会暂停当前async的执行，所以，async内部await后面的代码都会先等待promise返回，会阻塞。
- async、await的优势
  - 在多个异步任务且后一个依赖前一个异步结果的情形下，比promise的then链代码要美观很多
- async/await对比Promise的优势
  - 同上，promise虽然解决了回调地狱，但async/await比then链读起来更美观
- async/await 如何捕获异常
  - try...catch包裹await这一行句子，或者直接await后面加catch
- 并发与并行的区别？---
  - 并发宏观-通过任务间的切换在一段时间内完成了多个任务，并行微观-多个核心同时完成多任务
- 什么是回调函数？回调函数有什么缺点？如何解决回调地狱问题？
  - 嵌套，缺点：不能使用try...catch,不能直接return
- setTimeout、setInterval、requestAnimationFrame 各有什么特点
  - settimeout设置为0也不会同步进行，首先是html5规定最短的时间间隔是4ms，所以即使设置为0浏览器也可能4毫秒之后才推入任务队列，再有就是读到这行代码的时候，是先将它放入事件队列，时间满足后才推入任务队列，如果此时任务队列不为空，那就还需要等待
  - 前两者虽然说是定时器，但是js是单线程执行，如果前面的代码阻塞了，那定时器就不一定能按时执行
  - setinterval很不建议使用，因为它存在执行累积的问题，如果定时器执行过程中发生了耗时操作，多个回调函数会在耗时操作结束后同时执行，会带来性能问题
  - settimeout有一个写法，循环调用自身
  ```
  setTimeout(funcitonfn(){
    console.log('我被调用了');
    setTimeout(fn,100)
  },100)
  这个模式链式调用settimeout，每次函数执行的时候都会创建一个新的定时器，在前一个定时器代码执行完之前，不会向队列插入新的定时器代码，确保不会有任何缺失的间隔
  ```
  - 如果有循环定时器的需求，推荐使用requestAnimatioinFrame
    - 它是浏览器用于定时循环操作的一个借口，类似settimeout，主要用途是按帧对网页进行重绘，专门为动画提供的一个接口，window下面的
    - 是在主线程上完成的，使用这个api，一旦页面不处于浏览器的当前标签，就会自动停止刷新。但是如果主线程非常繁忙，那它的这个动画效果打折扣
  - 相关面试题
  ```
  1.setTimeout中的this指向问题：
  var i =0;
  const o={
    i:1,
    fn:function(){
      console.log(this.i);
    }
  }
  setTimeout(o.fn,1000);
  答案：单纯调用o.fn()打印结果是1，但是上题中settimeout是window上的方法，o.fn作为参数传给了settimeout，仍然是在window对象上调用，所以执行结果是0

  2.立即执行函数里包了定时器
  (function(){
    setTimeout(function(){
      alert(2)
    },0);
    alert(1)
  })()
  先弹1再2 ，有最小延时4ms
  3.经典的for遍历var里面放定时器，会输出相同的值
  for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
  }
  解决办法：1.settimeout包一个立即执行函数把i传进去2.settimeout第三个参数3.let

  4.使用setTimeout和setInterval进行间歇调用
  var executeTimes = 0;
  var intervalTime = 500;
  var intervalId = null;
  
  // 放开下面的注释运行setInterval的Demo
  intervalId = setInterval(intervalFun,intervalTime);
  // 放开下面的注释运行setTimeout的Demo
  // setTimeout(timeOutFun,intervalTime);
  
  function intervalFun(){
      executeTimes++;
      console.log("doIntervalFun——"+executeTimes);
      if(executeTimes==5){
          clearInterval(intervalId);
      }
  }
  
  function timeOutFun(){
      executeTimes++;
      console.log("doTimeOutFun——"+executeTimes);
      if(executeTimes<5){
          setTimeout(arguments.callee,intervalTime);
      }
  }
  5.利用settimeout实现setinterval
  function interval(func, w, t){
    var interv = function(){
        if(typeof t === "undefined" || t-- > 0){
            setTimeout(interv, w);
            try{
                func.call(null);
            }
            catch(e){
                t = 0;
                throw e.toString();
            }
        }
    };
 
    setTimeout(interv, w);
  };
  ```
## 面向对象
- 对象创建的方式有哪些？
  - 工厂模式
  - 构造函数模式
  - 原型模式
  - 组合模式
  - 动态原型模式
  - 寄生构造函数模式
- 对象继承的方式有哪些？
  - 原型链继承有个缺点是如果原型上包含引用类型的数据，因为它们是共享的所以会有修改混乱的问题，还有就是不能在创建子类型的时候不能向父类传递参数
  - 可以看到下面的fateher通过this声明的属性/方法都会绑定在new期间创建的新对象上；
  - 新对象的原型是father.prototype.通过原型链可以查看到father.prototype的属性和方法
  ```
  function father(){
    this.text="父类的this"
  }
  father.prototype.fatherText="父类原型上的属性或方法"
  function son(){
    this.text="子类的this"
  }
  son,prototype = new father(); //将父类的实例赋值给子类的原型
  son.prototype.sonText="子类原型上的属性或方法"
  const sonInstance = new son();
  console.log(sonInstance);

  ```
  - 构造函数继承-在子类中调用超类的构造函数实现，可以传参，但是无法实现函数方法的复用，并且超类原型定义的方法子类无法访问
    - 这个方法是在子类中使用call调用父类，fatherFn将会被立即执行，并且将fatherFn的this指向sonFn的this
    - 因为函数执行了，所以fatherFn使用this声明的函数都会被声明到sonFN的this对象下
    - 实例化子类，this将指向new期间创建的新对象，返回该新对象
    - 对fatherFn.prototype无任何操作，无法继承
    - 但是优点是可以传参，解决了原型链继承中，父类使用this声明的属性会存在实例共享问题,实现了实例化对象的独立性
    - 缺点就是不能继承prototype上的属性/方法，父类方法无法复用，每次子类实例化都要执行父类函数，重新声明父类this里所定义的方法，因此方法无法复用
  ```
  function fatherFn(...arr) {
    this.text = "父类的this属性";
    this.params = arr;
  }
  fatherFn.prototype.fatherFnText = "父类原型对象的属性或者方法";
  function sonFn(fatherParams, ...sonParams) {
    fatherFn.call(this, ...fatherParams); // 将fatherFn的this指向sonFn
    this.panda = "子类的this属性";
    this.sonFn = sonParams;
  }
  sonFn.prototype.sonFnText = "子类原型对象的属性或者方法";
  let fatherParamsArr = ['父类的参数1', '父类的参数2'];
  let sonParamsArr = ['子类的参数1', '子类的参数2'];
  const sonFnInstance = new sonFn(fatherParamsArr, ...sonParamsArr); // 实例化子类
  console.log('借用构造函数子类实例', sonFnInstance);
  打印的结果有fatherFn的params和text以及子类自身的属性，但是没有父类原型上的方法/属性
  ```
  - 组合继承(call+new)，将上面两种组合起来：缺点是：我们以超类的实例作为子类的原型，所以调用了两次超类的构造函数，造成子类的原型中多了很多不必要的属性
    - 可以看到父类this声明的属性/方法，在子类实例的属性上和原型上都复制了一份
  ```
  function fatherFn(...arr) {
  this.some = "父类的this属性";
  this.params = arr;
  }
  fatherFn.prototype.fatherFnSome = "父类原型对象的属性或方法";
  function sonFn() {
    fatherFn.call(this, '借用构造继承', '第二次调用');
    this.panda = '子类的this属性';
  }
  sonFn.prototype = new fatherFn('原型链继承', '第一次调用');
  sonFn.prototype.sonFnSome = '子类原型对象的属性或者方法';
  const sonFnInstance = new sonFn();
  console.log('组合继承子类实例', sonFnInstance);

  sonFn
  panda: "子类的this属性"
  params: (2) ["借用构造继承", "第二次调用"]
  some: "父类的this属性"
  __proto__: fatherFn
    params: (2) ["原型链继承", "第一次调用"]
    some: "父类的this属性"
    sonFnSome: "子类原型对象的属性或者方法"
    __proto__: Object
  ```
  - 原型式继承：基于已有的对象来创建新的对象，向函数中传入一个对象，然后返回一个以这个对象为原型的对象，这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。
    - 因为旧对象是实例对象的原型，多个实例共享被继承对象的属性，存在篡改的可能，这个很明显是因为形参引用值问题
    - 而且无法传参
  ```
  function cloneObject(obj) {
    function F(){}
    F.prototype = obj;  // 将被继承的对象作为空函数的prototype 
    return new F(); // 返回new期间创建的新对象，此对象的原型为被继承的对象，通过原型链找可以拿到被继承对象的属性
  }


  function fun(obj) {
    function Son(){};
    Son.prototype = obj;
    return new Son();
  }        
  var parent = {
      name:'张三'
  }
  var son1 = fun(parent);
  var son2 = fun(parent);
  console.log(son1.name);//张三  看这里，parent这个旧对象是每一个实例的son对象的原型，他们都是共享的，所以可能会被篡改
  console.log(son2.name);//张三
  ```
  - 寄生式继承-寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是自定义类型时。缺点是没有办法实现函数的复用。
    - 它是在原型式继承的基础上，在函数内部丰富对象
    - 优缺点：跟构造函数继承类似，调用一次函数就得创建一遍方法，无法实现函数复用，效率较低。
    - 专门为对象来做某种固定方式的增强
  ```
  function fun(obj) {
      function Son() { };
      Son.prototype = obj;
      return new Son();
  }
  function JiSheng(obj) {
      var clone = fun(obj);
      <!-- 上面这一步可以直接用var clone =Object.create(obj) -->
      clone.Say = function () {
          console.log('我是新增的方法');
      }
      return clone;
  }
  var parent = {
      name: '张三'
  }
  var parent1 = JiSheng(parent);
  var parent2 = JiSheng(parent);
  console.log(parent2.Say==parent1.Say);// false
  ```
  - 寄生式组合继承，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。
    - 它是（call+寄生式封装）
    - 原理借用构造函数（call）来继承父类this声明的属性、方法
    - 通过寄生式封装函数设置父类prototype为子类prototype的原型来继承父类的prototype声明的属性/方法
    - 它是最成熟的继承方式
     1. 只调用一次父类Father构造函数
     2. 避免在子类的prototype上创建不必要多余的属性
     3. 使用原型式继承父类的prototype，保持了原型链上下文不变。子类的prototype只有子类通过prototype声明
     4. 的属性/方法和父类prototype上的属性/方法泾渭分明
  ```
  function fatherFn(...arr) {
    this.some = '父类的this属性';
    this.params = arr;
  }
  fatherFn.prototype.fatherFnSome = '父类原型对象的属性或者方法';
  function sonFn() {
    fatherFn.call(this, '借用构造继承');  // 核心1 借用构造继承：继承父类通过this声明属性和方法至子类实例的属性上
    this.panda = '子类的this属性';
  }
  // 核心2 寄生式继承：封装了son.prototype对象原型式继承father.prototype的过程，并且增强了传入的对象
  function inheritPrototype(son, father) {
    const fatherFnPrototype = Object.create(father.prototype);
    son.prototype = fatherFnPrototype;
    son.prototype.constructor = son;
  }
  inheritPrototype(sonFn, fatherFn);
  sonFn.prototype.sonFnSome = '子类原型对象的属性或者方法';
  const sonFnInstance = new sonFn();
  console.log(sonFnInstance);
  ```
## 垃圾回收&内存泄漏
- 浏览器的垃圾回收机制
- 哪些情况会导致内存泄漏

## 其余
- css堵塞和js堵塞aloso?
  - css文件是并行下载的，它不会阻塞构建dom树，css的下载不会阻塞后面js的下载，但是js下载完之后，会被阻塞执行（！css加载会影响js代码执行？惊惊），因为js可能会获取或改变元素的样式，所以浏览器会等前面的css加载解析完成之后，再执行下面的js
  - 现代浏览器会并行加载js文件，按照书写顺序执行代码，加载或者执行js的时候会阻塞构建dom树，等js执行完毕，浏览器才会继续解析dom，因为js引擎线程和gui渲染线程互斥
  - 如果不想让js阻塞dom树的生成，defer或者async标签，他两都是作用于外链js的，对内部js无效果，他两都是异步，区别在于执行顺序以及执行时间，async加载完就会立即执行，并不会按照书写顺序，谁下载好了就直接执行，所以适用于那些没有代码依赖顺序，并且没有dom操作的脚本文件。而defer会严格按照书写顺序执行，会在domcontentloaded之前，即页面加载完成时执行，适用于有dom操作，或者有代码依赖顺序的脚本文件