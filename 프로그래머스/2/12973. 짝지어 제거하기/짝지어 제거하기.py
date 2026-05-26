def solution(s):
    stack = []
    for alpha in s:
        if len(stack) == 0:
            stack.append(alpha)
            continue
        if stack and alpha == stack[-1]:
            stack.pop()
            i = 0
            continue
        stack.append(alpha)
    return 0 if len(stack) > 0 else 1