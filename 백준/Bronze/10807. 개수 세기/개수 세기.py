N = int(input())
arr = list(map(int,input().split()))
v = int(input())

count = 0
for alpha in arr:
    if (v == alpha):
        count += 1 
print(count)