def solution(s):
    stack = [s[0]]
    for i in range(1,len(s)):
        if stack and stack[-1] == s[i]:
            stack.pop()
        else:
            stack.append(s[i])
    return 0 if len(stack) > 0 else 1