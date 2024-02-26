//an algorithm that accepts an array of numbers and returns the product of every combination of two numbers. For example, if we passed in the array, [1, 2, 3, 4, 5], the function returns: ​  [2, 3, 4, 5, 6, 8, 10, 12, 15, 20]

function twoNumProducts(array) {
    let products = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            products.push(array[i] * array[j]);
        }
    }
    return products;
}
console.log(twoNumProducts([1, 2, 3, 4, 5])); //output[2,  3,  4,  5,  6,8, 10, 12, 15, 20]
