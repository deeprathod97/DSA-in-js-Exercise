// Merge Two Arrays
// ● Problem: Merge two arrays into one array.
// ● Example: mergeArrays([1, 2], [3, 4]) should return [1, 2, 3, 4]

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}


console.log(mergeArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]
