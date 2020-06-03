function findArrayQuadruplet(arr, s) {

    n = arr.length;

    if (n < 4) return [];
    if (arr[0] + arr[1] + arr[2] + arr[3] === s) return arr;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 4; i++) {
        for (let j = i + 1; j < n - 3; j++) {
            let difference = s - (arr[i] + arr[j]);
            let low = j + 1;
            let high = n - 1;

            while (low < high) {
                if (arr[low] + arr[high] < difference) { low++; }
                else if (arr[low] + arr[high] > difference) { high--; }
                else {
                    return [arr[i], arr[j], arr[low], arr[high]]
                }
            }
        }
    }
    return []
}
const arr = [2, 7, 4, 0, 9, 5, 1, 3];
const s = 20;

console.log(findArrayQuadruplet(arr, s));
