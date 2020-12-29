```js
// db.banyuan.find({role:'teacher'})

// db.banyuan.update({name:'Jack'},{$set:{"role":'services'}})

// db.banyuan.update({role:'student'},{$set:{"class":'web'}}) // 只更新找到的第一个

// db.banyuan.update({role:'student'},{$set:{"class":'web'}},{ multi: true }) // 更新全部

// db.banyuan.update({role:'student'},{$set:{"class":'前端',"classroom":'5号教室'}},{ multi: true })

// db.banyuan.find({
//     $or:
//     [
//         {role:'teacher'},
//         {role:'student'}
//     ]    
// });

// db.banyuan.find({
//     $or:
//     [
//         {age:'28'},
//         {age:'29'}
//     ]    
// });


// db.banyuan.find({})

// $gt 大于
// $gte  大于等于
// $lt 小于
// $lte 小于等于

// db.banyuan.find({
//     age:{
//         $gt:'20',
//         $lte:'29'
//     }
// })

// db.banyuan.remove({
//     age:{
//         $gt:'25'
//     }
// })

db.banyuan.update({role:'student'},{$set:{class:{"name":'web',"room":'5号教室'}}},{ multi: true }) // 给student增加class对象的同时 class里增加name和room属性

// .count() // 显示数量

// .limit(8)  // 返回8条数据

// .sort(age:1)从小到大排序   -1从大到小

// .skip(5) 跳过前5条数据
```