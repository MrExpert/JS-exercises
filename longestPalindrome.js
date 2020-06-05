/// 1-version
const longestPalindrome = s => {
    if (!s || s.length <= 1) {
        return s
    }
    let longest = s.substring(0, 1)
    for (let i = 0; i < s.length; i++) {
        let temp = expand(s, i, i)
        if (temp.length > longest.length) {
            longest = temp
        }
        temp = expand(s, i, i + 1)
        if (temp.length > longest.length) {
            longest = temp
        }
    }
    return longest
}

const expand = (s, begin, end) => {
    while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
        begin--
        end++
    }
    return s.substring(begin + 1, end)
}
let s = 'aab';
console.log(longestPalindrome(s));

/// genius level 100
// 2-version
var longestPalindrome = function (s) {
    if (!s) return 0;
    for (let c = s.length; c > 0; c--) {
        for (let i = 0; i <= s.length - c; i++) {
            var check = s.substr(i, c);
            if (check === check.split("").reverse().join("")) return c;
        }
    }
}

/// 3 -version

function longestPalindrome(s) {
    var longest = 0;
    var length = s.length;

    for (var i = 0; i < length; i++) {
        for (var j = i + 1; j <= length; j++) {
            var str = s.slice(i, j);
            var L = str.length
            if (isPalindrome(str) && longest < L) {
                longest = L;
            }
        }
    }
    return longest;
}

function isPalindrome(s) {
    var arr = s.split("");
    return s == arr.reverse().join("");
}