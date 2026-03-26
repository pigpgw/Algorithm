N,B = list(map(int,input().split()))

result = []

while N > 0:
    result.append(N % B)
    N //= B

for item in result[::-1]:
    if item < 10:
        print(item,end="")
    else:
        print(chr(item - 10 + ord('A')),end="")