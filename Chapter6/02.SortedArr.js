// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to perform Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Function to perform Selection Sort
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

// Function to perform Insertion Sort
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

/* Given two sorted arrays of integers, combine the values into one sorted array?
Input: [1,3,5], [2,4,6,8,10]
Output: [1,2,3,4,5,6,8,10]
See if you can solve this in O(N+M) time and O(N+M) auxiliary space. */

const mergeTwoSortedArrays = (array1, array2) => {
    const mergedArrays = [];
    let i = 0;
    let j = 0;
    const totalElements = array1.length + array2.length;

    while (i + j < totalElements) {
        if (array1[i] > array2[j] || i >= array1.length) {
            mergedArrays.push(array2[j]);
            j++;
        } else {
            mergedArrays.push(array1[i]);
            i++;
        }
    }
    return mergedArrays;
};

console.log(mergeTwoSortedArrays([1, 10, 17, 19, 89], [3, 8, 8, 100, 101]));
console.log(mergeTwoSortedArrays([1, 10, 14, 19], [1, 7, 8, 18]));

/* Solution Explanation */

/* We create two pointers, i and j. i for array1, j for array2.
We need to iterate all the way down to array1 and array2 last elements.
So it is gonna be sum of their length.
We compare and push the less one to the result array.
*/
