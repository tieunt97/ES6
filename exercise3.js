// 4.	Math + Number + String + Array + Object
// 4.1. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 16, false, -21, '',undefined, 45, null]
// Expected result : [16, -21, 45]
let filter = arr => arr.filter(e => e);
console.log(filter([NaN, 1, 0, false, null, 18, undefined, 27]));


// 4.2. Write a JavaScript function to remove a specific element from an array.
let remove_array_element = (arr, s) => arr.filter((e) => e != s);
// Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]


// 4.3. Write a JavaScript function to get a random item from an array.
let randomItemOfArr = (arr) => {
    let rd = Math.floor(Math.random() * arr.length);
    return arr[rd];
}
console.log(randomItemOfArr([1, 2, 3, 4, 5]));


// 4.4. Given the array
let arr = [
  {
    id: 1,
    scores: [7, 8, 3, 4]
  },
  {
    id: 2,
    scores: [5, 10, 9, 6]
  },
  {
    id: 3,
    scores: [9, 7, 4, 8]
  }
]
// Write a JavaScript function using Array.reduce() to compute the sum of all scores in the array.
let sumScores = (arr) => arr.reduce((sum, {scores}) => sum + scores.reduce((s, e) => s + e), 0);
console.log(sumScores(arr));


// 4.5. Write a JavaScript function to increase all elements of an array by 10.
// Sample array: [5, 10, 15, 20, 25, 30]
// Expected result: [15, 20, 25, 30, 35, 40]
let increaseElementOfArr = (arr) => arr.map((e) => e + 10);
console.log(increaseElementOfArr([5, 10, 15, 20, 25, 30]));
