import sys
imput = sys.stdin.readline

n = int(input())
n_list = list( map(int,input().split()))
n_list.sort()

m = int(input())
m_list = list( map(int,input().split()))

def find_number(seq,n):
    left = 0
    right = len(seq) - 1
    while left <= right:
        mid = (left + right) // 2
        if seq[mid] == n:
            return 1
        elif seq[mid] < n:
            left = mid + 1
        else:
            right = mid - 1
    return 0

for i in m_list:
    print(find_number(n_list,i))