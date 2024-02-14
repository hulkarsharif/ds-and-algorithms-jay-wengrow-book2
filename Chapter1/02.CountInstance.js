/*Insertion at the beginning of the array*/

function insertAtBeginning(arr, element) {
    arr.unshift(element);
    return arr;
}

console.log(insertAtBeginning([2, 3, 4, 5], 1));

/*count how many times the value “apple” is found inside an array. How many steps would it take to find all the “apples”?*/

const countInstance = (arr, value) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count; // Move this line outside of the loop
};

console.log(
    countInstance(
        ["apple", "banana", "apple", "orange", "apple", "pear"],
        "apple"
    )
);
