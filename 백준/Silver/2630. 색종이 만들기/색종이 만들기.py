N = int(input())
board = list(list(map(int, input().split())) for _ in range(N))

total_blue_area = 0
total_white_area = 0


def recursion(currY, currX, N):
    global total_blue_area, total_white_area
    if N == 1:
        if board[currY][currX] == 1:
            total_blue_area += 1
        else:
            total_white_area += 1
        return
    blue_area = 0
    white_area = 0
    for i in range(N):
        for j in range(N):
            if board[currY + i][currX + j] == 1:
                blue_area += 1
            else:
                white_area += 1
    if blue_area != 0 and white_area != 0:
        divide_area = N // 2
        recursion(currY, currX, divide_area)
        recursion(currY + divide_area, currX, divide_area)
        recursion(currY, currX + divide_area, divide_area)
        recursion(currY + divide_area, currX + divide_area, divide_area)
        return
    else:
        if blue_area == 0:
            total_white_area += 1
        else:
            total_blue_area += 1


recursion(0, 0, N)
print(total_white_area)
print(total_blue_area)
