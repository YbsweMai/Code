let person = {
    name:'isen',
    sayName:function (){
        console.log('I am ' + this.name)
    }   
}

let person2 = {
   name:'Lily'
}

person.sayName.call(person2)

global.name = 'golbal1'

// 传参
function fakeSayName(v1,v2){
    console.log(this.name + v1 + v2)
}

// fakeSayName.call(person2,1,2)

// fakeSayName.apply(person2,[1,2]) // apply的传参方式 和call一样改变this指向 且都立刻调用

// fakeSayName.bind(person2) // 返回的是一个函数
// fakeSayName.bind(person2,1,2)()  // bind 这样进行函数调用 或者 fakeSayName.bind(person)(1,2)  


let array = [1,3,6,8,9,10]

// console.log(Math.max.apply(null,array))

function FakeMath(){
    this.sum = function(v1,v2,v3){
        return v1+v2+v3
    }
}

const fakeMath = new FakeMath()
// console.log(fakeMath.sum.apply(null,array))

//用自己的方式写一个call 实现fakeCall 调用之后满足如下条件
// 1.返回的结果为调用fn之后的结果
// 2.fn的调用参数为fakeCall的第一个参数之后的全部参数

var a = 1;
var b = 2;
var test = function(first,second){
    return first === a && second === b;
}

// console.log(test(a,b))
// console.log(fakeCall(test,a,b))

function fakeCall (fn,a,b){

    let array = [];
    for(let i = 1; i<arguments.length;i++){ // i = 1 Call里面下标为0的永远是一个函数 所以要从第二个也就是1来取参数
        array.push(arguments[i])
    }

    return fn.apply(null,array)
}

// let obj1 = {
//     name:'isen',
//     age: 28
// }

// let obj2 = Object.assign({},obj1);

// obj2.age = 18
// console.log(obj1)
// console.log(obj2)

// let obj1 = {
//     name:'isen',
//     age: 28,
//     obj:{
//         a:1
//     }
// }

// let obj2 = Object.assign({},obj1);
// let obj2 = Object.assign({a:1},obj1)

// obj2.obj.a = 3;


// console.log(obj1)
// console.log(obj2)

let obj1 = {
    name:'isen',
    age: 28,
    obj:{
        a:1
    },
    func:function(){
        console.log(1)
    }
}

let obj2 = JSON.parse(JSON.stringify(obj1))

obj2.age = 18;
obj2.obj.a = 3;

// console.log(obj1)
// console.log(obj2)


let c = 1;
let d = 2;
let e = function(first,second){
    return first === c && second === d;
}
console.log(e(c,d))
console.log(Call(e,c,d))

function Call(fn){
    let f = [];
    for (let i = 1;i < arguments.length; i ++){
        f.push(arguments[i])
    }

    return fn.apply(null,f)
}