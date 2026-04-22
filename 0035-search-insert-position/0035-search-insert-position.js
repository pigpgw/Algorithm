/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let targetIdx = nums.indexOf(target)
    if (targetIdx === -1){
        nums.push(target)
        nums.sort((a,b) => a - b)    
        targetIdx = nums.indexOf(target)
    }
    return targetIdx
};