var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  extend(newTree, treeMethods);
  // your code here
  //children is an array;
    // fix me

  return newTree;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}

var treeMethods = {};

//The Object.assign(target, source) method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object
treeMethods.addChild = function(value) {
  var child = Tree(value);


  // extend(newTree, treeMethods);
  this.children.push(child);

};

treeMethods.contains = function(target) {
  //travels over whole tree
    //if it finds target return true
  var targetChild = Tree(target);
  var ifFound = false;
  function travel (targetChild) {
    if (targetChild.value === target) {
      ifFound = true;
    }
    targetChild.children.forEach(function(child) {
      travel(child);
    })
  }
  travel (this);
  return ifFound;




};



/*
 * Complexity: What is the time complexity of the above functions?
 O(n) - constant time
 */
