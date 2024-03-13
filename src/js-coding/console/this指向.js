/*

描述下方的输出内容


var x = 1;
function fn() {
  const x = 2;
  const a = {
    x: 3,
    fn1() {
      console.log(this.x);
    },
    fn2: () => {
      console.log(this.x);
    }
  }
  const fn3 = a.fn1
  a.fn1();
  a.fn2();
  fn3();
}
fn.call({x: 4});
*/