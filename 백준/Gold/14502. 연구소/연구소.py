import copy

N, M = list(map(int, input().split()))

board = [list(map(int, input().split())) for _ in range(N)]
walls = set()

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

max_safe_area = 0

virus = []
for i in range(N):
    for j in range(M):
        if board[i][j] == 2:
            virus.append((i, j))


def bfs(board):
    global max_safe_area
    safe_area = 0
    copy_board = copy.deepcopy(board)
    queue = virus[:]
    while queue:
        curr_virus_y, curr_virus_x = queue.pop(0)
        for i in range(4):
            x = curr_virus_x + dx[i]
            y = curr_virus_y + dy[i]
            if x >= 0 and x < M and y >= 0 and y < N:
                if copy_board[y][x] == 0:
                    copy_board[y][x] = 2
                    queue.append((y, x))
    for i in range(N):
        for j in range(M):
            if copy_board[i][j] == 0:
                safe_area += 1
    max_safe_area = max(safe_area, max_safe_area)


# 모든 벽을 세우는 경우
for first_block_y in range(N):
    for first_block_x in range(M):
        for second_block_y in range(N):
            for second_block_x in range(M):
                for third_block_y in range(N):
                    for third_block_x in range(M):
                        first_block = (first_block_y, first_block_x)
                        second_block = (second_block_y, second_block_x)
                        third_block = (third_block_y, third_block_x)

                        if (
                            first_block != second_block
                            and second_block != third_block
                            and first_block != third_block
                        ):
                            if (
                                board[first_block_y][first_block_x] != 0
                                or board[second_block_y][second_block_x] != 0
                                or board[third_block_y][third_block_x] != 0
                            ):
                                continue
                            board[first_block_y][first_block_x] = 1
                            board[second_block_y][second_block_x] = 1
                            board[third_block_y][third_block_x] = 1
                            bfs(board)
                            board[first_block_y][first_block_x] = 0
                            board[second_block_y][second_block_x] = 0
                            board[third_block_y][third_block_x] = 0
print(max_safe_area)
