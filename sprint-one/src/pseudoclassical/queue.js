var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0;
  this.bottom = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.top] = value;
  this.top ++;
}

Queue.prototype.dequeue = function() {
  //   if(this.top) {
  //     delete this.storage[this.buttom];
  //    this.bottom ++;
  //  } else {
  //    this.buttom = this.top;
  //    this.storage = {};
  //  }
    var result = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom ++;
    return result;

}

Queue.prototype.size = function() {
  if(this.top <= this.bottom) {
    return 0;
  }
  return this.top - this.bottom;
}


