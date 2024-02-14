function sample(array) {
    var first = array[0];
    var middle = array[Math.floor(array.length / 2)];
    var last = array[array.length - 1];

    return [first, middle, last];
}

console.log(sample([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
