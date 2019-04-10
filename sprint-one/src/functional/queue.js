var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;
  var bottom = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[top] = value;
    top ++;
  };

  someInstance.dequeue = function() {
    var result = storage[bottom];
    delete storage[bottom];
    bottom ++;
    return result;
  };

  someInstance.size = function() {
    if (top - bottom <= 0) {
      return 0;
    }
    return top - bottom;
  };

  return someInstance;
};
