const path = require('path');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');



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
                resolve(content);
            }
        });
    })
}

let content = '';

let address1 = path.join(__dirname,'./1.txt');
let address2 = path.join(__dirname,'./2.txt');
let address3 = path.join(__dirname,'./3.txt');

// writeFile(address1,'这是第一个文件',)
// .then((a)=>{
//     content = content + a
//     console.log(a);
//     return writeFile(address2,  '\n' + '这是第二个文件')
// })
// .then((a)=>{
//     content = content + a
//     console.log(a);
//     return writeFile(address3,content);
// })
// .then((a)=>{
//     console.log('success');
// })
// .catch((e)=>{
//     console.log(e);
// })

async function main(){
    try{
        let result = await Promise.all([
            writeFile(address1,'这是第一个文件'),
            writeFile(address2,'这是第二个文件'),
        ]);
        console.log(result);

        let data = await writeFile(address3,result[0]+'\n'+result[1]);  
        console.log('success:'+data);

    }catch (error){

        throw error;
    }
}
main();

