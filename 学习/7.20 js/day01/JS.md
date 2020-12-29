# JavaScript
### 什么是前端交互
- 数据交互：从后端存取数据，数据上的交互
- 用户交互：使用动画等和用户交互

### 编写位置
- script标签写在body和html结束标签之间

### 变量与字面量
- var str=‘123’ （str是变量 123是字面量）

### 标识符
- 变量名 函数名 属性名 （可以含有字母数字_$ 不能以数字开头 不能是js中的关键字或者保留字）

### 转义字符
- \"123\"
- \\ \n换行
- \\ \t制表

## 数据类型
### 基本数据类型
#### 字符串string（str）
- 需要用引号
- 单双引号都可以
- 在字符串中，可以用转义字符，表示一些特殊符号
```javascript
var str = 'banyuan';

// \"   "
// \n   换行
// \'   '
```

#### 数字Number（n）
- 所有的数值都是数字类型
- 包括了整数和小数
- 如果超过最大值，返回Infinity （无穷）
- NaN （ not a number ）
- 精度丢失，在js中减少精确度很高的计算。

```javascript
var a = 123;
var b = '123'

typeof a;

// 最大值
Number.MAX_VALUE

//NaN
console.log('abc' * 'abc');

//精度丢失
var num = 0.1 + 0.2;

var num = (1 + 2)/10;
```

#### 布尔
- true 真
- false 假

#### null
- 专门用来表示一个空的对象

#### undefined
- 只有一个值 就是undefined
- 声明一个变量并不给其赋值，但是还没有定义

#### null与undefined区别
- null表示“没有对象” 即该处不应该有值
- undefined表示“缺少值”，就是此处应该又一个值，但还没有定义

### 强制类型转换（typeof 查看变量类型）
将一个数据类型强制转化为其他的数据类型

- String
- Number
- Boolean

```javascript
// 转string
var a = 123;

a.toString();

var a = null;

a.toString(); // null与undefined会报错。

String(a) // null 与 undefined不会报错

// 转number
// 如果是纯数字，则直接转换成数字
// 如果不是纯数字，则转换为NaN   undefined: NaN. null: 0
// 如果字符串是一个空的，则为0
Number(a);

//parseInt()   parseFloat()
// 专门用来对付字符串
var a = '123px';

parseInt(a);
// 注意
var a = 'a123abc';
var a = '123.222asda';
parseInt(a);


// 转换进制
// js中如果需要表示16进制，则需要0x开头

var a = 0x10；

// 以0开头为8进制数字
var a = 010
var a = '010'  // 浏览器兼容性可能有问题，不一定按8进制解析

// 使用parseInt(a,xx)
parseInt(a,8);



//boolean
Boolean();

// 除了0和NaN,其余都是true
var a = 123 //true
var a = 0 //false
var a = Infinity//true
var a = NaN //false

// 除了空串，都是true
var a = 'str' //true
var a = ''//false

//null 与 undefined都是false
var a = null //false
var a = undefined //false

```

### 算术运算符
- + 加法（ 当对非number类型的值进行运算时，会将其转换为number类型 任何值和）
- % 取余
```javascript

//当对非Number类型的值进行运算时，会将其转换为Number类型
//任何值和NaN做运算都为NaN
//对字符串做加法，结果返回字符串
//任何值和字符串做加法运算，都会先转化为字符串再计算


var a = 123 + 223;

var a = true + 1;

var a = '123' + '456';

var a = '123' + 456;

//转化成字符串
var a = 123 + '';

// 从左往右
var a = 1 + 2 + '3';

var a = 1 + '2' + 3;

// 其他运算，都是转换成number
// - * / %
var a = 2 * undefined


//取模 （ 取余数 ）
var a = 9%3

var a = 9%4
```



### 自增自减
#### 自增
- 前自增 先增后用
- 后自增 先用后增
- 通过自增可以使变量在自身基础上加1
- 对于一个变量自增之后，原变量的值会立即自增1
- 自增分为两种： ++a与a++
  - 无论a++还是++a，都会立刻使原变量的值自增1
  - 前自增运算符是先加1，再使用操作数的值，后自增运算符是先使用操作数的值，再加1

```javascript
var a; // 变量

a + 1; // 表达式

var a = 1;

console.log(a++);  

console.log(++a);  

var a = 20;

var result = a++ + ++a + a; // 64

a = a++;

console.log(a); // 20


```



## 自减同上



### 练习：

```javascript
	var  n1 = 10;
	var  n2 = 20;
	
	var n = n1++;
	
	console.log("n="+n);
	console.log("n1="+n1);
	
	n=++n1;
	console.log("n="+n);
	console.log("n1="+n1);
 
	n = n2--;
	console.log("n="+n);
	console.log("n1="+n2);
	
	n=--n2;
	console.log("n="+n);
```



### 逻辑运算符
- ! 非
- && 与
- || 或

```javascript
// !
// 对一个值进行非运算，取反
var a = false;
console.log(!a);

//对非boolean做非运算
//先转换成boolean，再运算
var a = 10;
console.log(!a);

//tips
//可以使用来将非boolean转化成boolean值
var a = 10
console.log(!!a);


//&&
//与运算规则：
// 都是true ==》 true
// 只要有false就返回false
var a = true && false;

//短路
//如果第一个值就为false，就停止判断
false && console.log(' test ');



//||
//或运算规则：
//有true就返回true
//不能短路，全部判定
var a = false || true
```



## 与或的运算

```javascript
// && ||
// 先转成bollean再运算,再返回原值。

// && 都为true 返回后边的
var a = 1 && 2

// && 有false ，返回false
a = 0 && 1;

// && 都为false，返回前边的
a = 0 && NaN;

//符合短路原理

// ||

// 第一个值为true，返回第一个值
var a = 2 || 1 

// 第一个值为false，返回第二个
var a = NaN || 1;