/*Bubble Sort */
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort([65, 55, 45, 35, 25, 15, 10]));

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

/*Use Big O Notation to describe the time complexity of the following function. It finds the greatest product of any pair of two numbers within a given array:*/

function greatestProduct(array) {
    let greatestProductSoFar = array[0] * array[1];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] * array[j] > greatestProductSoFar) {
                greatestProductSoFar = array[i] * array[j];
            }
        }
    }

    return greatestProductSoFar;
}

console.log(greatestProduct([2, 4, 6, 8])); // output 48

function greatestNumber(array) {
    let greatestNumberSoFar = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > greatestNumberSoFar) {
            greatestNumberSoFar = array[i];
        }
    }

    return greatestNumberSoFar;
}

console.log(greatestNumber([2, 4, 9, 12])); //12
