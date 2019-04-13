var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binarySearchTreeMethods);
  binaryTree.value = value;
  binaryTree.left = undefined;
  binaryTree.right = undefined;
  return binaryTree;


};

//each tree needs a right and a left key, to point to the children bellow it
var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {

  if (value < this.value) {
     if(this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }  else if (value >this.value) {
    if(this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }

  }



};

binarySearchTreeMethods.contains = function(value) {

  // var targetTree = BinarySearchTree(value);
  // var isFound = false;
  // function checkTree(targetTree){
  //   if (value === this.value) {
  //     isFound = true;
  //   } else if (this.left && value < this.value) {
  //     checkTree(targetTree.left);
  //   } else if (this.right && value > this.value) {
  //     checkTree(targetTree.right);
  //   }
  // }
  // checkTree(this);
  // return isFound;
  var isFound = false;
  if (value === this.value) {
    isFound = true;
  } else if (this.left !==undefined && value < this.value) {
    this.left.contains(value);
  } else if (this.right !==undefined && value > this.value) {
    this.right.contains(value);
  }

  return isFound;
};

binarySearchTreeMethods.depthFirstLog = function() {
  // log = [];
  // for ()
  // log.push(this.value);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//  var tree = BinarySearchTree(23);
//  tree(11);
//  tree(9);


