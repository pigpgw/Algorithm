/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++){
        // 연속으로 같은칸 개수를 구한다 그만큼 당긴다.
        let sameNumCount = 0
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] === nums[j]){
                sameNumCount += 1
            } else {
                break
            }
        }
        nums.splice(i + 1, sameNumCount)
    }
    return nums.length
};