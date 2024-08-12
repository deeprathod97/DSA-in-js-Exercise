function containsSubstring(arr, substring) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(substring)) {
            return true;
        }
    }
    return false;
}

console.log(containsSubstring(["hello", "world"], "ell")); // Output: true


