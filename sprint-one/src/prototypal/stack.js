var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj = Object.create(stackMethods);
  return obj;
};
var stackMethods = {};
var storage = {};
var size = 0;

stackMethods.push = function(value) {
  storage[size] = value;
  size ++;
};
stackMethods.pop = function() {
    size --;
    var result = storage[size];
    delete storage[size];
    return result;
};
stackMethods.size = function() {
   if (size <= 0) {

      return 0;
    }
    return size;
};