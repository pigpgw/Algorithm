from collections import deque

N, M = map(int, input().split())
board = []
for i in range(N):
    board.append(list(map(int, input())))

visited = [[False] * M for _ in range(N)]

directions = [(0, -1), (1, 0), (0, 1), (-1, 0)]


def bfs(startY, startX):
    queue = deque()
    queue.append((startY, startX, 1))
    visited[startY][startX] = True
    while queue:
        currY, currX, currCount = queue.popleft()
        if currY == N - 1 and currX == M - 1:
            return currCount
        for dy, dx in directions:
            nx = dx + currX
            ny = dy + currY
            if nx < 0 or nx >= M or ny < 0 or ny >= N:
                continue
            if visited[ny][nx]:
                continue
            if board[ny][nx] == 0:
                continue

            visited[ny][nx] = True
            queue.append((ny, nx, currCount + 1))


print(bfs(0, 0))
