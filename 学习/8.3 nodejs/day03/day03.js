const path = require('path');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

// console.log(path.normalize('/foo/bar//baz/asdf/quux/..')
// );

// console.log(process.cwd());
// fs.readFile(path.join(__dirname,'./1.txt'),(error,data)=>{
//      // 1.通过join dirname 绝对路径进行拼接  2.error参数错误优先
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);// 输出内容不对 解决方法 console.log(data.toString());
//     }
// });

// console.log(__dirname);

// 写一个4.txt 再读出来

// fs.writeFile(path.join(__dirname,'./2.txt'),'666666',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('success');
//         fs.readFile(path.join(__dirname,'./2.txt'),(error,data)=>{
//             // 1.通过join dirname 绝对路径进行拼接  2.error参数错误优先
//            if(error){
//                console.log(error);
//            }
//            else{
//                console.log(data.toString());// 输出内容不对 解决方法 console.log(data.toString());
//            }
//        });
//     }
// })

// fs.readFile(path.join(__dirname,'./1.txt'),(error,data)=>{
//     // 1.通过join dirname 绝对路径进行拼接  2.error错误优先回调
//  if(error){
//      console.log(error);
//  }else{
//      console.log(data);
//      // 输出内容不对 解决方法 console.log(data.toString());
//  }
// });

// fs.writeFile(path.join(__dirname,'./2.txt'),'666666',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         fs.writeFile(path.join(__dirname,'./3.txt'),'888888',(error)=>{
//             if(error){
//                 console.log(error);
//             }
//             else{
//                 fs.readFile(path.join(__dirname,'./2.txt'),(error,content)=>{
//                     error ? console.log(error):
//                     fs.readFile(path.join(__dirname,'./3.txt'),(error,content2)=>{
//                         if(error){
//                             console.log(error);
//                         }
//                         else{
//                             fs.writeFile(path.join(__dirname,'./5.txt'),`${content.toString()}${content2.toString()}`,(error)=>{
//                                 if(error){
//                                     console.log(error)
//                                 }
//                                 else{
//                                     console.log('success');
//                                 }
//                             })
//                         }
//                     });
//                 })               
//             }
//         })
//     }
// });


// fs.writeFile(path.join(__dirname,'./2.txt'),'666666',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         fs.writeFile(path.join(__dirname,'./3.txt'),'888888',(error)=>{
//             if(error){
//                 console.log(error);
//             }
//             else{
//                 fs.readFile(path.join(__dirname,'./2.txt'),(error,content)=>{
//                     if(error)
//                         {console.log(error)}
//                     else{
//                         fs.readFile(path.join(__dirname,'./3.txt'),(error,content2)=>{
//                         if(error){
//                             console.log(error);
//                         }
//                         else{
//                             fs.writeFile(path.join(__dirname,'./5.txt'),`${content.toString()}${content2.toString()}`,(error)=>{
//                                 if(error){
//                                     console.log(error);
//                                 }
//                                 else{
//                                     console.log('success');
//                                 }
//                             })
//                         }
//                     });
//                 }
//                 })               
//             }
//         })
//     }
// });

// let promise = new Promise();

// function getPromise(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path.join(__dirname,'./5.txt'),(error,content)=>{
//             if(error){reject(error);}
//             else{
//                 resolve(content.toString());
//             }
//         })
//     })
//     return promise;
// }

// let promise = getPromise();
// promise.then((a)=>{
//     console.log(a);
// })
// .catch((b)=>{
//     console.log(b);
// });


// let promise = new Promise();


function readFile(address){
    return new Promise((resolve,reject)=>{
        fs.readFile(address,(error,content)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(content.toString());
            }
        });
    })
}



function writeFile(address,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(address,content,(error)=>{
            if(error){
                reject(error);
            }
            else{
                resolve('success:'+  content);
            }
        });
    })
}


// let content = "";

// readFile(path.join(__dirname,'./2.txt'))
// .then((a)=>{
//     content = content + a
//     console.log('2.txt===>',a);
//     return readFile(path.join(__dirname,'./3.txt'));
// })
// .then((a)=>{
//     content = content + a
//     console.log('3.txt===>',a);
//     return writeFile(path.join(__dirname,'./5.txt'),content);
// })
// .then((a)=>{
//     console.log(a);
// })
// .catch((e)=>{
//     console.log(e);
// })

// 同时执行
let content = ''
let result = Promise.all([readFile(path.join(__dirname,'./2.txt')),readFile(path.join(__dirname,'./3.txt'))])
.then((a)=>{
    // content = content + a 
    console.log(a);
    // return writeFile(path.join(__dirname,'./5.txt'),content);
})
// .then((a)=>{
//     console.log(a);
// })
.catch((e)=>{
    console.log(e);
})
// console.log(result);

// 最终方案
// async function main(){
//     try{
//         // let data1 = await readFile(path.join(__dirname,'./2.txt'));

//         // let data2 = await readFile(path.join(__dirname,'./3.txt'));

//         let result = await Promise.all([readFile(path.join(__dirname,'./2.txt')),readFile(path.join(__dirname,'./3.txt'))]);
//         console.log(result);

//         await writeFile(path.join(__dirname,'./5.txt'),result[0]+result[1]);
  

//     }catch (error){
//         throw error;
//     }
// }
// main();

