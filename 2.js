// Reverse an Array
// ● Problem: Reverse the elements of an array in place.
// ● Example: reverseArray([1, 2, 3, 4]) should return [4, 3, 2, 1].

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      
        [arr[left], arr[right]] = [arr[right], arr[left]];

       
        left++;
        right--;
    }

    return arr;
}


console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
