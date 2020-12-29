# Vue
- 用于构建用户界面的渐进式js框架 （基于MVVM结构）

## MVC
- Model：数据处理
- View：负责视图，页面显示
- Controller：逻辑处理

## MVVM
- Model：数据处理
- View：负责视图，页面显示
- ViewModel：监听者，双向监听，模型和视图之间的交互

### MVC与MVVM区别
- MVVM要解决的一个问题是将业务逻辑代码与视图代码完全分离，使各自的职责更加清晰
- MVVM与MVC最大区别：它实现了View与Model的自动同步，也就是当Model

## Vue特点
- 市场需求大
- 渐进式框架
- 学习成本小：语法简单，文档较全，基于HTML的模版语法更友好
- 组件化开发，提高开发效率
- 数据驱动：MVVM

## 模版语法
```js
<div id="app">
  {{ message }}  /* 引用new Vue里data对象 */
    <h1>{{str}}</h1>
</div>


var app = new Vue({
  el: '#app',   /* 绑定id为app的标签 */
  data: {
    message: 'Hello Vue!',
    str:'我是一个字符串'
  }
})
```