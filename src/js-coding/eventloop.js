async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    new Promise(function (resolve) {
        console.log('promise1');
        resolve();
        console.log('promise1 resolved')
    }).then(function () {
        console.log('promise2');
        throw new Error('error in promise2 then')
    }).catch(function(e) {
        console.log(e)
        return 'error in promise2 catched'
    }).then(function(res) {
        console.log(res)
    });
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0)
async1();
let p = new Promise(function (resolve) {
    console.log('promise3');
    resolve();
})
p.then(function () {
    console.log('promise4');
    throw new Error();
}).catch(() => {
    console.log('promise4_err')
});
p.then(function() {
    console.log('promise4_another_then')
})

console.log('script end');

// script start
// async1 start
// promise1
// promise1 resolved
// promise3
// script end
// promise2
// async1 end
// promise4
// promise4_another_then
// Error: error in promise2 then
//     at <anonymous>:13:15
// promise4_err
// error in promise2 catched
// setTimeout


