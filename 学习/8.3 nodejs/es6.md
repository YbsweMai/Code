# es6 (ECMA2015)
## let / const
### 块级作用域 let var区别
- 1.let声明的时候提供了一个块级作用域（花括号） 在作用域外拿不到let声明的变量，而var声明没有提供块级作用域
```js
{
    let a = 1;
    var b = 2;
}
console.log(a); // undefined  
console.log(b); // 2
```

- 2.不存在变量声明提前
```js
let a;
console.log(a); // undefined
a = 1;
```

- 3.暂时性死区

- 4.不允许重复声明

### const（常量） 用作固定不变的 一般用来从别的模块拿东西的时候
```js
const a = 1;
a = 2; // 报错 常量不能重新赋值

// 2.
const obj = {};  // 如果是对象 保存的是内存地址
obj.a = 1
console.log(obj);  // a : 1 如果是对象可以给属性赋值 因为内存地址没有改变
```

## 解构赋值
```js
// 只要左右结构一样 都可以赋值
let [a,b,c] = [1,2,3];
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(bar);

let [ , , third] = ["foo","bar","baz"];
console.log(third);

let [x,y] = [1,2,3];
console.log(x,y); // 1 , 2

let [a,[b],c] = [1,[2,3],4];
console.log(b); //  2

let [ foo = 2] = [];
console.log('foo===>',foo); // 2  

let [ foo = 2] = [3];
console.log('foo===>',foo);  // 3  如果右边给foo赋值了 那么foo就等于右边的值

let [x,y='b'] = ['a',undefined];
console.log(x,y); // a  b 

// 右边的值在undefined的情况下，左边才会采取默认值(不包括null)

let [x = 1] = [null];
console.log(x); // null

let { foo, bar} = {foo:'aaa',bar:'bbb'}
console.log(foo,bar); // aaa  bbb
console.log(foo1); // undefined

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz); // aaa   将foo改名为baz

```

## 箭头函数
```js
// 1 原始
let func = function(x){
    return x*x;
}
console.log(fun(2)); // 4

// 2 简洁1
let func = (x) =>{
    return x*x;
}

// 3 简洁2
let func = (x) => x*x;
// let func = (x,y) => x*y;

```

## 模版字符串
```js
let name = 'KK'
let str = `I am ${name}`;
```

## Set
- 类似于数组，但是成员的值都是唯一的（去重） ，没有重复的值
通过add来添加成员
```js
// Set  去重案例
let s = new Set();
let array = [2,3,4,5,6,2,2,2,2,2];
array.forEach(item => s.add(item));
console.log(s);  // {2,3,4,5,6}
console.log(s.has(2)); // true  has是否有2
console.log(s.size); // 5  s的长度 相当于length
// .delete删除数组
console.log(s.delete(2));
console.log(s); // {3,4,5,6}
```

## Map 把原先的数值拿出来操作返回原来
```js
let map = new Map();

let obj = {
    a:1
}

let a = 1;

console.log(obj);
map.set(obj,'1234');
map.set(a,'1111')

console.log(map);

console.log(map.get(obj));

console.log(map.size);

console.log(map.values());

map.delete(obj);

console.log(obj);

// 案例 map 计数
let map = new Map();
let array = [2,3,4,5,2,2,2,2,2,2];
array.forEach((item)=>{
    // 如果map里面没有就进入
    if(!map.get(item)){
        // 新插入一个key-value值，代表第一次遇到这个数字
        map.set(item,1);
    }else{
        // 如果这个数字已经存在，获取之前计算的次数，然后+1
        map.set(item,map.get(item)+1);
    }
})
console.log(map);
//
let array = [{a:1},{a:2}]
array = array.map((item)=>{
    item.b = 2;
    return item
})
console.log(array); // {a:1,b:2},{a:2,b:2}

//
let num = [1,2,3,5];
// map 返回一个新生成的数组
num = num.map(item => item*item)

console.log(num); //  1,4,9,25
```



## for of 循环

## 常用模块&回调

### path
```js
const path = require('path')
let address = 文件路径
console.log(path.basename(address)); // 获取文件名
console.log(path.dirname(文件路径)); // 获取文件夹路径
console.log(path.extname(文件路径)); // 获取文件后缀名
console.log(path.format({
    dir:'路径'
    base:'文件名'
})); // 以对象的方式读取文本
 

// 使用系统平台特定的分隔符把全部给定的path片段连接到一起，并规范化（拼接)
path.join('/foo','bar','baz/asdf','banyuan');
path.join('/foo','bar','baz/asdf','banyuan','..');

// 规范化给定的path，并解析'..'和'.'
path.normalize('/foo/bar//baz/asdf/quux/..');

// 从相对路径进入另一个文件夹
path.relative('/data/abc/cde/efg','/data/abc/kkk/lll');
```

## fs(file system)回调函数
- 定义：回调是指在一个函数执行完成之后被调用的函数，因此得名回调。
```js
console.log(process.cwd()); // 查看当前工作路径

console.log(__dirname); //  此文件处于的文件夹（绝对路径）

// readFile 读取文件
fs.readFile(path.join(__dirname,'./1.txt'),(error,data)=>{
       // 1.通过join dirname 绝对路径进行拼接  2.error错误优先回调
    if(error){
        console.log(error);
    }else{
        console.log(data);
        // 输出内容不对 解决方法 console.log(data.toString());
    }
});

// writeFile 写入文件
fs.writeFile(path.join(__dirname,'./2.txt'),'666666',(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('success');
    }
});

// 写一个2.txt 再读出来

fs.writeFile(path.join(__dirname,'./2.txt'),'666666',(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('success');
        fs.readFile(path.join(__dirname,'./2.txt'),(error,data)=>{
            // 1.通过join dirname 绝对路径进行拼接  2.error参数错误优先
           if(error){
               console.log(error);
           }
           else{
               console.log(data.toString());// 输出内容不对 解决方法 console.log(data.toString());
           }
       });
    }
});

// 案例3  写两个文件后读出来 再写第三个把前两个文件内容拼接读出来  案例在day02的js里
```

### 回调地狱 解决方案
- promise： 是一个对象，


