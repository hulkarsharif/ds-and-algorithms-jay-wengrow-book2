class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseString(str) {
    const stack = new Stack();
    let reversedStr = "";

    // Push each character of the string onto the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    // Pop each character from the stack to construct the reversed string
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example usage:
const originalStr = "abcde";
const reversedStr = reverseString(originalStr);
console.log(`Original string: ${originalStr}`);
console.log(`Reversed string: ${reversedStr}`);
