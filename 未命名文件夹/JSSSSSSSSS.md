# JavaScript （查阅MDN文档） 
## 书写位置
- 行内式 
- 内嵌式
- 外部js

## 输入输出语句
- alert（msg）游览器弹出警示框
```js
alert('123') 
```
- console.log(msg) 游览器控制台打印输出信息
```js
console.log('123')
```
- prompt（msg）游览器弹出输入框，用户可以输入
```js
prompt('123')
```

## 变量
### 定义
- 用于存放数据的容器。通过变量名获取数据，甚至数据可以修改。（就是一个装东西的盒子）。

### 用法
- 1、var a 声明一个叫a的变量 2、var a = 10 给a这个变量赋值为10

### 更新变量(更新变量时不需要var重新赋值)
```js
var myname = ltt;
    myname = gch;
```
### 同时声明多个变量(用英文逗号隔开，最后一个变量加;)
```js
var myname = gch,
    age = 18,
    birthday = 8;
```
### 声明变量的特殊情况
- 只声明不赋值
```js
var sex;
console.log(sex)  undefiend(未定义的)
```

- 不声明不赋值
```js
console.log(dog) 不声明不赋值直接使用某个变量会报错
```

- 不声明直接赋值
```js
qq = 10
console.log(qq)  输出为10（不声明直接赋值可以使用）不提倡
```

### 变量的明明规范
- 由字母，数字，下划线，美元符号组成
- 严格区分大小写
- 不能以数字开头 如 18age
- 不能是关键字，保留字 比如var，for，while
- 变量名必须有意义
- 遵守驼峰命名法。首字母小写，后面单词首字母需大写

### 交换两个变量值
```js
var apple1 = '青苹果'
var apple2 = '红苹果'
var temp;           声明一个临时未定义变量
    temp = apple1;   把apple1给temp
    apple1 = apple2; 把apple2给空了的apple1
    apple2 = temp;   再把临时变量里的apple1给apple2
```

## 数据类型
### 简单数据类型
#### 数字型number（num） var a = 10； 默认0
(在js中八进制前面加0，十六进制前面加0x)
```js
Number.MAX_VALUE 最大值
Number.MIN_VALUE 最小值
数字型三个特殊值
Infinity 代表无穷大，大于任何数值
-Infinity 代表无穷小，小雨任何数值
NaN为Not a Number 代表一个非数值
isNaN（）用来判断是否为非数字 并且返回一个值 如果数字返回的是false 如果不是数字返回的是true
console.log(isNaN(123)); false
console.log(isNan('asdf')); true
```

#### 字符串型 string（str） var a = ‘10’； 默认""
- 字符串型可以是引号中的任意文本，语法为双引号或单引号
- 转义符号
```
\n    换行
\\    斜杠
\'    单引号
\"    双引号
\t    tab缩进
\b    空格 b是blank的意思
```
- 字符串长度
```js
// 字符串是由若干个字符组成的，这些字符的数量就是字符串的长度。通过字符串的length属性可以获取整个字符串的长度。
var str = 'my name is gch';
console.log(str.length); 
```

- 字符串拼接
```
多个字符串之间可以使用+进行拼接，其拼接方式为字符串+任何类型=拼接后的新字符串。
只要有字符串和其他类型相拼接，最终结果是字符串类型
口诀 数值相加 字符相连
```

- 字符串拼接加强
```js
var age = '18';
console.log('牛kk' + age + '岁') 书写口诀引引++
```

### 布尔值类型 Boolean （true和false 等价于1和0）
```js
// 布尔型和数字型相加的时候，true的值为1 false的值为0
console.log(true + 1); // 2
console.log(false + 1); // 1
```

### undefined  （ var a；声明了变量但没有给值 a = undefined） 默认undefined
- 一个声明后没有被赋值的变量会有一个默认值undefined（如果进行相连或相加时，注意结果）
```js
var a = undefined
console.log(a + '123'); // undefined123 和字符串相连结果为字符串
console.log(a + 123); // NaN 和数字相加最后结果是Nan
```

 ### null  （var a = null； 声明了变量a为空值）
- 一个声明变量给null值，里面存的值为空
```js
var a = null
console.log(a + '123'); // null123
console.log(a + 1); // 1
```

## 获取变量数据类型
- typeof 可用来获取检测变量的数据类型
```js
var num = 10;
console.log(typeof num); // number

var age = prompt('请输入你的年龄')
console.log(age) 显示为字符串
console.log(typeof age) 验证显示为string字符串
所以prompt取过来的值是字符型的
```

### 字面量
- 字面量是在源代码中一个固定值的表达方法，通俗来说就是字面量表示如何表达这个值。
- 数字字面量：8，9，10
- 字符串字面量："半圆学社"，"Web前端"
- 布尔字面量：true，false

## 数据类型转换
### 转换为字符串类型

方式    | 说明 | 案例
---|---|---
toString（） | 转成字符串 | var num= 1； console.log(num.toString()) 
String() 强制转换 | 转成字符串 | var num= 1; console.log(String(num))
加号拼接字符串 | 和字符串拼接的结果都是字符串 | var num = 1； console.log(num + "123")

```js
var num = 10;
var str = num.toString() // 第一种把数字型转为字符串型 写法变量.toString()

var num = 10；
console.log(String(num)) //第二种利用String（变量） 

var num = 10；
console.log（num + "123"）// 第三种利用+号拼接字符串的方法实现（也称为隐式转换）
```

### 转换成数值型(重点)

方式 | 类型 | 案例
---|---|---
parseInt（string）函数 | 将string类型转成整数  |   parseInt（“78”）
parseFloat（string）函数 | 将string类型转成浮点数 | parseFloat（"78.21"）
Number（） 强制转换函数| 将string类型转换为数值 | Number（"12"）
js隐式转换 （- * /）| 利用算数运算隐式转换为数值型 | "12" - 0


### 转换成布尔型

方式 | 类型 | 案例
---|---|---
 Boolean（）函数 | 其他类型转成布尔值 | Booleean（'true'） 
