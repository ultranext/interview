/**
 * setTimeout(()=> console.log(1))

new Promise(resolve => {
  resolve()
  console.log(2)
}).then(_ => {
  console.log(3)
  Promise.resolve().then(_ => {
    console.log(4)
  }).then(_ => {
    Promise.resolve().then(_ => {
      console.log(5)
    })
  })
})

console.log(6)
 */


/**
 * async function f1() {
    return new Promise((resolve) => {
        console.log(4)
        resolve()
    }).then(() => {
        console.log(5)
    })
}

async function run() {
    console.log(1)
    new Promise((resolve) => {
        console.log(2)
        resolve()
    }).then(() => {
        console.log(3)
    })
    await f1()
    setTimeout(() => {
        console.log(6)
    }, 0)
    console.log(7)
}

run()
 */

/**
 * const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    const p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
        console.log(p);
      }, 0);
      resolve(1);
    });
    resolve(2);
    p.then(arg => {
      console.log(arg);
    });
  });
first().then(arg => {
  console.log(arg);
});
console.log(4);
 */

console.log('1');
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
});
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})


/**
 * (async () => {

 setTimeout(() => {
  console.log('1');
 }, 0);

 const p = new Promise(resolve => {
  console.log('2');
  resolve(1);
  console.log('3');
 });

 p.then(() => {
  console.log('4');
 });

 console.log('5');
 await p;
 console.log('6');

})();
 */