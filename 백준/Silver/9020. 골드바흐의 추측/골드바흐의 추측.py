import math

def isPrime(num):
    if num == 1:
        return
    for i in range(2,int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True                    

number = int(input())
for _ in range(number):
    input_num = int(input())
    min_prime = input_num // 2
    max_prime = input_num // 2  
    for i in range(input_num // 2):
        if isPrime(min_prime) and isPrime(max_prime):
            print(min_prime,max_prime)
            break
        else:
            min_prime -= 1
            max_prime += 1