- 代表空、否定的值会被转为false，如' '，0，NaN、null、undefined，其余为true。
```js
console.log(Boolean(''));  // false
console.log(Boolean(0))   //  false
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean('小白'))  // true
console.log(Boolean(12))  // true
```
### 标识符、关键字、保留字
- 标识符：指开发人员为变量、属性、函数、参数取的名字（不能是关键字和保留字）
- 关键字：指js本身已经使用了的字，不能再用它们充当变量名和方法名。
- 保留字：实际上就是预留的“关键字”，意思现在还不是关键字，但未来可能会，同样不能充当变量名和方法名。

## 运算符
### 算术运算符
- （+ - * / %（取余））
- 表达式 由数字、运算符、变量等组成的式子
```js
console.log(1 + 1);  // 结果2就是返回值
```
### 自增和自减运算符
#### 自增
- 前置自增 ++a 类似于 a=a+1 （先自加1，后返回值）
- 后置自增 a++ 表达式单独使用时 a=a+1（先返回原值后自加）
```js
var a = 10;
console.log(a++); // 此时先返回原值 10
console.log(a);   // 现在再自加1 a的值就成了11
```
### 比较运算符
- 两个数据进行比较时用到的运算符，比较运算后，会返回一个布尔值（true / false）作为比较运算的结果。
```
- （ = > < >= <=  ==（会转型） !=（不等于） === !==（全等 要求数值和数据类型都一样)）
```

### 逻辑运算符
- 是用来进行布尔值运算的运算符，其返回值也是布尔值。后面开发中经常用于多个条件的判断。
- && 逻辑与，简称与、and 案例true && false（两侧都为true 结果才是true 只要有一侧false 结果就为false）
- || 逻辑或，简称或、or  案例 true || false （两侧都为false 都为false，只要有一侧true 结果就为true）
- ! 逻辑非，简称非、not  案例 ！true
- 短路运算逻辑与 如果表达式1为真，则返回表达式2。 如果表达式1为假，则返回表达式1
```js
console.log(123 && 456);  // 456
console.log(0 && 456);  // 0
如果有空的或者否定的为假 其他是真的 假的有‘ ’（空字符串）、0、null、undefined、NaN
```
- 短路运算逻辑或 如果表达式1为真，则返回表达式1。如果表达式1为假，则返回表达式2.
```js
console.log(123 || 456); // 123
console.log(0 || 456); // 456
console.log(0 || 456 || 567); // 456
```
```js
注意例子
var a = 0
console.log( 123 || a++)
console.log(a) // a结果为0 因为逻辑或短路表达式1为真时，返回了表达式1，则表达式2不进行操作 所以a++没有运行 所以a为0）
```

### 赋值运算符
- = 直接赋值 案例 var a = ’我是值‘
- +=、-= 加、减一个数后再赋值 var age = 10； age+=5， // 15
- *=、/=、%= 乘、除、取余后再赋值  var age =2； age*=5； //10
```js
var age =10
age += 5; 相当于 age = age + 5;
age -= 5 ;相当于 age = age - 5；
age *= 5； 相当于 age = age*5；
```
### 运算符优先级
- 优先级 |  运算符  |  顺序
- 1  小括号 （）
- 2  一元运算符 ++ -- ！案例 ++a ！a
- 3  算术运算符 先* / % 后+ -
- 4  关系运算符 >、 >=、 < 、 <=
- 5  相等运算符 == 、!= 、=== 、!==
- 6  逻辑运算符 先&&后||
- 7  赋值运算符  =
- 8  逗号运算符  ，

## 流程控制-分支
### 流程控制
- 就是来控制我们的代码按照什么结构顺序来执行 主要有三种结构顺序结构、分支结构、循环结构，这三种结构代表三种代码执行的顺序。
- 顺序结构：按照代码的先后顺序，依次执行。
- 分支流程控制：上到下执行代码的过程中，根据不同的条件，执行不同的路径代码（执行代码多选一过程），从而得到不同的结果。JS语言提供了两种分支语句（if语句、switch语句）
#### if语句
```js
//  1. if语法结构
 if(条件表达式){
     条件成立执行的代码语句
 }
    2. 执行思路 如果if里面的表达式结果为true则执行花括号里面的执行语句，如果表达式结果为false，则不执行花括号里面的执行语句，则执行if语句后面的代码。
    3.代码体验
    if(3 < 5){
        alert('123')
    }
```
- if else语句（双分支语句）
```js
    // 语法结构
    if(条件表达式){
        // 执行语句1 
    } else{
        // 执行语句2 
    }
    // 执行思路 如果表达式为真 执行语句1，如果表达式为假，则执行语句2
    if(3<5){
        alert('yes')
    } else{
        alert('no')
    }
```
- if else if 多分支语句（就是利用多个条件来选择不同的语句来执行 得到不同的结果 多选1的过程）
```js
// 语法规范
    if(条件表达式1）{
        // 语句1
    } else if（条件表达式2）{
        //语句2
    } else if（条件表达式3）{
        // 语句3
    } else{
        // 最后的语句
    }
```
- 三元表达式：有三元运算符组成的式子称为三元表达式
```js
//语法结构
条件表达式？ 表达式1：表达式2
//执行思路
如果条件表达式结果为真，则返回表达式1的值。如果条件表达式结果为假，则返回表达式2的值。
//代码体验
var num = 10；
num > 5 ? '是的' : '不是' //表达式是有返回值的所以需要结果，所以定义一个变量
var a = num > 5 ? '是的' : '不是'
console.log(a)
```
#### switch语句
- switch：也是多分支语句，它用于基于不同的条件来执行不同的代码。当要针对变量设置一系列的特定值的选项时，就可以使用switch。
```js
//语法结构 switch 转换、开关  case 小例子或者选项的意思 
switch(表达式）{ 
    case value1:
        // 表达式的值等于value1时，执行语句1；
            break;
    case value2:
        //表达式的值等于value2时，执行语句2；
            break;
            
    ...
    default:
        //表达式的值不等于任何一个value时要执行的代码
}
// 执行思路 利用我们的表达式的值和case后面选项值相匹配，如果匹配上就执行该case里的语句，如果都没有匹配上，那么执行default里面的语句
// 代码验证
switch (2){
    case 1:
        console.log('这是1')
        break;
    case 2:
        console.log('这是2')
        break;
    default:
        console.log('没有结果')
}
//注意事项
// 1 表达式 经常写成变量
// 2 a的值和case里的值相匹配的时候必须是全等关系 也就是值和数据类型一致才可以 a === 3
// 3 如果当前的case里面没有break 则不会退出switch 是继续执行下一个case
 var a = 3;
 switch(a){
     case 3:
     console.log(3）；
     break；
 }
```
### switch语句和if else if语句的区别
- 一般情况下，它们两个语句可以相互替换
- switch...case语句通常处理case为比较确定值的情况，而if...else语句更加灵活，常用于范围判断(大于、等于某个范围)
- switch语句进行条件判断后直接执行到程序的条件语句，效率更高。而if...else语句有几种条件，就得判断多少次。
- 当分支比较少时，if...else语句的执行效率比switch语句高
- 当分支比较多时，switch语句的执行效率比较高，结构更清晰。

