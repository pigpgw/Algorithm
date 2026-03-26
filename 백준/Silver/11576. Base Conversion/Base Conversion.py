A,B = list(map(int,input().split()))
#  정이가 B 진법 사용 A가 해당 공간에서 쓰는거
m = int(input())
arr = list(map(int,input().split()))
arr.reverse()

store = 0
#   A짅법 -> 10진법
for i in range(0,m):
    store += arr[i] * (A ** i)

result = []
while store > 0:
    result.append(str(store % B))
    store //= B

result.reverse()
for item in result:
    print(item,end=" ")