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
new Promise(function (resolve) {
    console.log('promise3');
    resolve();
}).then(function () {
    console.log('promise4');
});
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
// Error: error in promise2 then
//     at <anonymous>:13:15
// error in promise2 catched


