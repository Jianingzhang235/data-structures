var Stack = function () {
  var instance = {};
  instance.storage = {};
  instance.top = 0;
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;
  extend(instance, stackMethods);
  return instance;
};

var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function () {
  this.top--;
  var item = this.storage[this.top];
  delete this.storage[this.top];
  return item;
};

stackMethods.size = function () {
  if (this.top <= 0) {
    return 0;
  }
  return this.top;
};