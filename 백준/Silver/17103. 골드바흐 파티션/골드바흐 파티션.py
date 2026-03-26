import math
T = int(input())

def isDecimal(n):
    if n < 2:
        return False
    for i in range(2,int(math.sqrt(n)) + 1):
        if (n % i == 0):
            return False
    return True

sieve = [True] * 1000001
sieve[0] = False
sieve[1] = False

for i in range(2, int(math.sqrt(1000000)) + 1):
    if sieve[i]:
        for j in range(i * i,1000001,i):
            sieve[j] = False

for i in range(T):
    count = 0
    N = int(input())
    for i in range(2,N // 2 + 1):
        if (sieve[i] and sieve[N - i]):
            count += 1
    print(count)