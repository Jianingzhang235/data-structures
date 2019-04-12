var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance = Object.create(stackMethods);
  instance.storage = {};
  instance.top = {};
  return instance;
};
var stackMethods = {};


stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top ++;
};
stackMethods.pop = function() {
    this.top --;
    var result = this.storage[this.top];
    delete this.storage[this.top];
    return result;
};
stackMethods.size = function() {
   if (this.top <= 0) {

      return 0;
    }
    return this.top;
};