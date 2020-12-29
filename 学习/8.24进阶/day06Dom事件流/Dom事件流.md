# DOM事件流
- 事件捕获 从外到内
- 事件冒泡 从内到外 
- 先捕获再冒泡 （将冒泡第一个元素放入捕获最后面）
```js
//事件冒泡

div1.onclick = function(){
    console.log("冒泡1.5 Click div1");
}

document.body.onclick = function(){
    console.log("冒泡2.Click Body");
}

document.onclick = function(){
    console.log("冒泡3.Click document");
}

window.onclick = function(){
    console.log("冒泡4.Click window");
}

//事件捕获
window.addEventListener("click",function(){
    console.log("捕获4.Click window");
    // event.stopPropagation();   停止传播
},true);

document.addEventListener("click",function(){
    console.log("捕获3.Click document");
},true);

document.body.addEventListener("click",function(){
    console.log("捕获2.Click body");
},true);

div1.addEventListener("click",function(){
    console.log("捕获1.5 Click div1");
},true);

btn.addEventListener("click",function(){
    console.log("捕获1.Click btn");
},true);

btn.onclick = function(){
    console.log("冒泡1.Click btn");  // 冒泡
}
```

## 事件委托
- 也叫事件代理（定义：）


## 优点
- 1.减少内存消耗
- 2.动态绑定事件

## 缺点
- 1.focus、blur之类的事件本身没有冒泡机制，所以无法委托
- 2.mousemove、


# 重绘与回流

## 重绘
- 不影响布局

## 回流
- 影响布局