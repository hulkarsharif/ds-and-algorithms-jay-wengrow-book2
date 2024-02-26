var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

function isSubset(array1, array2) {
    let largerArray;
    let smallerArray;

    // Determine which array is smaller:
    if (array1.length > array2.length) {
        largerArray = array1;
        smallerArray = array2;
    } else {
        largerArray = array2;
        smallerArray = array1;
    }

    // Iterate through smaller array:
    for (let i = 0; i < smallerArray.length; i++) {
        let foundMatch = false;
        for (let j = 0; j < largerArray.length; j++) {
            if (smallerArray[i] === largerArray[j]) {
                foundMatch = true;
                break;
            }
        }
        // If an element in the smaller array is not found in the larger array, return false
        if (!foundMatch) {
            return false;
        }
    }
    // If all elements in the smaller array are found in the larger array, return true
    return true;
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [3, 4, 5, 1, 2];
console.log(isSubset(array1, array2)); // Output: true
