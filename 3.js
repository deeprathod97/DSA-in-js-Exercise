// Count Occurrences of a String
// ● Problem: Given an array of strings, count how many times a specific string appears.
// ● Example: countOccurrences(["apple", "banana", "apple",
// "orange"], "apple") should return 2.
function countOccurrences(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrences(["apple", "banana", "apple", "orange"], "apple")); // Output: 2

