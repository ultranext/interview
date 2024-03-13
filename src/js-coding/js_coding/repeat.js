实现一个repeat方法，要求如下：


// 需要实现的函数

function repeat (func, times, wait) {

 // 补全

}



// 使下面调用代码能正常工作

const repeatFunc = repeat(console.log, 4, 3000);

repeatFunc("hello world");    //会输出4次 hello world, 每次间隔3秒


// answer

function repeat(fn, times, wait) {

    if(typeof times !== 'number') return;
  
    if(typeof wait !== 'number') return;
  
    return function(str){
  
      for(let i = 0; i < times; i++){
  
        setTimeout(()=>{
  
          fn(str)
  
        }, i * wait)
  
      }
  
    }




    ```javascript
var a= function () { this.b =3; }
var c = new a();
a.protorype.b = 9;
var b = 7;
a();
```
问：
```javascript
console.log(b);
console.log(c.b); 
```
分别输出什么？

第一个 `b = 3`
- 第二个 `c.b = 3`