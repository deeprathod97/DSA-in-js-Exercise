// Sum of All Numbers
// ● Problem: Given an array of numbers, return the sum of all the numbers.
// ● Example: sumArray([1, 2, 3, 4]) should return 10.

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
