from collections import deque
import sys

input = sys.stdin.readline

n,m = map(int,input().split())
graph = [list(map(int,input().strip())) for _ in range(n)]
costs = [[0] * m] * n

def bfs(v):
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]

    queue = deque()
    queue.append(v)

    while queue:
        x,y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
                
            if graph[nx][ny] == 0:
                continue

            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx,ny))
            
    return graph[n-1][m-1]

print(bfs((0,0)))