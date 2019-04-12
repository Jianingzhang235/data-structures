var Queue = function() {
  var instance = {};
  instance.storage = {};
  instance.top = 0;
  instance.bottom = 0;
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;
  extend(instance, queueMethods);
  return instance;
};

var extend = function(obj1, obj2) {
  for(var key in obj2) {
    obj1[key]= obj2[key];
  }
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.top++;
  this.storage[this.top] = value;
};

queueMethods.dequeue = function() {
  this.bottom ++;
  var item = this.storage[this.bottom];
  delete this.storage[this.bottom];
  return item;
};

queueMethods.size = function() {
  if(this.bottom > this.top) {
    return 0;
  }
  return this.top - this.bottom;;
};