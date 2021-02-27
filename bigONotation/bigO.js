function addUpTo(n) {
   return n * (n + 1) / 2;
}
// addUpTo(100) 
//always 3 operations no matter if n grows O(1)

function addUpToForLoop(n) {
   let total = 0;
   for(let i  = 1; i <= n; i++) {
      total += i;
   }
   return total;
}
// addUpToForLoop(100)
// Number of operations is eventually bounded by a multiple of n (100n), simplify that with O(n)

function printAllPairs(n) {
   for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
         console.log(i, j);
      }
   }
}
// printAllPairs(10)
// As n grows then it would be n * n larger O(n^2)

function compressBoxesTwice(boxes1, boxes2) {
   boxes1.forEach(boxes => console.log(boxes));

   boxes2.forEach(boxes => console.log(boxes));
}

// compressBoxesTwice([],[]); should it be O(n) ?
// No becase the third rule states that different terms for inputs, boxes1 and boxes2 are two different inputs
// One could be a hundred items long and the other one can be just one item
// is actually (n + m)

// If it was a nested for loop with two different arrays then the time complexity would be
// (n * m)


/**

- Big O-

O(1) Constant- no loops
O(log N) Logarithmic- usually searching algorithms have log(n) if they are sorted (Binary Search)
O(n) Linear- for loops while loops
O(n*log(n)) Log Linear- sorting operations usually
O(n^2) Quadratic- every element in a collection needst to be compared to every other element. Two nested loops
O(2^N) Exponential - recursive algorightms that solve a problem of size N
O(n!) - you are adding a loop for every element

** Iterating throught half a collection is still O(n)
** Two separate collections: O(n + m)


- Rule Book-

Rule 1: Always worst case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(n + m) N and M arrays nested would be O(n * m)
Rule 4: Drop non-dominant terms

 */
