var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    console.log(list.head + ' list.head')
    console.log(list.tail + ' list.tail')
    if (list.head === null) {
    list.head = node;
    list.tail = node;
    console.log(list.head + ' list.head')
    console.log(list.tail + ' list.tail')
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    list.head = list.head.next;
  };

  list.contains = function(target) {
    var current = list.head;
    if (current.value === target) {
       return true;
    } else {
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
