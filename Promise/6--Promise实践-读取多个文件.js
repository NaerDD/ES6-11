//1.引入fs模块
const fs = require('fs');

//2.调用方法读取文件
// fs.readFile('../resources/茅屋为秋风所破歌.md',(err,data1)=>{
//   fs.readFile('../resources/插秧诗.md',(err,data2)=>{
//     fs.readFile('../resources/观书有感.md',(err,data3)=>{
//       let result = data1 + '\r\n' + data2 + '\r\n' + data3;
//       console.log(result);
//     })
//   })
// })

//使用Promise实现 
const p = new Promise((resolve,reject)=>{
  fs.readFile("../resources/茅屋为秋风所破歌.md",(err,data)=>{
    resolve(data);
  });
});

p.then(value=>{
  return new Promise((resolve,reject)=>{
    fs.readFile("../resources/插秧诗.md",(err,data)=>{
      resolve([value,data]);
    });
  })
}).then(value => {
  return new Promise((resolve,reject)=>{
    fs.readFile("../resources/观书有感.md",(err,data)=>{
      //压入
      value.push(data);
      resolve(value)
    });
  })
}).then(value => {
  console.log(value.join('\r\n'));
  
})