// Sort Array of Numbers
// ● Problem: Sort an array of numbers in ascending order.
// ● Example: sortArray([4, 2, 5, 1, 3]) should return [1, 2, 3, 4, 5].
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


console.log(bubbleSort([4, 2, 5, 1, 3])); // Output: [1, 2, 3, 4, 5]

// EX 2

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Example usage:
console.log(sortArray([4, 2, 5, 1, 3])); // Output: [1, 2, 3, 4, 5]

