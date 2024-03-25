/**
 * var a = 0;
function Parent(){
 this.a = 1;
 return this;
}
Parent.a = 2;
Parent.prototype={
 a : 3,
 setA: function(value){
  this.a = value;
  return this;
 }
}
console.log(new Parent().a);
console.log(Parent().a);
console.log(new Parent().setA(4).a);
console.log(a);
console.log(Parent().setA(5).a);
 */