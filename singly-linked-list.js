function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyList() {
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(value) {
  var node = new Node(value),
      currentNode = this.head;

  // 1st use-case: an empty list
  if (!currentNode) {
      this.head = node;
      this._length++;

      return node;
  }

  // 2nd use-case: a non-empty list
  while (currentNode.next) {
      currentNode = currentNode.next;
  }

  currentNode.next = node;

  this._length++;
   
  return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
  var currentNode = this.head,
      length = this._length,
      count = 1,
      message = {failure: 'Failure: non-existent node in this list.'};

  // 1st use-case: an invalid position
  if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure);
  }

  // 2nd use-case: a valid position
  while (count < position) {
      currentNode = currentNode.next;
      count++;
  }

  return currentNode;
};

SinglyList.prototype.remove = function(position) {
  var currentNode = this.head,
      length = this._length,
      count = 0,
      message = {failure: 'Failure: non-existent node in this list.'},
      beforeNodeToDelete = null,
      nodeToDelete = null,
      deletedNode = null;

  // 1st use-case: an invalid position
  if (position < 0 || position > length) {
      throw new Error(message.failure);
  }

  // 2nd use-case: the first node is removed
  if (position === 1) {
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this._length--;
       
      return deletedNode;
  }

  // 3rd use-case: any other node is removed
  while (count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;
};









// 双向链表

function Node(value) {
  this.data = value;
  this.previous = null;
  this.next = null;
}

function DoublyList() {
  this._length = 0;
  this.head = null;
  this.tail = null;
}

DoublyList.prototype.add = function(value) {
  var node = new Node(value);

  if (this._length) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
  } else {
      this.head = node;
      this.tail = node;
  }

  this._length++;

  return node;
};

DoublyList.prototype.searchNodeAt = function(position) {
  var currentNode = this.head,
      length = this._length,
      count = 1,
      message = {failure: 'Failure: non-existent node in this list.'};

  // 1st use-case: an invalid position
  if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure);
  }

  // 2nd use-case: a valid position
  while (count < position) {
      currentNode = currentNode.next;
      count++;
  }

  return currentNode;
};

DoublyList.prototype.remove = function(position) {
  var currentNode = this.head,
      length = this._length,
      count = 1,
      message = {failure: 'Failure: non-existent node in this list.'},
      beforeNodeToDelete = null,
      nodeToDelete = null,
      deletedNode = null;

  // 1st use-case: an invalid position
  if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure);
  }

  // 2nd use-case: the first node is removed
  if (position === 1) {
      this.head = currentNode.next;

      // 2nd use-case: there is a second node
      if (!this.head) {
          this.head.previous = null;
      // 2nd use-case: there is no second node
      } else {
          this.tail = null;
      }

  // 3rd use-case: the last node is removed
  } else if (position === this._length) {
      this.tail = this.tail.previous;
      this.tail.next = null;
  // 4th use-case: a middle node is removed
  } else {
      while (count < position) {
          currentNode = currentNode.next;
          count++;
      }

      beforeNodeToDelete = currentNode.previous;
      nodeToDelete = currentNode;
      afterNodeToDelete = currentNode.next;

      beforeNodeToDelete.next = afterNodeToDelete;
      afterNodeToDelete.previous = beforeNodeToDelete;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
  }

  this._length--;

  return message.success;
};