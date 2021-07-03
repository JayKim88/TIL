class Stack {
  constructor() {
    this.storage = {};
    this.top = -1;
  }

  size() {
    return this.top + 1;
  }

  push(element) {
    this.top += 1;
    this.storage[this.top] = element;
  }

  pop() {
    if (this.size() <= 0) {
      return;
    }

    const result = this.storage[this.top];
    delete this.storage[this.top];
    this.top -= 1;
    
    return result;
  }
}

module.exports = Stack;
