function oneHundredSum(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex < Math.floor(array.length / 2)) {
        if (array[leftIndex] + array[rightIndex] !== 100) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }

    return true;
}
console.log(oneHundredSum([10, 20, 30, 40, 50, 60, 70, 80, 90])); // Output will be true
