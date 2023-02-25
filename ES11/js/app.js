// 静态引入 (用不用都引入了)
// import * as m1 from "./hello.js" 


//获取元素 
const btn = document.getElementById('btn')

btn.onclick = function(){
    //动态引入(用到的时候就引入)返回promise对象
    import('./hello.js').then(module =>{
      // console.log(module);
      module.hello();
    })
 }