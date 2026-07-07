def solution(number, k):
    cnt = 0
    idx = 1
    arr = list(map(int,number))
    stack = [arr[0]]
    for i in range(1,len(arr)):
        while stack and stack[-1] < arr[idx] and cnt < k:
            stack.pop()
            cnt += 1
        stack.append(arr[idx])
        idx += 1
    if cnt < k:
        for i in range(cnt, k):
            stack.pop()
    return "".join(map(str,stack))