import sys

input = sys.stdin.readline

n = input()
num_list = []
for i in n:
    num_list.append(i)
num_list.sort(reverse=True)
print(''.join(num_list))

