def solution(diffs, times, limit):
    # 이분탐색
    left = 1
    right = max(diffs)
    result = max(diffs)
    while left <= right:
        mid = (left + right) // 2
        time = 0

        for i in range(0,len(diffs)):
            # 레벨별 문제를 풀어야한다 못풀면 시간 늘려야함
            diff = diffs[i]
            isOver = diff - mid
            if mid - diff >= 0:
                time += times[i]
            else:
                time +=  (diff - mid) * (times[i] + times[i - 1]) + times[i]
        if time > limit:
            left = mid + 1
        else:
            right = mid - 1
            result = mid
            
    return result