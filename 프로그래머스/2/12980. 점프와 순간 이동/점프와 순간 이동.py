

def solution(n):
    bat = 0
    while n > 0:
        if n % 2 == 0:
            n /= 2
        else:
            n -= 1
            bat += 1
    return bat
            