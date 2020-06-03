function incrementer(nums) {
    // code goes here
    return nums.map((num, index) => {
        if (num + (index + 1) > 10) {
            +(num + (index + 1)).toString().split('').splice(-1);
            //   
        } else { return num + (index + 1) }
        //    
    })

}

// 

function incrementer(nums) {
    // code goes here
    return nums.map((num, index) => {
        if ((+num + index + 1) > 9) {
            console.log('this : ', (+num + index + 1));
            return +(+num + index + 1).toString().split('').splice(-1);
        }
        else {
            return +num + (index + 1)
        }
        //    
    })

}