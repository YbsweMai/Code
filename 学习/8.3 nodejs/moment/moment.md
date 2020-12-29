```js
const moment = require('moment')

moment();


// const date = moment()// 当前时间
// const date = moment('1994-01-01')  // 指定时间
const date = moment()
// .subtract(7,'day') // 从后往前减7天
// .add(7,'day') // 加7天
// .format('YYYY-MM-DD HH:mm:ss')// 指定时间和时间格式

// .hour() // 拿小时数   后面不能加.format
// .mouth()
// .year()
.date() // 显示本月当前天数
// .daysInmonth() // 显示本月多少天
.toDate() // 转换成原生JS Date对象
console.log(date)


const result = moment('2010-10-20').isBefore('2010-10-21')  // 时间比较 是否在某时间天数之前
const result = moment('2010-10-20').isBefore('2010-10-21','year') // 比较年数

const result = moment('1992-01-01').diff(moment(),'day') // diff是差值 当前时间与目标时间相差多少天

console.log(result);




```