## 循环
- 目的：重复执行某些代码

### for循环
```js
// 1.重复执行某些代码，通常跟计数有关系
// 2.语法结构
for(初始化变量;条件表达式;操作表达式){
    //循环体
}
// 3.初始化变量就是用var声明的一个普通变量，通常用于作为计数器使用
// 4.条件表达式就是用来每一次循环是否继续执行，就是终止的条件
// 5.操作表达式就是每次循环最后执行的代码，经常用于计数器变量进行更新（自增或者自减）
// 6.代码体验 重复打印100句 你好
for(var i = 1; i<=100;i++){
    console.log('你好')
}
// 1. 首先执行里面的计数器变量也就是 var i =1 。但是这句话只在for 循环里执行一次 i是index的意思
// 2. 取i<=100来判断是否满足条件，如果满足条件，就去执行循环体，不满足条件则退出循环
// 3. 最后执行i++，i++是单独的代码 第一轮结束
// 4.接着执行 i<=100 如果满足条件就去执行循环体，不满足退出循环
```
```js
// 循环重复执行相同代码
var num = prompt('请输入次数')
for(var i = 0; i <= num; i++){
    console.log('123')
}
```
```js
// 循环执行不相同代码 因为有计数器变量i的存在 i每次循环值都会变化
// 输出一个人一百岁
for(var i =1 ; i<=100;i++){
    console.log('这个人今年'+ i +'岁了') // 这样就会输出这个人今年1岁了、这个人今年2岁了（因为直接写i是个字符串所以需要转换成变量数字
for(var i = 1;i<=100;i++){
    if(i==1){
        console.log('这个人今年1岁，出生了')
    }else if( i == 100){
        console.log('这个人今年100岁，他死了')
    }else {
        console.log('这个人今年'+ i +'岁')
    }
}
}
```
### 双重for循环
```js
// 1.语法结构 
for（外层初始化变量；外层表达式；外层操作表达式）{
    for(里层初始化变量；里层表达式；里层操作表达式){
        // 执行语句
    }
}
// 2.把里面的循环看作是外层的循环语句
// 3.外层循环一次，里层循环全部
// 4.代码验证
for(var i = 1;i<=3;i++){
    console.log('这是外层循环的第'+ i +'次')
        for(var j = 1;j <= 3;j++){
            console.log('这是里层循环的第'+ j +'次')
        }
    }
```
```js
// 打印一行星星
for(var i = 1 ;i <=5;i++){
    console.log('⭐️') 
} // 这样是打印出五行一颗星星 要打印在一行可以用追加字符串方法 把五颗星星做成一个字符串
var str = ''
for(var i = 1; i<=5;i++){
    str = str + '⭐️'
}
console.log(str)


```
```js
// 打印五行星星
var str = '';
for(var i = 1;i<=5;i++){  // 外层循环负责打印五行
    for(var j = 1; j <=5;j++){ // 里层循环负责打印五颗星
        str = str + '⭐️'
    }
    // 如果一行打印五个星星后需要另起一行 加\n
    str = str + '\n'
}
console.log(str)

// 正三角形
var str = '';
for(i = 1 ; i<=10;i++){
    for(j = 1; j<=i; j++){ 
        //for(j = i;j <= 10; j++) 倒三角形
        str = str + '⭐️'
    }
    str = str + '\n';
}
console.log(str);

// 九九乘法表
var str = ''
for(i = 1;i<=9;i++){
    for(j= 1;j<=i;j++){
    str =str + j + 'x' + i + '=' + i * j + '\t';
    }
    str = str + '\n'
}
console.log(str)
```

### while循环
- 在条件表达式为真的前提下，循环执行指定的一段代码，直到表达式不为真时结束循环。
```js
// 1.语法结构
while(条件表达式){
    // 循环代码
}
// 2.执行思路 当条件表达式为true时执行循环体，否则退出循环
// 3.代码验证
var a = 1;
while(a<=100){
    console.log('123');
    a++;   //如果没有操作表达式（a++），输出结果a永远小于100 导致无限循环
}
// 求1-100整数之间的和
var sum = 0;
var a = 1;
while(a<=100){
    sum = sum + a;
    a++;
}
console.log(sum);

// 弹出一个提示框（我爱你），如果输入我爱你就结束循环，否则一直循环
var a = prompt('你爱我吗?')
while(a !== '我爱你'){
    var a = prompt('你爱我吗?') // 可以不加var
}
alert('我也爱你')
```

### do while循环
```js
// 1.语法结构
do{
    // 循环替代码
}while（条件表达式）
// 2.do while先执行一次循环体 再判断条件 如果条件表达式结果为真，则继续执行代码，否则退出循环。
// 3. 代码验证
var i = 1;
do {
    console.log('123')
    i++
}while(i <=100)

// 弹出一个提示框（我爱你），如果输入我爱你就结束循环，否则一直循环

do{
    var a = prompt('你爱我吗')
}while(a !== '我爱你')
alert('我也爱你')
```

### continue和break关键字
- continue关键字用于立即跳出本次循环，继续下一次循环（本次循环体中continue之后的代码就会少执行一次）
```js
var i = 1;
for(i = 1; i <= 5;i++){
    if(i == 3){
        continue;  // 只要遇见continue就退出本次循环 直接跳到i++
    }
}
console.log(i)

// 求1-100之间除了能被7整除之外的整数和
var sum = 0;
var i = 1;
for(i=1;i<=100;i++){
    if(i%7==0){
        continue;
    }
    sum = sum+i
}
console.log(sum)
```
- break 用于立即跳出整个循环（循环结束）
```js
for(i = 1; i<=5;i++){
    if(i == 3){
        break;
    }
    console.log(i)
}
```

