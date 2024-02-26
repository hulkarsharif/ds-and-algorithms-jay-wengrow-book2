const halve = function (n) {
    return n / 2;
};

let n = 5;
console.log(halve(50));
// → 50

function find_needle(needle, haystack) {
    let needle_index = 0;
    let haystack_index = 0;

    while (haystack_index < haystack.length) {
        if (needle[needle_index] == haystack[haystack_index]) {
            let found_needle = true;

            while (needle_index < needle.length) {
                if (
                    needle[needle_index] !=
                    haystack[haystack_index + needle_index]
                ) {
                    found_needle = false;
                    break;
                }
                needle_index++;
            }

            if (found_needle) {
                return true;
            }
            needle_index = 0;
        }
        haystack_index++;
    }

    return false;
}

console.log(find_needle([1, 2, 3], [4, 5, 1, 2, 3, 6, 7])); // Should print true

function largest_product(array) {
    let largest_product_so_far = array[0] * array[1] * array[2];
    let i = 0;

    while (i < array.length) {
        let j = i + 1;

        while (j < array.length) {
            let k = j + 1;

            while (k < array.length) {
                if (array[i] * array[j] * array[k] > largest_product_so_far) {
                    largest_product_so_far = array[i] * array[j] * array[k];
                }
                k++;
            }
            j++;
        }
        i++;
    }

    return largest_product_so_far;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
console.log(largest_product(array)); // Should print 60 (4 * 5 * 3)
