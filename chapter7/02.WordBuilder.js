function wordBuilder(arr) {
    let collection = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                collection.push(arr[i] + arr[j]);
            }
        }
    }
    return collection;
}
console.log(wordBuilder(["a", "b", "c"])); //[ 'ab', 'ac', 'ba', 'bc', 'ca', 'cb' ]