## 数组（Array）
- 定义：指一组数据的集合，其中的每个数据被称作元素，在数组中可以存放任意类型的元素。数组是一种将一组数据存储在单个变量名下的优雅方式。

### 利用数组字面量创建数组
```js
var abc = []; //  创建一个新的空数组
var abc1 = [1,2,'niukk',true]; // 可以放任何数据类型，用逗号分隔，数组里面的数据称为数组元素。

// 获取数组元素
索引：用来访问数组元素的序号（数组下标从0开始）
数组可以通过索引来访问(获取得到)、设置、修改对应的数组元素，可以通过"数组名[索引]"的形式来获取数组中的元素。
console.log(abc1[2]);
```

### 利用new 创建数组
```js
var abc = new Array();  //创建一个新的空数组
```

### 遍历数组
- 遍历：就是把数组中的每个元素从头到尾访问（获取）一次，类似于点名(利用循环实现)
```js
var abc1 = [1,2,3];
for(var i = 0;i<3;i++){ // for(var i = 0;i<abc1.length;i++)
    console.log(abc1[i]);   
}
// 1.因为数组索引从0开始，所以i必须从0开始，i<3
// 2.输出的时候abc1[i] i 计数器当索引号来用
// 3.数组元素过多时，可以使用数组长度abc1.length
```
```js
//  计算数组的和以及平均值
// 1. 生命一个求和变量sum和平均值变量average
// 2.遍历这个数组，把里面每个数组元素加到sum里
// 3。用求和变量sum除以数组长度就可以得到数组平均值
var arr = [3,5,8,9,6];
var sum = 0;
var average = 0;
for(var i = 0; i < arr.length;i++){
    sum = sum + arr.length; // 我们加的是数组元素arr[i] 不是计数器i
}
average = sum / arr.length;
console.log(sum,average); // 想要输出多个变量用逗号分隔
```
```js
// 求数组中最大值
// 1.声明一个保存最大元素的变量max，默认值取数组中第一个元素，遍历数组，把每个数组元素和max比较，如果数组元素大于max，就把这个数组元素保存到max里，否则进行下一轮比较。
var arr = [2,6,9,77,52,25,7];
var max = arr[0];
for(var i = 0; i < arr.length;i++){
	if(arr[i]>max){   // arr[i]<max 是求最小值
		max = arr[i];
	}
}
console.log(max)
```
```js
将数组转换为字符串 同时后面加上任意符号分割
var arr = ['red','green','blue','yellow'];
var str = '';
var sep = '|';
for(var i = arr[0];i < arr.length;i++){
    str = str + arr[i] + sep
}
console.log(str)
```
### 数组中新增元素
```js
// 1.新增数组元素 修改length长度
var arr = ['1','2','3']
console.log(arr.length)
arr.length = 5;
console.log(arr[5]) // 只增加了数组数，但是没有赋值，所以显示undefined
// 2。新增数组元素 修改索引号 追加数组元素
var arr1 = ['1','2','3'];
arr1[3] = '4';
console.log(arr1);

// 新建一个空数组，里面存入1-100整数；
var arr = [];
for(var i = 0; i<100;i++){
	arr[i] = i + 1 
}
console.log(arr)

// 把大于10的数组挑选出来，放进一个新的数组里 （筛选数组方法1）
var arr = [2,0,6,1,77,0,52,0,25,7];
var arr1 = [];
var j = 0; // 新增一个变量，用于arr1索引（否则输出arr1[i]会出现empty）
for(var i = 0; i<arr.length;i++){
	if(arr[i]>10){
		// 新数组索引号应从0开始，一次递增
		arr1[j]=arr[i];// 新增一个变量，用于arr1索引（否则输出arr1[i]会出现empty）
		j++;
	}
}
console.log(arr1)

// 方法2
var arr = [2,0,6,1,77,0,52,0,25,7];
var arr1 = [];
for(var i = 0; i<arr.length;i++){
	if(arr[i]>10){
		arr1[arr1.length]=arr[i];
	}
}
console.log(arr1)

// 将数组里的元素反过来存放
// 1.声明一个新数组
// 2.把旧数组索引号取过来（arr.length-1)，给新数组索引第0个元素
// 3.采取递减方式 i--
var arr = [1,2,3,4];
var arr1 = [];
for(var i = arr.length - 1; i>=0;i--){
	arr1[arr1.length] = arr[i];
}
console.log(arr1)
```
### 冒泡排序
```js
var arr = [1,2,3,4,5];
for(var i = 0; i<=arr.length-1;i++){
    for(var j = 0; j<=arr.length-i-1;j++){
        if(arr[j]<arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr)
```

## 函数
### 函数的概念：封装了一段可以被重复执行调用的代码块，目的就是让大量代码重复使用。

### 使用：
```js
1.声明函数
function 函数名(){
        // 函数体
}
function SayHi(){
    console.log('hi~');
}
// (1)function 声明函数的关键字
// (2)函数名是做某件事，函数名一般是动词 Sayhi；
// (3)函数不调用自己不执行；
2.调用函数
// 函数名();
Sayhi();

// 利用函数进行1-100之间的和
function getSum(){
	var sum=0;
	for(var i = 1;i<=100;i++){
		sum = sum+i
	}
	console.log(sum)
}
getSum();

function getSum(num1,num2){
	var sum=0;
	for(var i = num1;i<=num2; i++){
		sum = sum+i
	}
	console.log(sum)
}
getSum();
```

