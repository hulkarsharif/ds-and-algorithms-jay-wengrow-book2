function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 2);
}

// Example usage:
console.log(factorial(10));
