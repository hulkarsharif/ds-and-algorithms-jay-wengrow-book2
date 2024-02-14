function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let tempValue = array[i];
        let position = i - 1;

        while (position >= 0 && array[position] > tempValue) {
            array[position + 1] = array[position];
            position = position - 1;
        }
        array[position + 1] = tempValue;
    }
    return array;
}

console.log(insertionSort([3, 1, 4, 1, 5, 9, 2, 6])); //[ 1, 1, 2, 3, 4, 5, 6, 9 ]
