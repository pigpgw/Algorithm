from collections import deque

N, M = list(map(int, input().split()))
board = []
for i in range(N):
    board.append(list(map(int, input())))

visited = [[False] * M for i in range(N)]

dx = [0, -1, 0, 1]
dy = [-1, 0, 1, 0]


def bfs(startY, startX):
    queue = deque()
    queue.append([startY, startX, 1])
    visited[startY][startX] = True
    while queue:
        currY, currX, currCount = queue.popleft()
        for i in range(4):
            nx = dx[i] + currX
            ny = dy[i] + currY
            if nx < 0 or nx >= M or ny < 0 or ny >= N:
                continue
            if visited[ny][nx]:
                continue
            if board[ny][nx] == 0:
                continue
            if ny == N - 1 and nx == M - 1:
                return currCount + 1
            visited[ny][nx] = True
            queue.append([ny, nx, currCount + 1])


print(bfs(0, 0))
