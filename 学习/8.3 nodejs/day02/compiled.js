"use strict";

// var a = 1;
// let a = 1;
var array = [];

var _loop = function _loop(i) {
    array[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
array[2]();
