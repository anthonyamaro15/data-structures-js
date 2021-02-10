// create a stack with SinglyLinkedList
/**
 *    WHAT IS A STACK?
 * 
 * - LIFO data structure
 * 
 * - The last element added to the satck will be the first element removed from the stack
 */

/**
 * 1. The function should accept a value
 * 2. Create a new node with that value
 * 3. If there are no nodes in the stack, set the first and alsta property to be the newly created node
 * 4. If there is at least one node, create a variable that stores the current first property on the stack
 * 5. Reset the first property to be the newly created node
 * 6. Set th enext property on the node to be the previously created variable
 * 7. Increment the size of the stack by 1
 */

class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Stack {
   constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
   }

   push(value) {
      const newNode = new Node(value);
      if(!this.first) {
         this.first = newNode;
         this.last = newNode;
      } else {
         const currentFirst = this.first;
         this.first = newNode;
         this.first.next = currentFirst;
      }
      this.size++;
      return this.size;
   }

   pop() {
      let currentFirst;
      if(!this.first) {
         return null;
      }
      if(this.size === 1) {
         currentFirst = this.first;
         this.first = null;
         this.last = null;
         this.size--;
      } else {
         currentFirst = this.first;
         this.first = currentFirst.next;
         this.size--;
      }
      return currentFirst;
   }
}

const t = new Stack();

t.push('hello');
t.push('there');
console.log(t.pop());
// console.log(t.pop());
// console.log(t.pop());



// console.log(t);
