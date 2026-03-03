function solution(nums) {
    const store = {}
    const N = nums.length / 2
    for (const num of nums){
        store[num] += (store[num] ?? 0) + 1
    }
    const keys = Object.keys(store)
    return N < keys.length ? N : keys.length
}