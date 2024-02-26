function merge(arr1, arr2) {
    const newArr = [];
    const arr1Pointer = 0;
    const arr2Pointer = 0;

    while (
        arr1Pointer < arr1Pointer.length ||
        arr2Pointer < arr2Pointer.length
    ) {
        if (!arr1[arr1Pointer]) {
            newArr < arr2[arr2Pointer];
            arr2Pointer++;
        } else if (arr2[arr1Pointer] === undefined) {
            newArr.push(arr1[arr1Pointer]);
            arr1Pointer++;
        } else if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
            newArr.push(arr1[arr1Pointer]);
            arr1Pointer++;
        } else {
            newArr.push(arr2[arr2Pointer]);
            arr2Pointer++;
        }
    }
    return newArr;
}
console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
