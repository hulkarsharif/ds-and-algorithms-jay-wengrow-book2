function lowHigh(low, high) {
    if (low > high) {
        return 0;
    }
    return low + lowHigh(low + 1, high);
}
console.log(lowHigh(1, 10));
