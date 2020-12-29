## 对象
- 使用基本数据类型，每一个变量都是独立的，
```js
var obj = new Object(); // var obj ={}; 同样效果 优化代码
    var obj = {
        name : 'KK',
        height : 158,
        age : 18,
        students: {
            name : 'AA',
            age : 22,
        }
    }
        // var name = obj.students.name // 给name定义为AA 
    console.log(obj.name) 

    var a ={c:2};
    var b = a;
    a.c = 5;
    console.log('a',a);
    console.log('b',b);
    console.log('a === b ===>', a === b) // true 它们是同一个对象所以相等

    var d ={c: 5};
    console.log('a === c ===>', a === d) // false d是新建的一个对象，所以不相等
```

## 函数 通过function关键字进行定义 后面是函数名和()
- 函数也是一个对象
- 函数中可以封装一些功能，执行一定的功能。
- 保存代码，在需要时调用

```js
    var func = new Function("console.log('hello~');");

    func();

    func.a = 1;

    console.log(func.a)
    // 或者这么写
    function a(){

    console.log('hello~ !!!');
    }

    // a();
```

### 作用域
#### 全局作用域
 ```js
 var a = 1
 console.log(windows.a) // 调用全局的变量a 如果没有定义a 会显示undefined
 console.log(a) // 如果没有定义a 会报错
 ```
#### 函数作用域

### 立即执行函数
```js
(function(a){
    console.log(a)
}(123))
```
 
### New
- （ 做了什么） 1. 创建一个新对象
- 2.将构造函数的作用域赋给新对象（this指向这个新对象）
- 3.执行构造函数中的代码，为这个新对象添加属性
- 4.返回新对象