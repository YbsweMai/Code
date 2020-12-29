const _ = require('lodash');


// const users = [

//     { 'user':'fred', 'active':false},
//     { 'user':'barney', 'active':false},
//     { 'user':'pebbles', 'active':true},
// ]

// const result = _.findIndex(users,function(o) { return o.uesr =='barney'})

const result = _.findIndex(users,{'user':'fred'}) // 查找下标

// const result = _.findIndex(users,{'user':'fred','active':true})

// console.log(_.indexOf([1,2,1,2],2)) // 查找第2个下标数组元素

// console.log(_.join(['a','b','c'],'@')) // 加入@

// console.log([1,2,3].join('@'))


// remove 删除
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0; // 删除2的倍数的元素 返回evens
});
 
// console.log(array);
// => [1, 3]
 
// console.log(evens);
// => [2, 4]

// reverse 翻转数组

var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
// console.log(array);
// => [3, 2, 1]


// nth 第几个
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);  // -值是从后往前
// => 'c';

// forEach
_.forEach([1, 2], function(value) {
    // console.log(value); // 1 2
  });

  _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
    // console.log(key); // a  b

    // console.log(`${key} ==== ${value}`)
  });


  // filter 过滤
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
//   _.filter(users, function(o) { return !o.active; });

//   console.log(_.filter(users,{'age':36,'active':true}))
  // => objects for ['fred']


// groupBy  根据属性值来分组
  var data = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];

  // console.log(_.groupBy(data,'age'))
  var a = _.groupBy(data,'age')
  
  console.log('12313',a)
  


// map 返回新数组

function square(n){

    return n*n;
}
// console.log(_.map([4,8],square))

// var data1 = [
//     {'user'}
// ]


// sortBy 排序 升序
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
   
  _.sortBy(users, [function(o) { return o.user; }]);
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   
  _.sortBy(users, ['user', 'age']); // 先按user 再按age
  // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

// orderBy 默认降序排序  可控制升序或降序 asc 是升序   desc是降序
//   console.log(_.orderBy(users, ['user', 'age'],['asc','desc'])); // 


  // isEqual 对比对象里属性值是否相等
  var object = {'a':1};
  var other = {'a':1};

//   console.log(_.isEqual(object,other))
//   console.log(object === other) // false 比较的是对象

// random 获取随机数
// console.log(_.random(0,10,true)) // true可获取小数 不加true返回整数


// omit //删除某个属性
let data2 = {'a':1,'b':2,'c':3}

// console.log(_.omit(data2,['a']))


// minBy 最小值
// maxBy 最大值
//找出年龄最小的
var data3 = [
    { 'user': 'afred',   'age': 2 },
    { 'user': 'bbarney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];

// console.log(_.minBy(data3,'age'))
// console.log(_.minBy(data3,function(o){ return o.age}))
// console.log(_.sortBy(data3,'user')[0])
// console.log(_.maxBy(data3,'age'))

let result1 = _.sortBy(data3,'age')
result1 = _.map(result1,(item)=>{

    return item.user + ' is ' + item.age
})

// console.log(result1)
// console.log(_.head(result1)) // head头部

// 链式调用
let abc =
    _.chain(data3) // chain链式调用
    .sortBy('age')
    .map(function(o) {
        return o.user + ' is ' + o.age;
    })
    .head()
    .value();  // 必须要有value

// console.log(abc) // 和上面result1 结果相同


let data4 = [
    {
        name:'tom',
        score:80,
        class:'A'
    },
    {
        name:'lucy',
        score:90,
        class:'A'
    },
    {
        name:'nacy',
        score:83,
        class:'B'
    },
    {
        name:'jack',
        score:84,
        class:'A'
    },{
        name:'lily',
        score:91,
        class:'A'
    }
]

// let data5 =
// _.chain(data4)
// .filter(data4.class='A')
// // .groupBy(data4,'score')
// .value()

//  data4 = _.filter(data4,{class:'A'});
//  data4 = _.orderBy(data4,['score'],['desc'])
//  data4 = _.map(data4,(item)=>{

//     return _.omit(item,'class')
//  })

// console.log(data4)

const data5 = 
_.chain(data4)
.filter({class:'A'})
.orderBy(['score'],['desc'])
.map((item)=>{
    return _.omit(item,'class')
})
.value()

console.log(data5)