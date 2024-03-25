
var myObject = {
    foo: 'bar',
    func: function() {
        var self = this;
        console.log("outer fn : this.foo = " + this.foo);
        console.log("outer fn : self.foo = " + self.foo);
        (function(){
            console.log("inner fn : this.foo = " + this.foo);
            console.log("inner fn : self.foo = " + self.foo);
        }());
    }
}

myObject.func();
var fn = myObject.func;
fn();
