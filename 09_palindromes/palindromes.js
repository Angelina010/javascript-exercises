const palindromes = function (string) {
    s = string.toLowerCase()
    let left = 0
    let right = s.length - 1
    while (left < right){
        while (left < right && !isAlphaNumeric(s[left])){
            left ++;
        }

        while (left < right && !isAlphaNumeric(s[right])){
            right --;
        }

        if (s[left] != s[right]){
            return false
        }
        left += 1
        right -= 1
    }
    return true
};

function isAlphaNumeric (s){
    let code = s.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
}


// Do not edit below this line
module.exports = palindromes;
