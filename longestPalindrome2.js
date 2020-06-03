function longestPalindrome(s) {

    if (!s || s.length <= 1) return s;

    let longestPal = s.substring(0, 1);

    for (let i = 0; i < s.length; i++) {
        let temp = expand(s, i, i);
        if (temp.length > longestPal.length) longestPal = temp;
        temp = expand(s, i, i + 1);
        if (temp.length > longestPal) longestPal = temp;
    }

    function expand(s, L, R) {
        while (L >= 0 && R <= s.length - 1 && s[L] === s[R]) {
            L--;
            R++;
        }
        return s.substring(L + 1, R);
    }
    return longestPal;

}
let s = 'aab'
console.log(longestPalindrome(s));