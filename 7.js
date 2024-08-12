// Check for Substring in Array
// ● Problem: Given an array of strings, check if a specific substring is present in any of
// the strings.
// ● Example: containsSubstring(["hello", "world"], "ell") should return
// true.
function containsSubstring(arr, substring) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(substring)) {
            return true;
        }
    }
    return false;
}

console.log(containsSubstring(["hello", "world"], "ell")); // Output: true


