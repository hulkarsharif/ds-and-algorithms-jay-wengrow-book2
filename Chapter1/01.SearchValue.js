/*Searching for a value not contained within the array*/

function searchValueNotInArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return false;
        }
    }
    return true;
}

console.log(searchValueNotInArray([1, 2, 3, 4, 5], 6)); // Output: true (6 is not in the array)
