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
