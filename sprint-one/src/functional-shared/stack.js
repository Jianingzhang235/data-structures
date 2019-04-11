var extend = function(obj1, obj2) {
  for(var key  in obj2) {
    obj1[key] = obj2[key];
  }
};
var Stack = function(value) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var top = 0;
  var storage = {
    value : value

  };

  extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  push: function(value) {
    storage[top] = value;
    top ++;
  },
  pop: function () {
    var result = storage[top] = value;
    top --;
    return result;
  },
  size: function () {
    if (top <= 0) {
      return 0;
    }
    return top;
  }
};