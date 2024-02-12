// Use Big O Notation to describe the time complexity of the following function, which returns the sum of all numbers of an array after the numbers have been doubled:

function double_then_sum(array) {
    let doubled_array = [];
    array.forEach((number) => {
        doubled_array.push(number * 2);
    });

    let sum = 0;
    doubled_array.forEach((number) => {
        sum += number;
    });

    return sum;
}

// Example usage
let my_array = [1, 2, 3, 7];
let result = double_then_sum(my_array);
console.log(result); // Output: 20
