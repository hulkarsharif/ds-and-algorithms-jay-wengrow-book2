function printEveryOther(low, high) {
    if (low > high) {
        return;
    }

    console.log(low);
    printEveryOther(low + 2, high);
}

printEveryOther(0, 10);
