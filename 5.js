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
