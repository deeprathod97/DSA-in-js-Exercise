function linearSearchString(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true; // Return true if the target string is found
        }
    }
    return false; // Return false if the target string is not found
}

// Example usage:
console.log(linearSearchString(["apple", "banana", "cherry"], "banana")); // Output: true
console.log(linearSearchString(["apple", "banana", "cherry"], "grape"));  // Output: false

