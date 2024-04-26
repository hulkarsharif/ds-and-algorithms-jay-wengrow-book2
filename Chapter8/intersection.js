function twoArr(arr1, arr2) {
    let intersection = [];
    let hashtag = {};
    for (let i = 0; i < arr1.length; i++) {
        hashtag[arr1[i]] = true;
    }
    for (let j = 0; j < arr2.length; j++) {
        if (hashtag[arr2[j]]) {
            intersection.push(arr2[j]);
        }
    }
    return intersection;
}
console.log(twoArr([1, 2, 3, 4, 5], [0, 2, 4, 6, 8])); //[2,4]
