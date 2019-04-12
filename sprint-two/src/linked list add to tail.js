  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null) {
    list.head = node;
    list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };