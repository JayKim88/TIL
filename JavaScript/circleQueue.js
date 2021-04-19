class CircleQueue {
  constructor(size) {
    this.maxQueueSize = size;
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty(){
    return this.front === this.rear;
  }

  isFull(){
    return (this.rear + 1) % this.maxQueueSize === this.front;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(element) {

    if(this.isFull() && this.size() === this.maxQueueSize){
      console.log("큐가 포화상태 입니다!!")
    } else if(this.isFull()){
      this.storage[this.rear] = element;
    } else {
      this.storage[this.rear] = element;
      this.rear = (this.rear + 1) % this.maxQueueSize;
    }
  }

  dequeue() {

    if(this.isEmpty() && this.size() === 0){
      console.log("큐가 비었습니다!!")
    } else if(this.isEmpty()){
      let deletedVal = this.storage[this.front];
      delete this.storage[this.front];
      return deletedVal;
    } else {
      let deletedVal = this.storage[this.front];
      delete this.storage[this.front];
      this.front = (this.front + 1) % this.maxQueueSize
      return deletedVal;
    }
  }
}

const queue = new CircleQueue(4)