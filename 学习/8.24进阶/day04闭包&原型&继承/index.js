// let a = 1;

// function main(){

//     console.log(a);

//     let b =2;

//     function getB(){

//         console.log(b);
//         return b;
//     }
//     return getB;
// }

// let func = main();
// console.log(func());

//
// function fn1(){
//     let name ='isen';
//     function fn2(){
//         console.log(name)
//     }
//     fn2();
// }

// fn1()
//

// function Foo(){
//     var name = 'fooname';
//     var age = 12;
//     this.getName = function(){
//         return name;
//     };
//     this.getAge = function(){
//         return age;
//     };
// };
// var foo = new Foo();
// console.log(foo);
// console.log(foo.name);
// console.log(foo.getName());

//
// let array = [];

// for(var i=0;i<10;i++){

//     array[i] = setFunction(i)
// }

// array[2]();

//

// function setFunction(){

//     let ii = arguments[0];

//     return function(){

//         console.log(ii);
//     }
// }

function Dog(name){

    this.name = name;
}

Dog.prototype.bark = function(){

    console.log(this.name)
}

const dog1 = new Dog('dog1')
const dog2 = new Dog('dog2')
console.log(dog1);
console.log(dog1.__proto__);
console.log(dog1.__proto__ === Dog.prototype)
console.log(Dog.prototype.constructor === Dog)

function Parent(){
    this.name= 'mike';
}

function Child(){
    this.age = 12;
}

Child.prototype = new Child();

let child = new Child()

function Brother(){

    this.weight = 60;
}

Brother.prototype = new Child();

const brother = new Brother()
console.log(brother)