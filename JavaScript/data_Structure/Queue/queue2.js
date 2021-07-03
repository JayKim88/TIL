class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return Object.keys(this.storage).length;
    //reference:  return this.rear - this.front;
  }

  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if(this.size() === 0){
      this.front = this.rear;
      return undefined;
    }
    //reference:
    // if (this.size() === 0) {
    //   return;
    // }
    const deletedVal = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return deletedVal;
  }
}