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
