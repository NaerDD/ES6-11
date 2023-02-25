// 1.引入 fs 模块
const fs = require("fs");

//读取第一个
function readMaoWu(){
  return new Promise((resolve,reject)=>{
    fs.readFile("./resources/茅屋为秋风所破歌.md",(err,data)=>{
      //如果失败
      if(err) reject(err);
      //如果成功
      resolve(data);

    })
  })
 }
//读取第二个
function readGuanShu(){
  return new Promise((resolve,reject)=>{
    fs.readFile("./resources/观书有感.md",(err,data)=>{
      //如果失败
      if(err) reject(err);
      //如果成功
      resolve(data);

    })
  })
 }
//读取第三个
function readChaYang(){
  return new Promise((resolve,reject)=>{
    fs.readFile("./resources/插秧诗.md",(err,data)=>{
      //如果失败
      if(err) reject(err);
      //如果成功
      resolve(data);

    })
  })
 }

 //声明一个 async 函数
 async function main(){
     let maowu = await readMaoWu();
     let guanshu = await readGuanShu();
     let chayang = await readChaYang();

     console.log(maowu.toString());
     console.log(guanshu.toString());
     console.log(chayang.toString());
     
  }

  main();