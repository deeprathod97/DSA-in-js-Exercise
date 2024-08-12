// 1. Bubble Sort
// Problem: Implement the Bubble Sort algorithm to sort an array of numbers in ascending
// order. Bubble Sort repeatedly steps through the list, compares adjacent elements, and
// swaps them if they are in the wrong order.
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements if they are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // Reduce the range of elements to check as the largest element
        // bubbles up to its correct position in each pass
        n--;
    } while (swapped);

    return arr;
}

// Example usage:
console.log(bubbleSort([4, 2, 5, 1, 3])); // Output: [1, 2, 3, 4, 5]


