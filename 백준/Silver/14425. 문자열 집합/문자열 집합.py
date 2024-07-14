import sys

input = sys.stdin.readline

n, m = list(map(int, input().split()))

check_list = []
dict = set()

count = 0

for i in range(n):
    word = input().strip()
    dict.add(word)

for j in range(m):
    word = input().strip()
    if word in dict:
        count += 1


print(count)
