### 赋值运算符
- +=  即a = a + xx
```
var a = 1;
a+=10; // a = a + 10
console.log(a)  // a = 11
```

### 关系运算符
- 数值之间比较直接返回结果
- 非数值之间的比较，先转换成数值再比较
- 如果转换不成数值，直接返回false
- 

### 相等运算符
- ==
- ===
- undefined == null  // true
- undefined === null // false
- isNaN() 判断是否为NaN 

### 三元运算符
// 表达式？ true ： false
```
var a = 1>2 ? 1 : 2;
console.log(a ===> , a);
//
var a = 1 === 0? '女' : '男'
console.log(性别===> , a);
```

```
var a = 300;
var b = 200;
var c = 50;
var max = a > b ? (a > c ? a : c) : (b > c ? b : c) ;
console.log(max);  // 比较最大值
```

### 运算符的优先级


### if语句
- 条件语句，如果条件满足则执行下一步


### 循环语句
- while 
```
var a =0;
while( a < 0){
    a+=2;
    console.log(a);
}
```
- for (初始化表达式，条件表达式，更新条件)
```
for (var a = 0; a<10; a++){
    console.log(a)
}
```
- break 跳出循环
- continue 跳出本轮循环