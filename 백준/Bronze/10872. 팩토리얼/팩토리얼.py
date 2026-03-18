s = int(input())

def facto(num):
    if num < 2: return 1
    return num * facto(num - 1)
print(facto(s))