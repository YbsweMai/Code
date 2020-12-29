# call apply bind

- .改变this指向

```js
let person = {
    name:'isen',
    sayName:function (){
        console.log('I am ' + this.name)
    }   
}

let person2 = {
   name:'Lily'
}

person.sayName.call(person2) //Lily


// 传参
function fakeSayName(v1,v2){
    console.log(this.name + v1 + v2)
}

fakeSayName.call(person2,1,2)  // Lily12

fakeSayName.apply(person2,[1,2]) // apply的传参方式 和call一样改变this指向 且都立刻调用

fakeSayName.bind(person2) // 返回的是一个函数
fakeSayName.bind(person,1,2)()  // bind 这样进行函数调用

// 求数组最大值
let arry = [1,3,6,8,9,10]

console.log(Math.max.apply(null,arry))

// 改变传参的方式
function FakeMath(){
    this.sum = function(v1,v2,v3){
        return v1+v2+v3
    }
}

const fakeMath = new FakeMath()
console.log(fakeMath.sum.apply(null,arry))

//用自己的方式写一个call 实现fakeCall 调用之后满足如下条件
// 1.返回的结果为调用fn之后的结果
// 2.fn的调用参数为fakeCall的第一个参数之后的全部参数

var a = 1;
var b = 2;
var test = function(first,second){
    return first === a && second === b;
}

// console.log(test(a,b))
console.log(fakeCall(test,a,b))

function fakeCall (fn){

    let array = [];
    for(let i = 1; i<arguments.length;i++){ // i = 1 Call里面下标为0的永远是一个函数 所以要从第二个也就是1来取参数
        array.push(arguments[i])
    }

    return fn.apply(null,array)
}

```

# 浅拷贝 深拷贝
## 浅拷贝 一、只拷贝只有一层对象的数据 数据可以改变
```js
let obj1 = {
    name:'isen',
    age: 28
}

let obj2 = Object.assign({},obj1);

obj2.age = 18
console.log(obj1)
console.log(obj2)
```
## 二、有多层对象的时候 拷贝的是地址 改变属性时 obj1和obj2全都改变
```js

let obj1 = {
    name:'isen',
    age: 28,
    obj:{
        a:1
    }
}
obj2.a = 3;
let obj2 = Object.assign({},obj1);

console.log(obj1)
console.log(obj2) // { name: 'isen', age: 28, obj: { a: 3 } }

let obj2 = Object.assign({a:1},obj1) // { a: 1, name: 'isen', age: 28, obj: { a: 3 } }
```

## 深拷贝 使用JSON.parse(JSON.stringify())生成一个新对象 属性改变不受影响 不支持转换函数和正则表达式
```js
let obj1 = {
    name:'isen',
    age: 28,
    obj:{
        a:1
    }
}

let obj2 = JSON.parse(JSON.stringify(obj1))

obj2.age = 18;
obj2.obj.a = 3;

console.log(obj1)
console.log(obj2)
```

# 防抖与节流
## 节流（throttle） 用lodash _.throttle 
- 在规定时间下 多次触发函数只执行一次
```js
_.throttle(()=>{
    console.log(1)
},1000)
```

## 防抖 (debounce)
- 在事件触发n秒之后再执行，如果这n秒内又被触发，则重新计时