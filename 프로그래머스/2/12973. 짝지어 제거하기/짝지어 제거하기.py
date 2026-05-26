def solution(s):
    stack = []
    i = 0
    for i in range(len(s)):
        if len(stack) == 0:
            stack.append(s[i])
            continue
        if len(stack) > 0 and s[i] == stack[-1]:
            stack.pop()
            i = 0
            continue
        stack.append(s[i])
    return 0 if len(stack) > 0 else 1