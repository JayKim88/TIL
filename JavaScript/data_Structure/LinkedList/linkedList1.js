class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addToTail(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this._size += 1;
  }

  remove(value) {
    const index = this.indexOf(value);
    if (index === -1) {
      return;
    }

    if (index === 0) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this._size = 0;
      } else {
        this.head = this.head.next;
        this._size -= 1;
      }

      return;
    }

    const prevNode = this.getNodeAt(index - 1);
    const removedNode = prevNode.next;

    if (removedNode === this.tail) {
      prevNode.next = null;
      this.tail = prevNode;
      this._size -= 1;
      return;
    }

    prevNode.next = removedNode.next;
    this._size -= 1;
  }

  getNodeAt(index) {
    let counter = -1;

    let currentNode = this.head;
    while (currentNode) {
      counter += 1;
      if (index === counter) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return undefined;
  }

  contains(value) {
    return this.indexOf(value) !== -1;
  }

  indexOf(value) {
    let index = 0;

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      index += 1;
      currentNode = currentNode.next;
    }

    return -1;
  }

  size() {
    return this._size;
  }
}