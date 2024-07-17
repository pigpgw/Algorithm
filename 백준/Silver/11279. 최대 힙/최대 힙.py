import sys
from collections import deque
import heapq

# sys.stdin.readline() 사용 예제에서 불필요하므로 input()으로 대체
input = sys.stdin.readline

n = int(input().strip())

heap = []

for i in range(n):
    number = int(input().strip())
    if number != 0:
        # print('heap에 넣은거',number)
        # print(number)
        heapq.heappush(heap,-number)
    elif number == 0 and len(heap) > 0:
        # print('heap',heap)
        trash = -heapq.heappop(heap)
        # print('heap에서 뺀거',trash)
        print(trash)
    else:
        print(0)