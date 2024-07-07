n = int(input())

def isPrime(n):
    if (n == 1):
        return False
    count = 0
    for i in range(2,n):
        if (n % i == 0):
            return False
    return True


input_list = list(map(int,input().split()))

count = 0
for number in input_list:
    if (isPrime(number)):
        count += 1

print(count)


