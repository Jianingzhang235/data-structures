class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  };
  push(value) {
    this.storage[this.top] = value;
    this.top ++;
  };
  pop() {
    this.top --;
    var item = this.storage[this.top];
    delete this.storage[this.top];
    return item;

  };
  size() {
    if(this.top <= 0) {
      return 0;
    }
    return this.top;

  };

}