### 函数的参数
#### 形参和实参
```js
function 函数名(形参1,形参2,...){ // 在声明函数的括号里是形参 形式上的参数 类似于变量。

}
函数名(实参1，实参2，...); // 在调用函数的括号里是实参 实际参数

// 执行过程
function cook(abc){
    console.log(abc)
}
cook('牛婷婷');
cook('KK');
```
#### 函数的返回值
- return语句，有时候我们希望函数将值返回给调用者，此时通过使用return语句就可以实现。(return后面不能再写代码，不会被执行)
```js
// 1.函数是做某件事或者实现某种功能
function cook(abc){
    console.log(abc)； 
}
cook('大肘子');

// 2.函数的返回值格式
function 函数名(){
	return 返回的结果;
}
函数名();
// 3.代码验证
function abc(){
	return 123;
}
abc(); // abc()=666 
console.log(abc());

function abc(aru){
    return aru;
}
console.log(abc('123'));

// 利用函数比较两个数最大值
function getMax(a,b){
    if(a>b){
        return a;
    }else {
        return b;
    }
    // 或者使用三元运算符  return a > b ? a : b;
}
console.log(getMax(1,3));

// 利用函数求最大值
function getMaxArry(arr){
    var max = arr[0];
    for(var i = 1;i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
var re = getMaxArry([10,9,6,55,99]);
console.log(re);

// return注意事项
1.return中止函数（后面代码不会被执行）
2.return只能返回一个值（返回的结果是最后一个值）
3.求任意两个数加减乘除结果
function getAbc(a,b){
    return [a + b,a - b,a * b,a / b];
}
var c = getAbcgetAbc(1,2);
console.log(c);
4.有return返回return，没有则是undefined。
- break退出当前循环（如for，while）
- continue：跳出本次循环，继续执行下次循环（如for，while）
- return：不仅能够跳出循环，还能够返回return语句中的值，同时还可以结束当前函数体的代码
// 检测是否为质数
function isPrime(n){
    for(var i=2;i<n;i++){
        if(n % i == 0){
            return false;
        } else{
                return n;
            }
    }       
}
    console.log(isPrime(12));
```

### arguments的使用
- 当不确定有多少个参数传递的时候，可以用arguments来获取
```js
function abc(){
    console.log(arguments);// 里面存储了所有传递过来的实参
    console.log(arguments.length);
    console.log(arguments[2]);
}
abc(1,2,3);
// 伪数组，并不是真正意义上的数组
// 1.具有数组length属性
// 2.按住索引的方式存储的
// 3.没有真正数组的一些方法 pop()  push()
// 可以按照数组的方式遍历arguments
function arr(){
    for(var i = 0;i < arguments.length;i++){
        console.log(arguments[i]);
    }
}
arr(1,2,3);
```

```js
// 利用函数求任意个数最大值
function getMax(){
    var max = arguments[0];
    for(var i = 1;i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i]
        }
    }
    return max;
}
console.log(getMax(1,8,101,40,555));
```

```js
// 利用函数翻转数组 reverse翻转
function reverse(arr){
        var newArr = [];
        for(var i = arr.length-1;i >=0;i--){
            newArr[newArr.length] = arr[i]
        }
        return newArr;
    }
    var arr = reverse([1,2,3,9]);
    console.log(arr);
```

```js
//利用函数进行冒泡排序 sort排序
function sort(arr){
        for(var i = 0;i<arr.length-1;i++){
            for(var j = 0;j<arr.length-i-1;j++){
                if(arr[j]>arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr ;
    }
var arr1 = sort([5,12,15,9,10,1]);
console.log(arr1);
```

```js
// 利用函数判断是否为闰年
function abc(a){
        // 如果是闰年返回true，如果不是返回false
    var flag = false;
    if(a%4 == 0 && a%100 != 0 || a%400==0){
        flag = true;
    }
    return flag;
}
var arr = abc(2000);
console.log(arr);
```

### 函数调用另一个函数
```js
function fn1(){
    console.log(11); // 11
    fn2();          //22
}
fn1(); 

function fn2(){
    console.log(22);
}

//  案例2

function fn1(){
    console.log(111);  // 111
    fn2();             // 222
                       // 'fn2'
    console.log('fn1');// 'fn1'
}
function fn2(){
    console.log(222);
    console.log('fn2');
}
fn1();

// 案例3 输入当前年份，输入当前年份2月天数
function backDay(){
    var year = prompt('请输入当前年份');
    if(abc(year)){   // 调用下面写好的函数判断是否闰年
        alert('当前年份是闰年2月有29天');
    } else{
        alert('当前年份是平年2月有28天')
    }
}
backDay();

function abc(year){
        var flag = false;
        if(year%4 == 0 && year%100 != 0 || year%400==0){
            flag = true;
        }
        return flag;
    }
var arr = abc(2000);
```

### 函数两种声明方式
```js
// 1.利用函数关键字自定义函数名（命名函数）
function fn(){

}
fn();

// 2.函数表达式（匿名函数）
var fun = function(aru){
    console.log('我是匿名函数');
    console.log(aru);
}
fun(123);
// 2.(1)fun是变量名，不是函数名
// 2.(2)函数表达式声明方式和声明变量差不多，只不过变量里面存的是值，二函数表达式里面存的是函数
// 3.(3)函数表达式也可以传递参数
```

## 作用域
- 就是代码名字（变量）在某个范围内起作用和效果，目的是为了提高程序可靠性，更重要的是减少命名冲突。
### js作用域（es6之前）：全局作用域、局部作用域
```js
// 全局作用域 整个script标签或者单独的js文件 
var num = 10;

// 局部作用域 （函数作用域）在函数内部就是局部作用域，这个代码的名字只在函数内部起作用和效果。
function fn(){
    局部作用域
}
fn();
```
### 变量的作用域：全局变量、局部变量
```js
// 全局变量 在全局作用下的变量 全局下都可以使用
// 注意 如果函数在内部没有声明直接赋值的变量也属于全部变量
var num = 10; // num是全局变量
console.log(num);

function fn(){
    console.log(num); // 调用的num全局变量
}
fn();

// 局部变量 在局部作用域下的变量，后者在函数内部的变量就是局部变量
// 注意 函数的形参也可以看作是局部变量
function fun(){
    var num1 = 10; // num1就是局部变量 只能在函数内部使用
    num2 = 20; // 注意 如果函数在内部没有声明直接赋值的变量也属于全部变量
}
fun();
console.log(num1);
// 从执行效率来看全局变量和局部变量
// （1）全局变量只有在游览器关闭的时候程序才会销毁，比较占内存资源
// （2）局部变量在程序执行完毕后就会销毁，比较节约资源
```

