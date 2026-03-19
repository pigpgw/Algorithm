s = input()

def gcd(a,b):
    if b == 0: return a
    return gcd(b,a%b)

for  i in range(int(s)):
    arr = list(map(int,input().split()))
    n = arr[0]
    n_listr = arr[1:]
    result = 0
    for j in range(n):
        a = n_listr[j]
        for k in range(j + 1,n):
            b = n_listr[k]
            result += gcd(a,b)
    print(result)