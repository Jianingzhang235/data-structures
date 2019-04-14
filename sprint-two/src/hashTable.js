

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //retrieve a bucket
  var bucket = this._storage.get(index)
  //if no bucket, make bucket
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  var wasFound = false;

  //iterate over bucket
  for (var i = 0; i < bucket.length; i ++) {
    var tuple = bucket[i];
    //if key exists already
    if (tuple[0] === k) {
      //update it
      tuple[1] = v;
      wasFound = true;
      break;
    }
  }
    //if key is not found
  if (!wasFound) {
    //insert new tuple
    bucket.push([k, v]);
  }



};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

    //retrieve a bucket
    var bucket = this._storage.get(index)
    //if no bucket, nothing to retrieve
    if (!bucket) {
      return undefined;
    }

    //iterate over bucket
    for (var i = 0; i < bucket.length; i ++) {
      var tuple = bucket[i];
      //use key to find value
      if (tuple[0] === k) {
        //return value;
        return tuple[1];
      }
    }

    //if nothing was found, return undefined
    return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //retrieve a bucket
  var bucket = this._storage.get(index)
  //if no bucket, nothing to retrieve
  if (!bucket) {
    return undefined;
  }

  //iterate over bucket
  for (var i = 0; i < bucket.length; i ++) {
    var tuple = bucket[i];
    //use key to find value
    if (tuple[0] === k) {
      //delete key;
      bucket.splice(i, 1);
      //return value;
      return tuple[1];
    }
  }
  //if nothing was found, return undefined
  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?

 constant time
 */


