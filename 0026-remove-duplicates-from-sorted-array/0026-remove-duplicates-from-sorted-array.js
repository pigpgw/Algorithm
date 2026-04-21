/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let startP = 0
        
    let endP = 1
    while(endP < nums.length){
        if (nums[startP] === nums[endP]){
            endP += 1
        }else {
            startP += 1
            nums[startP] = nums[endP]
            endP += 1 
        }
    }

    return startP + 1
};