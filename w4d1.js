const str1 = '';
const expected1 = false;

const str2 = 'a';
const expected2 = true;

const str3 = 'ddaa';
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = 'dda';
const expected4 = true;
// Explanation: "dad"

const str5 = 'aaadd';
const expected5 = true;
// Explanation: "daaad"

const str6 = 'abc';
const expected6 = false;

/* 
What is it about a string that makes it POSSIBLE for it to become a palindrome if the characters were rearranged.
*/

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
    const letterCounter = {}
    let oddCounter = 0
    if (str.length < 1){
        return false
    }
    for ( let i=0;i<str.length;i++ ){
        if (letterCounter.hasOwnProperty(str[i])) {
            letterCounter[str[i]]++
        }
        else{
            letterCounter[str[i]] = 1
        }
    } //console.log(letterCounter);
    for (key in letterCounter){
        if (letterCounter[key]%2 != 0){
            oddCounter++
            if(oddCounter > 1) {
                return false
            }
        }
    }
    return true
}


// function canStringBecomePalindrome(str) {
//     const letterCounter = {}
//     let oddCounter = 0
//     if (str.length < 1) {
//         return false
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (letterCounter.hasOwnProperty(str[i])) {
//             letterCounter[str[i]]++
//             letterCounter[str[i]] % 2 != 0 ? oddCounter++ : oddCounter--
//         }
//         else {
//             letterCounter[str[i]] = 1
//             oddCounter++
//         }
//     }
//     return (oddCounter > 1 ? false : true)
// }

console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))
