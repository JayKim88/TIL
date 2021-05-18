function Queue() {
  collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  }
  this.isEmpty = function() {
    return (collection.length === 0);
  };
}

let myQueue = new Queue;

myQueue.print();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue.dequeue());
myQueue.print();
console.log(myQueue.front());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.isEmpty())