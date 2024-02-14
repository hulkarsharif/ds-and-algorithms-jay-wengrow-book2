/*A Linear Solution*/
function hasDuplicateValue(array) {
    let existingNumbers = []; // An empty array to keep track of existing numbers

    for (let i = 0; i < array.length; i++) {
        if (existingNumbers[array[i]] === 1) {
            // If the number already exists in the existingNumbers array
            return true; // Then it's a duplicate, so return true
        } else {
            existingNumbers[array[i]] = 1; // Otherwise, mark the number as existing by storing 1 at its index in existingNumbers
        }
    }

    return false; // If no duplicates were found, return false
}
console.log(hasDuplicateValue([1, 2, 3, 4, 5])); // Output: false (No duplicates)
console.log(hasDuplicateValue([1, 2, 3, 4, 1])); // Output: true (Duplicate value: 1)
console.log(hasDuplicateValue([3, 7, 2, 9, 3])); //true
