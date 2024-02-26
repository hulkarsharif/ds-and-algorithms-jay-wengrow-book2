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