### 作用域链
- 内部函数访问外部函数的变量，采取的是链式查找的方式（就近原则）来决定采取哪个值，这种称为作用域链。
```js
var num = 10;

function fn(){
    var num = 20;
    function fun(){
        console.log(num);  //输出结果为20 就近原则
    }
}
fn();
```

## JS预解析
```js
// 1.问
console.log(num); 结果为报错

// 2.问
console.log(num); 结果为undefined
var num = 10;
// 声明提前 相当于执行一下代码 
var num;
console.log(num);
num = 10; 

// 3.问
fn();
function fn(){
    console.log(11); 结果为11 （函数提升）
}

// 4.问
fun(); 结果为报错
var fun = function (){
    console.log(22);
}
// 相当于执行了以下代码
var fun;
fun();
fun = function (){
    console.log(22);
}
// 注意 所以函数表达式调用要写在函数表达式声明后面

// 一、js引擎运行js分为两个步骤 预解析和代码执行
// （1）预解析 js引擎会把js里面的所有var还有function提升到当前作用域的最前面
// （2）。代码执行 按照代码书写的顺序从上往下执行
// 二、预解析分为 变量预解析（变量提升）和函数预解析（函数提升）
// （1）变量提升 就是把所有的变量声明提升到当前的作用域最前面 不提升赋值操作
// （2）函数提升 就是把所有的函数声明提升到当前的作用域最前面 不调用函数
// 案例 1
var num = 10;
fun();
function fun(){
    console.log(num); 输出结果为undefined
    var num = 20;
}

// 相当于执行以下代码
var num;
function fun(){
    var num;
    console.log(num); 所以输出结果为undefined
    num = 20;
}
num = 10;
fun();

// 案例 2 重要
f1();
console.log(c);
console.log(b);
console.log(a);
function f1(){
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}  输出结果为 9 9 9 9 9 报错 
//相当于执行以下代码
function f1(){
    var a;
    a = b = c = 9;
    // 相当于 var a = 9, b = 9 , c = 9 注意 如果函数在内部没有声明直接赋值的变量也属于全部变量 所以这里的b和c是全局变量
    console.log(a);
    console.log(b);
    console.log(c);
}  
f1();
console.log(c);
console.log(b);
console.log(a);
输出结果为 9 9 9 9 9 报错 

```

## 对象
- 是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。
- 对象是有属性和方法组成的
- 属性：事物的特征，在对象中用属性来表示（常用名次）
- 方法：事物的行为，在对象中用方法来表示（常用动词）

### 创建对象（object）
- 利用字面量创建对象
- 利用new Object常见对象
- 构造函数创建对象

### 字面量创建对象
#### 一、 对象字面量：就是{}里面包含了表达这个具体事物（对象）的属性和方法。
```js
// 1。创建对象 var obj = {}; //创建了一个空的对象
var obj = {
    yourname: 'KK',
    age: 18,
    sex: '女',  
    // 添加了3个属性
    sayHi:function (){
        console.log('Hi');
        // 添加了一个方法
    }
}
// （1） 里面的属性方法我们采用键值对的形式 键就是属性名:  , 值就是属性值
// （2） 多个方法或属性中间用逗号隔开
// （3）方法冒号后面跟的是一个匿名函数
// 2.使用对象
// （1）调用对象属性 我们采用 对象名.属性名  （.理解为 的 意思）
console.log(obj.yourname);
// (2) 调用属性还有一种方法 对象名['属性名']
console.log(obj['age']);
// 3.调用对象的方法我们采用 对象名.方法名();
obj.sayHi();
```

#### 二、 new Object创建对象
```js
var obj = new Object();
obj.yourname = 'KK';
obj.age = 19;
obj.sayHi = function (){
    console.log('Hi');
}
// 1. 利用等号赋值的方法添加属性和方法
// 2. 每个属性和方法之间用分号;结束
// 3.调用
console.log(obj.yourname);
console.log(obj['sex']);
obj.saiHi();
```

#### 构造函数(为什么需要它)
- 1.因为我们前面两种方法一次只能创建一个对象，里面很多的属性和方法是大量相同的，我们只能赋值
- 2.因此我们可以利用函数的方法 重复这些相同的代码，我们就把这个函数称为构造函数
- 3.因为这个函数不一样，里面封装的不是普通代码，而是对象
- 4.构造函数就是把对象里面一些相同属性和方法抽象出来封装到函数里
- 定义：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里。
```js
// 创建四大天王对象， 相同的属性：名字，年龄，性别 相同方法：唱歌
// 构造函数语法格式
function 构造函数名(){
    this.属性名 = 属性值；
    this.方法名 = function (){};
}
new 构造函数名(); // 调用构造函数一定要用new

//代码体验
function Star(yourname,age,sex){
        this.yourname = yourname;
        this.age = age;
        this.sex = sex;
        this.sing = function(sang){
            console.log(sang);  // 创建方法
        }
    }
    new Star('张学友',18,'男');
    var zxy = new Star('张学友',18,'男');
    zxy.sing('吻别'); // 创建方法用的是函数 所以要先调用函数，把实参传给形参
    var ldh = new Star('刘德华',19,'男')；
    ldh.sing('中国人');
    console.log(zxy.sex);
// 1.构造函数名首字母大写
// 2.构造函数不需要return 就可以返回结果 返回的是一个对象
// 3.调用函数必须使用new
// 4.我们只要new Star()就创建了一个对象
// 5.我们的属性和方法前面必须加this 

//构造函数和对象
// (1)构造函数 泛指某一大类
// (2)对象 特指 是一个具体的事物 比如刘德华
// (3)我们利用构造函数创建对象的过程也称为对象的实例化 
```

#### new关键字执行过程
```js
// new关键字执行过程
// (1)new构造函数可以在内存中创建了一个空的对象
// (2)this就会指向刚才创建的空对象
// (3)把执行构造函数里面的代码 给空对象添加属性和方法
// (4)返回这个对象（所以不需要return）
function Star(yourname,age,sex){
        this.yourname = yourname;
        this.age = age;
        this.sex = sex;
        this.sing = function(sang){
            console.log(sang);  
        }
    }
    new Star('张学友',18,'男');
```
#### 遍历对象
```js
var obj = {
        name:'KK',
        age : 18,
        sex: 'man',
        // fn:function(){} 也可以遍历方法只是一般不用
    }
    // console.log(obj.name);
    // 用for in的方式遍历对象
    // for（变量 in 对象）{}
    for (var k in obj){
        console.log(k); // 输出的是变量
        console.log(obj[k]) // 输出的是属性值
    }
    // 使用for in里面的变量 喜欢写 k 或者 key
    //
```

