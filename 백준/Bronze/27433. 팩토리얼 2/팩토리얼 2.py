import sys

input = sys.stdin.readline
n = int(input())
def facto(number):
    if number == 0 or number == 1:
        return 1
    else:
        return number * facto(number - 1)

print(facto(n))
