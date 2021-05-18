//Create a stack
let Stack = function(){
  this.count = 0;
  this.storage = {};

  //Adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  //Removes and returns the value at the end of the stack 
  this.pop = function() {
    if(this.count === 0) {
      return undefined;
    } 

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  } 

  this.size = function() {
    return this.count;
  }

  //Returns the value at the end of the stack => last added element 
  this.peek = function() {
    return this.storage[this.count-1]
  }
}

let newStack = new Stack;

newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.peek());
console.log(newStack.pop());
console.log(newStack.peek());
console.log(newStack.push("hello"));
console.log(newStack.size());
console.log(newStack.storage);