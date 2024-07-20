import sys
from collections import deque

input = sys.stdin.readline
n = int(input())
graph = [list(map(int, input().strip())) for i in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y):
    stack = [(x, y)]
    graph[x][y] = 0
    cnt = 1

    while stack:
        x, y = stack.pop()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or nx >= n or ny < 0 or ny >= n:
                continue

            if graph[nx][ny] == 1:
                stack.append((nx, ny))
                graph[nx][ny] = 0
                cnt += 1

    return cnt

result_list = []

for i in range(n):
    for j in range(n):
        if graph[i][j] == 1:
            result_list.append(dfs(i, j))

result_list.sort()
print(len(result_list))

for result in result_list:
    print(result)
