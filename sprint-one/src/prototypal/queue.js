var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.top = 0;
  instance.bottom = 0;
  return instance;

};

var queueMethods = {};
// var top = 0;
// var bottom = 0;

queueMethods.enqueue = function(value) {
  this.top ++;
  this.storage[this.top] = value;
};

queueMethods.dequeue = function() {
  this.bottom ++;
  var item = this.storage[this.bottom];
  delete this.storage[this.bottom];
  return item;
};

queueMethods.size = function() {
  if (this.top - this.bottom <=0) {
    return 0;
  }
  return this.top - this.bottom;
};