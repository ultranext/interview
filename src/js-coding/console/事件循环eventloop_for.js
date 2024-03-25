/**
 * function a() {
for(var i=0;i<2;i++) {
setTimeout(() => {
console.log("t", i)
},0)
new Promise(r => {
console.log("p", i)
}).then(() => {
console.log("p_t", i)
})
console.log("m", i)
}
}
 */