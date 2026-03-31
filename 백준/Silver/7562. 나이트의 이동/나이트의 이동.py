from collections import deque
T = int(input())


dx = [2, 2, -2, -2, 1, 1, -1, -1]
dy = [1, -1, 1, -1, 2, -2, 2, -2]

for i in range(T):
    I = int(input())
    start_y, start_x = map(int, input().split())
    target_y, target_x = map(int, input().split())
    visited = [[False] * I for _ in range(I)]
    visited[start_y][start_x] = True

    def bfs():
        queue = deque([((start_y, start_x, 0))])
        while queue:
            curr_y, curr_x, curr_count = queue.popleft()
            if curr_y == target_y and curr_x == target_x:
                print(curr_count)
                return
            for i in range(8):
                nx = curr_x + dx[i]
                ny = curr_y + dy[i]
                if nx < 0 or nx >= I or ny < 0 or ny >= I:
                    continue
                if visited[ny][nx]:
                    continue
                visited[ny][nx] = True
                queue.append((ny, nx, curr_count + 1))
    bfs()
