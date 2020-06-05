function longestPalindrome(s) {
    let longest = 0;
    let drome = '';
    let length = s.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            let str = s.slice(i, j);
            let L = str.length;
            if (isPalindrome(str) && longest < L)
                longest = L;
            console.log(str);
        }
    }
    return longest
}


function isPalindrome(s) {
    let pal = s.split('').reverse().join('');
    return s == pal
}

s = 'bobbly';
console.log(longestPalindrome(s));
