from collections import deque
M, N = map(int, input().split())

board = []
for i in range(N):
    board.append(list(map(int, input().split())))

directions = [(0, 1), (-1, 0), (0, -1), (1, 0)]


def bfs():
    queue = deque()
    tomato_arr = []
    for i in range(N):
        for j in range(M):
            if board[i][j] == 1:
                queue.append((i, j))
    while queue:
        currY, currX = queue.popleft()
        for dy, dx in directions:
            ny = currY + dy
            nx = currX + dx
            if ny < 0 or ny >= N or nx < 0 or nx >= M:
                continue
            if board[ny][nx] == 0:
                board[ny][nx] = board[currY][currX] + 1
                queue.append((ny, nx))


bfs()

for i in range(N):
    for j in range(M):
        if board[i][j] == 0:
            print(-1)
            exit()

result = 0
for i in range(N):
    for j in range(M):
        result = max(result, board[i][j])
print(result - 1)
