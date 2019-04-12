
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.top = 0;
  extend(storage, stackMethods);
  return storage;
};

var extend = function(obj, methods){
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {
  push: function(value){
    this.top ++;
    // console.log(this.top + ' this.top')
    // console.log(this.storage + ' this.storage')
    console.log(storage + ' just storage')
    console.log(this + ' this')
    this.storage[this.top] = value;

  },
  pop: function(){
    this.top --
    var item = this.storage[this.top];
    delete this.storage[this.top];
    return item;
  },
  size: function(){
    if (this.top <= 0) {
      return 0;
    }
    return this.top;
  }
};