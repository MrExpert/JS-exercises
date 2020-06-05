let arr = [9, 3, 9, 3, 9, 7, 9];

function oddTimes(arr) {
    let oddNum = 0;
    let obj = {};
    counter = 0;
    for (let num of arr) {

        if (num in obj) counter++; obj[num] = counter; counter = 0;
        if ()

            if (!obj[num]) counter = 1; obj[num] = counter;

    }
    console.log(obj);
    console.log(counter);
}

console.log(oddTimes(arr));