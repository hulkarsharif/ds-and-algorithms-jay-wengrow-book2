function computeProducts(arr1, arr2) {
    const products = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            products.push(arr1[i] * arr2[j]);
        }
    }
    return products;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [10, 100, 1000];

console.log(computeProducts(arr1, arr2));
