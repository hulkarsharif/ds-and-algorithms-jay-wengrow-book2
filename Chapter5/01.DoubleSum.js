// Use Big O Notation to describe the time complexity of the following function, which returns the sum of all numbers of an array after the numbers have been doubled:

function doubleSum(array) {
    let doubledArray = [];
    array.forEach((number) => {
        doubledArray.push(number * 2);
    });

    let sum = 0;
    doubledArray.forEach((number) => {
        sum += number;
    });

    return sum;
}

console.log(doubleSum([1, 2, 3, 7])); // Output: 20
