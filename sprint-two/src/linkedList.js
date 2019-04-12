var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    list.head = node;
    list.tail = node;
  };

  list.removeHead = function() {
    list.head = list.head.next;
  };

  list.contains = function(target) {
    var current = list.head;
    if (current.value !== target) {
      current = current.next;
    }
    return current;
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
