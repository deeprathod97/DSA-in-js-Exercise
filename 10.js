// Using a Loop:

function findShortestString(arr) {
    if (arr.length === 0) return null; // Handle empty array case

    let shortest = arr[0]; // Initialize with the first element

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }

    return shortest;
}

// Example usage:
console.log(findShortestString(["apple", "banana", "fig", "grape"])); // Output: "fig"


// Using reduce Method:

function findShortestString(arr) {
    if (arr.length === 0) return null; // Handle empty array case

    return arr.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
}

// Example usage:
console.log(findShortestString(["apple", "banana", "fig", "grape"])); // Output: "fig"