### 内置对象
- JS中的对象分为三种：自定义对象（var obj = {})、内置对象、游览器对象
- 定义：就是指js语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能（属性和方法）

#### 查阅MDN文档
#### Math数学对象
- 定义：是一个内置对象，具有数学常数和函数的属性和方法，不是一个函数对象。（与其他对象不同的是，Math不是一个构造函数，不需要new来调用，而是直接使用里面的属性和方法即可）。
```js
console.log(Math.PI); //一个属性 圆周率
console.log(Math.max(1,3,99)); // 最大值  99

// 案例 封装自己的数学对象
    var myMath = {
        PI:3.141592653,
        max:function(){
            var max = arguments[0];
            for (var i = 1;i < arguments.length; i++){
                if(arguments[i] > max ){
                    max = arguments[i];
                }
            }
            return max;
        },
        min:function(){
            var min = arguments[0];
            for (var i = 1;i < arguments.length;i++){
                if(arguments[i] < min){
                    min = arguments[i];
                }
            }
            return min;
        }
    }
    console.log(myMath.PI);
    console.log(myMath.max(1,9,33));
    console.log(myMath.min(1,9,33));
```

#### Math 绝对值方法 Math.abs();
```js
console.log(Math.abs(1)) // 1
console.log(Math.abs(-1)) // 1
console.log(Math.abs('1')) // 1 隐式转换 会把字符串型-1 转换成数字型
```

#### Math 随机数方法 Math.random();
```js
// 1.random();返回一个随机的小数 0 =< X < 1
// 2.这个方法（）里不跟参数
// 3.代码验证
console.log(Math.random());
// 4.我们想要两个数之间的随机整数并且包含这两个数
function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1))+ min;
    }

// 猜数字游戏 猜1-50之间的整数 猜大提示大 猜小提示小 只有10次机会
function getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    var random = getRandom(1,50);
    for(var i = 0; i<= 10; i++){
        var num = prompt("请输入一个数字");
        if(num > random){
            alert("你猜大了");
        }else if(num < random){
            alert("你猜小了");
        }else{
            break;
        }
    }
```

#### Math日期对象 Date();
```js
// Date()日期对象 是一个构造函数 必须使用 new 来使用创建
var arr = new Array(); // 创建一个数组对象
var obj = new Objcet();// 创建一个对象实例
// 1. 使用Date 如果没有参数 返回当前系统的当前时间
var date = new Date();
console.log(date);
// 2.参数常用的写法 数字型2020，07，31   或者是字符串型 ‘2020-07-31 8:8:8
var date1 = new Date('2020-07-31 8:8:8');
```

#### 数组对象
```js
// 创建数组的两种方式
// 1.利用字面量
var arr = [1,2,3];
console.log(arr[0]);
// 2.利用new Array()
// var arr1 = new Array(); // 创建了一个空的数组
// var arr1 = new Array(2); // 这个2表示数组长度 里面有2个空的元素
var arr1 = new Array(2,3); // 等价于[2,3] 这样写表示 里面有2个数组元素 是 2 和 3
console.log(arr1);

// 2.检测是否为数组的两种方式
// （1）instanceof 运算符 它可以用来检测是否为数组
// (2) Array.isArray() 
var arr = [];
var obj = {};
console.log(arr instanceof Array);
console.log(obj instanceof Array);
//
function reverse(arr){
    if(arr instanceof Array){ // 或者用if (Array.isArray(arr)) 同样的效果
        var newArr = [];
        for(var i = arr.length-1;i >=0;i--){
            newArr[newArr.length] = arr[i];
        }   
        return newArr;  
    } else {
        return 'error 这个参数要求必须是数组格式[1,2,3]'
    }
        
}
    var arr = reverse([1,2,3,9]);
    console.log(reverse(1,2,3,9));
```
#### 添加或删除数组元素
```js
// 1. push()在数组的末尾可以添加一个或多个数组元素 push（推）
var arr = [1,2,3];
arr.push(4,'KK');
// console.log(arr.push(4,'KK')); // 输出结果为5
console.log(arr);
// (1)push可以给数组追加新的元素
// (2)push()参数直接写 数组元素就可以了
// (3)push完毕之后，返回的结果是 新数组的长度
// (4)原数组也会发生变化

// 2. unshift 在数组的开头以添加一个或多个数组元素
arr.unshift('red');
console.log(arr);
// (1)unshift可以给数组追加新的元素
// (2)unshift()参数直接写 数组元素就可以了
// (3)unshift完毕之后，返回的结果是 新数组的长度
// (4)原数组也会发生变化

// 3.pop()它可以删除数组的最后一个元素
console.log(arr.pop());  // 返回值是删除的元素
console.log(arr);
// (1)pop可以删除数组的最后一个元素，一次只能删一个
// (2)pop()没有参数
// (3)pop完毕之后，返回的结果是 删除的那个元素
// (4)原数组也会发生变化

// 4.shift()它可以删除数组的第一个元素
console.log(arr.shift());  // 返回值是删除的元素
console.log(arr);
// (1)shift可以删除数组的第一个元素，一次只能删一个
// (2)shift()没有参数
// (3)shift完毕之后，返回的结果是 删除的那个元素
// (4)原数组也会发生变化

// 案例
// 有一组包含工资的数组[1500,1200,2000,2100,1800],要求把数组中工资超过2000的删除，剩余的放到新数组里。
var arr = [1500,1200,2000,2100,1800];
var newArr = [];
for(var i = 0; i < arr.length; i++){
    if(arr[i] < 2000){
        // newArr[newArr.length] = arr[i];
        newArr.push(arr[i]);
    }
}
console.log(newArr);
```

