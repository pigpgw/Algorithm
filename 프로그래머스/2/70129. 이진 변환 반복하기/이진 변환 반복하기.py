def hasZero(n):
    return n == "1"

def solution(s):
    # s는 1이 될때까지 2진 변환을하고 변환횟수, 제거한 0의 개수
    curr_str = s
    remove_zero_count = 0
    try_count = 0
    while curr_str != "1":
        arr = list(curr_str)
        filtered_arr = list(filter(hasZero,arr))
        try_count +=1
        remove_zero_count += (len(arr) - len(filtered_arr))
        curr_str = bin(len(filtered_arr))[2:]
    return [try_count,remove_zero_count]