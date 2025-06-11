import copy

N, M = list(map(int, input().split()))

board = [list(map(int, input().split())) for _ in range(N)]

max_area = 0

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]


def bfs(board):
    global max_area
    copy_board = copy.deepcopy(board)
    queue = []
    for i in range(N):
        for j in range(M):
            if copy_board[i][j] == 2:
                queue.append((i, j))
    while queue:
        curr_y, curr_x = queue.pop(0)
        for i in range(4):
            x = curr_x + dx[i]
            y = curr_y + dy[i]
            if x >= 0 and x < M and y >= 0 and y < N:
                if copy_board[y][x] == 0:
                    copy_board[y][x] = 2
                    queue.append((y, x))
    safe_area = 0
    for i in range(N):
        for j in range(M):
            if copy_board[i][j] == 0:
                safe_area += 1
    max_area = max(safe_area, max_area)


for first_block_y in range(N):
    for first_block_x in range(M):
        for second_block_y in range(N):
            for second_block_x in range(M):
                for third_block_y in range(N):
                    for third_block_x in range(M):
                        if (
                            board[first_block_y][first_block_x] == 0
                            and board[second_block_y][second_block_x] == 0
                            and board[third_block_y][third_block_x] == 0
                        ):
                            wall_1 = (first_block_y, first_block_x)
                            wall_2 = (second_block_y, second_block_x)
                            wall_3 = (third_block_y, third_block_x)
                            if (
                                (wall_1 != wall_2)
                                and (wall_1 != wall_3)
                                and (wall_2 != wall_3)
                            ):
                                board[wall_1[0]][wall_1[1]] = 1
                                board[wall_2[0]][wall_2[1]] = 1
                                board[wall_3[0]][wall_3[1]] = 1
                                bfs(board)
                                board[wall_1[0]][wall_1[1]] = 0
                                board[wall_2[0]][wall_2[1]] = 0
                                board[wall_3[0]][wall_3[1]] = 0

print(max_area)
