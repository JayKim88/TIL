class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTreeNode(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTreeNode(value);
      } else {
        this.right.insert(value);
      }
    } else {
      // do nothing: The tree already contains this value
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value) {
      return !!(this.left && this.left.contains(value));
    }
    if (value > this.value) {
      return !!(this.right && this.right.contains(value));
    }
  }

  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback);
    }
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback);
    }
  }
}

module.exports = BinarySearchTreeNode;
