const averageEvenNum = (arr) => {
    let sum = 0;
    let countEvenNum = 0;

    arr.forEach((number) => {
        if (number % 2 === 0) {
            sum += number;
            countEvenNum++;
        }
    });

    // Check if there are even numbers in the array to avoid division by zero
    if (countEvenNum > 0) {
        // We return the mean average
        return sum / countEvenNum;
    } else {
        return 0; // If there are no even numbers, return 0 to avoid division by zero
    }
};

console.log(averageEvenNum([1, 2, 3, 4, 4])); // Output: 3.5
