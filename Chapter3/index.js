/*binary search*/
const binarySearch = (arr, searchValue) => {
    let lowerBound = 0;
    let upperBound = arr.length - 1;

    while (lowerBound <= upperBound) {
        let midPoint = Math.floor((upperBound + lowerBound) / 2); // Corrected midpoint calculation
        let valueAtMidpoint = arr[midPoint];
        if (searchValue === valueAtMidpoint) {
            return midPoint;
        } else if (searchValue < valueAtMidpoint) {
            upperBound = midPoint - 1;
        } else if (searchValue > valueAtMidpoint) {
            lowerBound = midPoint + 1;
        }
    }
    return -1;
};

console.log(binarySearch([3, 17, 75, 80, 202], 22));

/*User
Imagine you have a chessboard and put a single grain of rice on one square. On the second square, you put 2 grains of rice, since that is double the amount of rice on the previous square. On the third square, you put 4 grains.

On the fourth square, you put 8 grains, and on the fifth square, you put 16 grains, and so on. The following function calculates which square you’ll need to place a certain number of rice grains. For example, for 16 grains, the function will return 5.*/

function chessboardSpace(numberOfGrains) {
    let chessboardSpaces = 1;
    let placedGrains = 1;

    while (placedGrains < numberOfGrains) {
        placedGrains *= 2;
        chessboardSpaces += 1;
    }

    return chessboardSpaces;
}

// Example usage:
const numberOfGrains = 16;
const spacesNeeded = chessboardSpace(numberOfGrains);
console.log(
    `To have ${numberOfGrains} grains of rice, you'll need to place them on ${spacesNeeded} squares of the chessboard.`
);

/*The following function accepts an array of strings and returns a new array that only contains the strings that start with the character "a". Use Big O Notation to describe the time complexity of the function: */

function selectAStrings(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("a")) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(selectAStrings(["apple", "kiwi", "banana", "apricot", "ananas"])); // output [ 'apple', 'apricot', 'ananas' ]
