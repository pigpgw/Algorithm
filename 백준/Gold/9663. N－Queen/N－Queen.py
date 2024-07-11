import sys

# Read the number of queens from the input
input = sys.stdin.readline
queen_count = int(input())

queen_pos = [0] * queen_count
chess_y = [False] * queen_count
chess_diagonal_plus = [False] * (queen_count * 2)
chess_diagonal_minus = [False] * (queen_count * 2)
count = 0

def check_queen_safe_zone(i, queen_number):
    global count
    if i == queen_number:
        count += 1
        return
    
    for j in range(queen_number):
        if (not chess_y[j] and not chess_diagonal_minus[i + j] and not chess_diagonal_plus[i - j + queen_number]):
            queen_pos[i] = j
            chess_y[j] = chess_diagonal_minus[i + j] = chess_diagonal_plus[i - j + queen_number] = True
            check_queen_safe_zone(i + 1, queen_count)
            chess_y[j] = chess_diagonal_minus[i + j] = chess_diagonal_plus[i - j + queen_number] = False
    return count

# Start the recursion from the first row
print(check_queen_safe_zone(0, queen_count))