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
      if (this.head === null) {
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
      if (!this.head) {
         return undefined;
      }
      let current = this.head;
      let newTail = current;
      while (current.next) {
         newTail = current;
         current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
         this.head = null;
         this.tail = null;
      }
      return current;
   }
   // remove from the start
   shift() {
      //if List is empty return undefined
      if (!this.head) {
         return undefined;
      }
      // set the head to whatever the current next node value is
      let current = this.head;
      this.head = current.next;
      this.length--;
      // if there are no nodes left set the head and tail to null
      if (this.length === 0) {
         this.head = null;
         this.tail = null;
      }
      return current;
   }
   // add from the head
   unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
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

   // get by index
   get(index) {
      let count = 0;
      let current = this.head;

      if(index === 0) {
         return this.head;
      }

      // if the index is less than 0. or grater than the length
      if (index < 0 || index >= this.length) {
         return null;
      }

      // loop through the node
      while (current) {
         current = current.next;
         // increment count to mimic the index of an aray. thats why we set 
         // count = 0;
         count++;
         // when count is equal to index we found the value we want
         if (count === index) {
            return current
         }
      }
      return null;
   }

   set(index, value) {
      const node = this.get(index);
      if(!node) {
         return false;
      } else {
         node.val = value;
         return this;
      }
   }

   insert(index, value) {
      const newNode = new Node(value);
      if(index < 0 || index > this.length) {
         return false;
      }else if(index === 0) {
         this.unshift(value);
         return true
      }else if(index === (this.length - 1)) {
         this.push(value);
         return true;
      } else {
         let nodeByIndex = this.get(index - 1);
         let nextNode = this.get(index);
         
         nodeByIndex.next = newNode;
         nodeByIndex.next.next = nextNode;
         this.length++
         return true;
      } 
   }

   remove(index) {
      if(index < 0 || index > this.length) {
         return undefined
      }
      if(index === this.length) {
         return this.pop();
      } else if(index === 0) {
         return this.shift()
      } else {
         const oneBefore = this.get(index - 1);
         const removedNode = oneBefore.next;

         oneBefore.next = oneBefore.next.next;
         this.length--;
         return removedNode;
      }
   }
}

const first = new SinglyLinkedList();

first.push('hello');
first.push('there');
first.push('!');
first.push('oooo');
// first.pop();

// console.log(first.get(2))

// console.log(first.insert(1, 'new value'));
console.log(first.remove(1));


