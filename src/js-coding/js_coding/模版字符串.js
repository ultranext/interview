/**
 实现模版字符串功能

 编写一个函数（toTmplString）实现模版字符串功能


function toTmplString(str, infos){
}

如输入
let infos={
name:'xiaoming',
age:23,
city:'beijing',
school: 'PKU'
}

toTmplString("my name is ${name},I am ${age} years old",infos)

//期望输出：   “my name is xiaoming,I am 23 years old"

====================== part 2 ==============================

S编码实现一个render方法，使得可以这样调用，例如
const year = '2017';
const month = '09';
const day = '21';
const str = render('${year}-${month}-${day}');
console.log(str); 输出2017-09-21

 */

const render = (str) => {
    return str.replace(/\$\{(.*?)\}/g, (...args) => {
        console.log('args', args)
        const key = args[1];
        return eval(key)
    })
}
const year = '2017';
const month = '09';
const day = '21';
const str = render('${year}-${month}-${day}');
console.log('result', str);

// =====================================

let infos={
    name:'xiaoming',
    age:23,
    city:'beijing',
    school: 'PKU'
}


const toTmplString = (str, data) => {
    return str.replace(/\$\{(.*?)\}/g, (...args) => {
        console.log('args', args)
        const key = args[1];
        return data[key] || ''
    })
}

console.log(toTmplString("my name is ${name},I am ${age} years old",infos))