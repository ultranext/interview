// new

function _new(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function create(prototype) {
    function F(){};
    F.prototype = prototype;
    return new F();
}