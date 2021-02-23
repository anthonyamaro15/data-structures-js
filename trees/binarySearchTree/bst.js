class Node {
   constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
   }
}

class BST {
   constructor() {
      this.root = null;
   }

   insert(value) {
      const newNode = new Node(value);
      if(!this.root) {
         this.root = newNode;
      } else {
         let current = this.root;
         while(true) {
            if(value === current.value) {
               return undefined;
            }

            if(value < current.value) {
               if(current.left === null) {
                  current.left = newNode;
                  return this;
               } else {
                  current = current.left;
               }
            } else if(value > current.value) {
               if(current.right === null) {
                  current.right = newNode;
               } else {
                  current = current.right;
               }
            }
         }
      }
   }

   BFS() {
      let node = this.root;
      const data = [];
      const queue = [];

      // start queue with the current root
      queue.push(node);

      // while queue is not empty
      while(queue.length) {
         // remove the first value from queue
         node = queue.shift();
         // push remove value to data
         data.push(node.value);
         // check if there is a left
         // if there is then push it to the queue
         if(node.left) {
            queue.push(node.left);
         }
         // check if there is a right,
         // if there is then push it to the queue
         if(node.right) {
            queue.push(node.right);
         }
      }
      // return data [30, 25, 35, 15, 38]
      return data;
   }
}

const bst = new BST();

bst.insert(30);
bst.insert(25);
bst.insert(35);
bst.insert(15);
bst.insert(38);

console.log(bst.BFS());

// console.log(bst);
