let arr = [2, 1, 3, 5, 3, 2]
const dublicate = (arr) => {
    let obj = {};
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (!obj[i]) obj[i] = 0;
        console.log(obj)
        if (obj[i]) return arr[i]
    }
}

console.log(dublicate(arr));