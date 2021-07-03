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
  //root => left => right 순으로 value 여부를 확인하는데(전위순회), 
  //recursion 을 사용하여 깊이 탐색한다. 시간복잡도는 O(logn) 을 갖는다. 
  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value) {
      return !!(this.left && this.left.contains(value));
    }
    //자바스크립트에서 느낌표두개(!!)는 다른 타입의 데이터를 Boolean 타입으로 
    //명시적으로 형 변환(Type Conversion)하기 위해 사용합니다. 
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
/* callback 
    let arr = [];
    let cb = function (value) {
      arr.push(value);
    };
    
    arr = [3, 5, 7, 8, 10, 11, 14, 15, 16];
*/