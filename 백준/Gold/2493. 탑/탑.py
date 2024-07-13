import sys
input = sys.stdin.readline

n = int(input())
ans = [0] * n
stack = []
tower_list = list(map(int,input().split()))
for i in range(n):
    while stack:
        if stack[-1][1] > tower_list[i]:
            ans[i] = stack[-1][0] + 1
            break
        else:
            stack.pop()
    stack.append((i,tower_list[i]))
print(*ans)