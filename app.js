// binary search
function binarySearch(arr, value) {
  // keep track of the start and the end of the array
  let left = 0;
  let right = arr.length - 1;
  // get the middle index
  let middle = Math.floor((left + right) / 2);

  // run while loop until middle is equal to value OR when left is equal or less than right.
  while (arr[middle] !== value && left <= right) {
    // if value is less than middle, then udpate right to take middle place,
    // otherwise update left index to take middle place
    if (value < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    // get the updated middle value
    middle = Math.floor((left + right) / 2);
  }
  // return middle if found, otherwise return -1
  return arr[middle] === value ? middle : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 40));

// bubble sort
function bubbleSort(arr) {
  let noSwaps = false;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// selectionSort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([3, 5, 2, 1, 5, 85, 24, 56, 4, 6, 4, 23, 211, 1, 3]));
