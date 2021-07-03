const LimitedArray = require('./helpers/limitedArray');
const hashFunction = require('./helpers/hashFunction');
class HashTable {
  constructor() {
    this._itemNum = 0;
    this._bucketNum = 8;
    this._storage = LimitedArray(this._bucketNum);
  }
  insert(key, value) {
    const index = hashFunction(key, this._bucketNum);
    const bucket = this._storage.get(index) || [];
    for (let i = 0; i < bucket.length; i += 1) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        const oldValue = tuple[1];
        tuple[1] = value;
        return oldValue;
      }
    }
    bucket.push([key, value]);
    this._storage.set(index, bucket);
    this._itemNum += 1;
    if (this._itemNum > this._bucketNum * 0.75) {
      this._resize(this._bucketNum * 2);
    }
    return undefined;
  }
  retrieve(key) {
    const index = hashFunction(key, this._bucketNum);
    const bucket = this._storage.get(index) || [];
    for (let i = 0; i < bucket.length; i += 1) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = hashFunction(key, this._bucketNum);
    const bucket = this._storage.get(index) || [];
    for (let i = 0; i < bucket.length; i += 1) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this._itemNum -= 1;
        if (this._itemNum < this._bucketNum * 0.25) {
          this._resize(Math.floor(this._bucketNum / 2));
        }
        return tuple[1];
      }
    }
    return undefined;
  }
  _resize(newBucketNum) {
    const oldStorage = this._storage;
    // min size of 8, return if nothing to do!
    newBucketNum = Math.max(newBucketNum, 8);
    if (newBucketNum === this._bucketNum) {
      return;
    }
    this._bucketNum = newBucketNum;
    this._storage = LimitedArray(this._bucketNum);
    this._itemNum = 0;
    oldStorage.each((bucket) => {
      if (!bucket) {
        return;
      }
      for (let i = 0; i < bucket.length; i += 1) {
        const tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
    });
  }
}
module.exports = HashTable;

let myHashTable = new HashTable;
myHashTable.insert('Jay Kim', 'Handsome!');
myHashTable.insert('Mindy Wu', 'Beautiful!');
console.log(myHashTable._storage)
console.log(myHashTable._itemNum)
