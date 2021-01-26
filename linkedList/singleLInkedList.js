class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

class SinglyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   // add new value to the end of the tail
   push(val) {
      const node = new Node(val);
      // if the list is empty, then set the head and tail to the new value
      if(this.head === null) {
         this.head = node;
         this.tail = this.head;
      } else {
         // otherwise add new value to tail.next and set the tail to the new node as well
         this.tail.next = node;
         this.tail = node;
      }
      // to keep track of the length increment 1 everytime a new node is added and return the node
      this.length++;
      return this;
   }
   // remove from the end
   pop() {
      if(!this.head) {
         return undefined;
      }
      let current = this.head;
      let newTail = current;
      while(current.next) {
         newTail = current;
         current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0) {
         this.head = null;
         this.tail = null;
      }
      return current;
   }
   // remove from the start
   shift() {
      //if List is empty return undefined
      if(!this.head) {
         return undefined;
      }
      // set the head to whatever the current next node value is
      let current = this.head;
      this.head = current.next;
      this.length--;
      // if there are no nodes left set the head and tail to null
      if(this.length === 0) {
         this.head = null;
         this.tail = null;
      }
      return current;
   }
   // add from the head
   unshift(val) {
      const newNode = new Node(val);
      if(!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         let currHead = this.head;
         this.head = newNode;
         this.head.next = currHead;
      }
      this.length++;
      return this;
   }
}

const first = new SinglyLinkedList();

first.push('hello');
first.push('there');
first.push('!');
first.unshift('oooo');
// first.pop();



console.log(first);
