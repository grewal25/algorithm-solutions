function findNextGreater(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("mid", mid);
    if (numbers[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (left < numbers.length) {
    return numbers[left]; // Found a greater element
  } else {
    return -1; // No greater element, handle as needed
  }
}

// Example usage:
const numbers = [2, 3, 5, 7, 11];
const target = 4;
console.log(findNextGreater(numbers, target)); // Output: 5

// function nextGreatestLetter(letters, target) {
//   let left = 0;
//   let right = letters.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (letters[mid] <= target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   // 'left' is now at the smallest index of element greater than 'target'
//   // If 'left' is beyond the last index, wrap around to the first element
//   return letters[left % letters.length];
// }

// // Example usage:
// const letters = ["c", "f", "j"];
// const target = "a";
// console.log(nextGreatestLetter(letters, target)); // Output: "c"
