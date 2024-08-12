// Find the Largest Number
// ● Problem: Given an array of numbers, find the largest number in the array.
// ● Example: findLargest([1, 2, 3, 4, 5]) should return 5.

function findLargest(arr) {
    if (arr.length === 0) return null; 

    let largest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }

    return largest;
}


console.log(findLargest([1, 2, 3, 4, 5])); // Output: 5
