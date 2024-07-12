import sys

input = sys.stdin.readline

n,m = list(map(int,input().split()))
# print(n,m)
score_list =list(map(int, input().split()))
score_list.sort()
# print(score_list)
print(score_list[n - m])
