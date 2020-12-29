## Dom
- 是文档对象模型，将html网页转换成一个文档对象，主要用来处理网页内容。
### 获取文档元素（看当天html记录）
```js
var ele = documents.getElementByID('');
var ele1 = documents.getElementsByClassName('');
var ele2 = documents.getElementsByTagName('div')(标签名)
```
### 获取属性
```js
var inputEle = document.getElementById('input');// 先获取元素
var val = inputEle.getAttribute('value');// 再获取元素中属性
// console.log(val);
// console.log(inputEle.value);
inputEle.setAttribute('value','测试1231'); // 改变属性
```

### 子元素
```js
// 元素节点：1
// 属性节点：2
// 文本节点：3
// 注释节点：8
```

### 写入元素
- createElement:创建一个元素
- xx.appendChild(xxx) 把xxx放入xx里
```js
document.getElementById('test-wirte').innerHTML = '123'; // 写入文本

var para = document.createElement('p'); // 创建一个标签
	
var parent = document.getElementById('parent');// 获取id为parent元素

parent.appendChild(para); // 把名为para创建的p标签放入 parent里

para.innerHTML = 'hello';// 在创建的p标签里写入文本
```

## 事件
- on-xxx
```
<div onclick='test'> <div>
<script>
function test(){
    console.log(1);
}
<script>
```

- 节点的事件属性
- 增加事件监听 addEventListener（）

### 常用的事件（见w3c）
- on foucs：获取焦点
- obblur：失去焦点
- onchange： 元素改变的时候
- oninput：输入的时候

## Bom