#### 数组排序
```js
// 1.翻转数组 reverse翻转
var arr = [1,2,3];
arr.reverse();
console.log(arr);
// 2.数组排序（冒泡排序）sort排序
var arr1 = [1,3,4,7];
arr1.sort();
console.log(arr1);  // 只适合个位数排序
// 解决方法
var arr1 = [13,4,77,1,7];
arr1.sort(function (a,b){
    return a - b; // 按照升序的方式排列
    // return b - a; // 按照降序的方式排列
});
console.log(arr1); 
```

#### 获取数组元素索引方法
```js
// 1.返回数组元素索引号方法 indexOf(数组元素) 作用就是返回该数组元素的索引号
// 只返回第一个满足条件的索引号
// 在该数组里找不到元素 返回的是-1
var arr = ['red','green','blue'];
console.log(arr.indexOf('blue')); // 输出结果为2
// 2.lastIndexOf 作用就是从最后一个元素开始查找
var arr1 = ['red','green','blue','yellow','pink'];
console.log(arr1.lastIndexOf('pink')); // 输出结果为 4

// 数组去重  重点案例！！！
// 有一个数组['c','a','z','a','x','a','x','c','b'],要求去除数组中重复的元素。
// 1.目标：把旧数组里不重复的元素选取出来添加到新数组里，重复的元素只保留一个，放到新数组中去查重。
// 2.核心算法：我们遍历旧数组，然后拿着旧数组元素查询新数组，如果该元素在新数组中没有出现过，就添加到新数组中，否则不添加。
// 3.我们怎么知道该元素没有存在？利用新数组.indexOf(数组元素) 如果返回-1时就说明新数组没有该元素
// 封装一个去重的函数 unique 独一无二的
function unique(arr){
    var newArr = [];
    for(var i = 0; i < arr.length;i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(unique(['c','a','z','a','x','a','x','c','b']));
```

#### 数组转换为字符串
```js
// 1.toString() 把数组转换为字符串，逗号分隔每一项  返回值是一个字符串
var arr = [1,2,3];
console.log(arr.toString());  // 1,2,3
// 2.join('分隔符') 方法用于把数组中所有的元素转换为一个字符串， 返回值是一个字符串
var arr1 = ['green','blue','pink'];
console.log(arr1.join());  // green,blue,pink
console.log(arr1.join('-')); // green-blue-pink
console.log(arr.join('&')); // green&blue&pink
```

#### 数组连接、截取、删除
- concat（） 连接两个或多个数组 不影响原数组   返回值：一个新数组
- slice（） 数组截取slice（begin，end）    返回值：返回被截取项目的新数组
- splice（） 数组删除splice（第几个开始，要删除个数） 返回值：返回被删除项目的新数组 注意这个会影响原数组

### 字符串对象
- 字符串所有的方法都不会修改字符串本身（字符串是不可变的），操作完成会返回一个新的字符串。
```js 
// 字符串对象 根据字符返回位置 str.indexOf(‘要查找的字符,[起始位置]’)
var str = '改革春风吹满地，春天来了';
console.log(str.indexOf('春')); // 输出为2
console.log(str.indexOf('春,3')); // 输出为8 从索引号是3的位置往后查找

// 重点案例
// 查找字符串"ocadobckodert"中所有o出现的位置；
// 核心算法：先找出第一个 o 的位置
// 然后只要indexOf 返回的结果不是-1 就继续往后查找
// 因为indexOf只能查找到第一个，所以后面的查找，一定是当前索引+1，从而继续查找
var str = "ocadobckodert";
var index = str.indexOf('o');
var num = 0;
while (index !== -1){
    console.log(index);
    num++;
    index = str.indexOf('o',index + 1);
}
console.log('o出现的次数是' + num);
```

#### 根据位置返回字符（重点）
```js
// 1.charAt(索引号index) 根据位置返回字符
var str = 'andy';
console.log(str.charAt(3));
// 遍历所有的字符
for (var i = 0; i < str.length;i++){
    console.log(str.charAt(i));
}

// 2.charCodeAt(index) 返回相应索引号的字符AASCII值 ， 目的判断用户按下了哪个键
console.log(str.charCodeAt(0)); // 97

// 3.str[index] H5新增的
console.log(str[0]); // a
```
#### 字符串操作方法
```js
// 1. concat('字符串1‘，‘字符串2’...)
var str ='andy';
console.log(str.concat('red')); // andyred

// 2.substr('截取的起始位置'，'截取几个字符')；
var str1 ='改革春风吹满地';
console.log(str.substr(2,2));// 春风  第一个2是索引号的2，从第几个开始 。  第二个2是取几个字符

// 3.slice(start,end) 从start位置开始，截取到end位置，end取不到（它们俩都是索引号）

// 4.substring(start,end) 从start位置开始，截取到end位置，end取不到 基本和slice相同，但是不接受负值。
```

```js
// 替换字符串以及转换为数组
// 1.替换字符 replace('被替换的字符'，'替换的字符') 它只会替换第一个字符
var str = 'andy';
console.log(str.replace('a','b')); // bndy
var str1 = 'andyandy';
console.log(str.replace('a','b')); // bndyandy
// 要想替换所有相同的字符 解决方法
var str1 = 'acodewoqadfo';
while(str1.indexOf('o')!== -1){
    str1 = str1.replace('o','*');
}
console.log(str1);

// 2.字符转换为数组 split('分隔符') 前面我们学过join把数组转换为字符
var str2 = 'red,pink,blue';
console.log(str.split(',')); // 字符串的分隔符，要和split的分隔符一致
var str3 = 'red&pink*blue';
console.log(str.split('&'));// 字符串的分隔符，要和split的分隔符一致

// 3. toUpperCase() 转换大写
// 4. toLowerCase() 转换小写
```

## 简单数据类型和复杂数据类型

- 简单类型又叫做基本数据类型或者值类型
- 值类型：简单数据类型/基本数据类型，在存储时变量中存储的是值本身，因此叫做值类型 string,number,boolean,undefined,null
```js
// 简单数据类型 null  返回的是一个空的对象 object
var timer = null;
console.log(typeof timer);
// 如果以后有个变量我们打算存储为对象，暂时没想好放什么，这个时候就给null
```

- 复杂类型又叫做引用类型
- 引用类型：复杂数据类型，在存储时变量存储的仅仅是地址（引用）因此叫做引用数据类型，通过new关键字创建的对象（系统对象，自定义对象），如Object，Array，Date等。
