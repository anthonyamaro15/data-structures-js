/**
 *    WHAT IS A QUEUE?
 *    
 *    A FIFO data structure
 * 
 *  - First In First Out
 * 
 * Examples in programming?
 * 
 * 1. Background tasks
 * 2. Uploading resources
 * 3. Printing / Task processing
 */


class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Queue {
   constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
   }

   enqueue(value) {
      const newNode = new Node(value);

      if(!this.first) {
         this.first = newNode;
         this.last = newNode;
      } else {
         this.last.next = newNode;
         this.last = newNode;
      }
      this.size++;
      return this.size;
   }

   dequeue() {
      let removedNode;
      if(!this.first) {
         return null;
      }
      if(this.size === 1) {
         removedNode = this.first;
         this.first = null;
         this.last = null;
         this.size--;
      } else {
         removedNode = this.first;
         this.first = removedNode.next;
         this.size--;
      }
      return removedNode;

   }
}

const queue = new Queue();

queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');

console.log(queue.dequeue());

console.log(queue);
