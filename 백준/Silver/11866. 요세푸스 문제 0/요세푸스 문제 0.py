import sys

input = sys.stdin.readline

n, m = list(map(int, input().strip().split()))

human_list = [i for i in range(1, n + 1)]
queue = []

while human_list:
    for i in range(m):
        human_list.append(human_list.pop(0))
    queue.append(human_list.pop())
print(f"<{', '.join(map(str, queue))}>")
