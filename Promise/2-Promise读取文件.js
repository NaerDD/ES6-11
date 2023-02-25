//1.引入fs模块
const fs = require('fs');

//2.调用方法读取文件
// fs.readFile('../resources/茅屋为秋风所破歌.md',(err,data)=>{
//   //如果失败 则抛出错误
//   if(err) throw err;
//   //如果成功 输出内容
//   // console.log(data);
//   console.log(data.toString());
  
// })

//3.使用Promise封裝
const p = new Promise(function(resolve,reject){
    fs.readFile("../resources/茅屋为秋风所破歌.md",(err,data)=>{
    //如果失败 则抛出错误
    if(err) reject(err);
    //如果成功 输出内容
    resolve(data);
    });
 });

 p.then(function(value){
     console.log(value.toString());
     
  },function(reason){
      console.log('读取失败');
      
   });