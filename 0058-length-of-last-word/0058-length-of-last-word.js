/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    const s2string = s.split(" ")
    return s2string[s2string.length - 1].length
};