function isDuplicate(arr) {
    let toFind = [];
    for (let i = 0; i < arr.length; i++) {
        if (toFind[arr[i]]) {
            return arr[i];
        } else {
            toFind[arr[i]] = true;
        }
    }
}
console.log(isDuplicate(["a", "b", "c", "d", "C", "e", "f"])); //c

//Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter. For example, the string, "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet except the letter, "f". The function should have a time complexity of O(N).

function isAlpha(str) {
    let hashTable = {};
    for (let i = 0; i < str.length; i++) {
        hashTable[str[i]] = true;
    }
    let words = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < words.length; i++) {
        if (!hashTable[words[i]]) {
            return words[i];
        }
    }
}
console.log(isAlpha("the quick brown box jumps over a lazy dog")); //f

//Write a function that returns the first non-duplicated character in a string. For example, the string, "minimum" has two characters that only exist once—the "n" and the "u", so your function should return the "n", since it occurs first. The

function isDuplicate(str) {
    let hashTable = {};
    for (let i = 0; i < str.length; i++) {
        if (hashTable[str[i]]) {
            hashTable[str[i]]++;
        } else {
            hashTable[str[i]] = 1;
        }
    }
    for (let j = 0; j < str.length; j++) {
        if (hashTable[str[j]] == 1) {
            return str[j];
        }
    }
}
console.log(isDuplicate("minimum")); //n
