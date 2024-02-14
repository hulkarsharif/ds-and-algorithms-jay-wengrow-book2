//Here’s another algorithm where the Big O is different from what it seems at first glance. This function accepts an array of arrays, where the inner arrays contain 1’s and 0’s. The function then returns how many 1’s there are.

const countOne = (arrOut) => {
    let count = 0;
    for (const arrInn of arrOut) {
        for (const number of arrInn) {
            if (number === 1) {
                count++;
            }
        }
    }
    return count;
};

console.log(
    countOne([
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0]
    ])
); // Output will be 7
