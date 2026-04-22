/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let start = 0
    let end = 0
    while (end < nums.length){
        if (nums[end] !== val){
            nums[start] = nums[end]
            start++
            end++
        } else {
            end++
        }
    }
    return start
};