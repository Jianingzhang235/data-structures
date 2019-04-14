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
  }  else if (value > this.value) {
    if(this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }

  }




};

binarySearchTreeMethods.contains = function(value) {


  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if(!this.left) {
      return false;
    }
      return this.left.contains(value);

  } else if (value > this.value) {
    if(!this.right) {
      return false;
    }
    return this.right.contains(value);
  }

};

binarySearchTreeMethods.depthFirstLog = function(callBack) {

  callBack(this.value);
  if(this.left !== undefined) {
     this.left.depthFirstLog(callBack);
   }
  if(this.right !== undefined) {
      this.right.depthFirstLog(callBack);
   }



};

/*
 * Complexity: What is the time complexity of the above functions?
 */


