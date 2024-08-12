// Remove Duplicates
// ● Problem: Given an array of numbers, remove all duplicate values and return the
// array with unique values only.
// ● Example: removeDuplicates([1, 2, 2, 3, 4, 4]) should return [1, 2,
// 3, 4].

function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
