
var taskItems = document.getElementsByClassName('task-item')[0];

var inputEle = document.getElementsByClassName('task-input')[0];

var taskListEle = document.getElementsByClassName('task-list')[0];

var addBtn = document.getElementsByClassName('add-btn')[0];

var close = document.getElementsByClassName('close');

// 初始化
// init();

// 绑定按键
// bindCloseEvent();

addBtn.onclick = addTask;

// enter事件

inputEle.onkeydown = function(e){
    console.log(e);
    if(a.keycode === 13){

        addTask();
    }
}