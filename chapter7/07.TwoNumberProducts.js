//Our next example is an algorithm that accepts an array of numbers and returns the product of every combination of two numbers. For example, if we passed in the array, [1, 2, 3, 4, 5], the function returns:

function twoNumberProducts(array) {
    let products = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            products.push(array[i] * array[j]);
        }
    }
    return products;
}
console.log(twoNumberProducts([1, 2, 3, 4, 5]));
