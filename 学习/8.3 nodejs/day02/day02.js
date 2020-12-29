// var a = 1;
// let a = 1;
// var array = [];
// for(let i = 0; i < 10; i++ ){
//     array[i] = function(){
//         console.log(i);
//     }
// }
// array[2]();

// let [foo,[[bar],baz]] = [1,[[2],3]];
// console.log(baz);

// let [ , , third] = ["foo","bar","baz"];
// console.log(third);

// let [x,y] = [1,2,3];
// console.log(x,y);

// let [a,[b],c] = [1,[2,3],4];
// console.log(b);

// let [ foo = 2] = [];
// console.log('foo===>',foo);

// let [x,y='b'] = ['a',null];
// console.log(x,y);

// let [x = 1] = [null];
// console.log(x);

// let { foo, bar} = {foo:'aaa',bar:'bbb'}
// console.log(foo,bar);

// let obj = { foo: 'aaa', bar: 'bbb' };
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };

// console.log(baz);

// let obj = {};

// console.log(obj.x);

// let {x = 3} = obj;
// console.log(x)
// let name = 'KK'
// let str = `I am ${name}`;
// console.log(str);

// let s = new Set();
// let array = [2,3,4,5,6,2,2,2,2,2];
// array.forEach((x) => s.add(x));
// // console.log(s);
// console.log(s.has(5));
// console.log(s);
// console.log(s.size);
// console.log(s.delete(2));
// console.log(s);

// let map = new Map();

// let obj = {
//     a:1
// }

// let a = 1;

// console.log(obj);
// map.set(obj,'1234');
// map.set(a,'1111')

// console.log(map);

// console.log(map.get(obj));

// console.log(map.size);

// console.log(map.values());

// map.delete(obj);

// console.log(obj);

// let map = new Map();
// let array = [2,3,4,5,2,2,2,2,2,2];
// array.forEach((item)=>{
//     // 如果map里面没有就进入
//     if(!map.get(item)){
//         // 新插入一个key-value值，代表第一次遇到这个数字
//         map.set(item,1);
//     }else{
//         // 如果这个数字已经存在，获取之前计算的次数，然后+1
//         map.set(item,map.get(item)+1);
//     }
// })
// console.log(map);

// let array = [{a:1},{a:2}]
// array = array.map((item)=>{
//     item.b = 2;
//     return item
// })
// console.log(array);

// let num = [1,2,3,5];
// // map 返回一个新生成的数组
// num = num.map(item => item*item)

// console.log(num);

// const obj = {};  // 如果是对象 保存的是内存地址
// obj.a = 1
// obj.a = 2
// console.log(obj);

// {
//     var c = 1;
//     let d = 2;
// }
// console.log(c);
// console.log(d);

let map = new Map();

let obj = {
    a:1
}

