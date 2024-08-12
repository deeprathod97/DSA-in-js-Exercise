// Find Index of a String
// ● Problem: Given an array of strings, find the index of a specific string.
// ● Example: findIndex(["a", "b", "c"], "b") should return 1.
function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; // Return -1 if the target string is not found
}

// Example usage:
console.log(findIndex(["a", "b", "c"], "b")); // Output: 1
