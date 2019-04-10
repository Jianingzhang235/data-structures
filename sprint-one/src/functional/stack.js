var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //storage stores 'size' number of keys and items as their values?
  //need way to add size numbers and subsequent items to storage.properties

  // var obj = {};

  // for (var i = 0; i < 4; i ++) {
  //   obj[i] = i;
  // }
  //   console.log(obj);

  //   {0: 0, 1: 1, 2: 2, 3: 3}


  // Stack = {0: data,
  //         1: moreData
  //   };

  //storatge[size] = whatever we're storing here
  var top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[top] = value;
    top ++;
  };

  someInstance.pop = function() {
    top --;
    var result = storage[top];
    delete storage[top];
    return result;
  };

  someInstance.size = function() {
    if (top <= 0) {
      return 0;
    }
    return top;
  };

  return someInstance;
};
