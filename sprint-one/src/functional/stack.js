var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //storage stores 'size' number of keys and items as their values?
  //need way to add size numbers and subsequent items to storage.properties

  //storatge[size] = whatever we're storing here
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size ++;
  };

  someInstance.pop = function() {
    size --;
  };

  someInstance.size = function() {
    if (size <= 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
