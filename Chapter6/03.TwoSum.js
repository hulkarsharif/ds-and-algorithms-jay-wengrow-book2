function twoSum(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i != j && array[i] + array[j] === 10) {
                return true;
            }
        }
    }
    return false;
}

console.log(twoSum([1, 2, 4, 15])); //false
console.log(twoSum([1, 2, 4, 8])); //true
