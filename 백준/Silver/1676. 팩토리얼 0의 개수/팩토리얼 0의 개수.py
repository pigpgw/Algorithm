s = int(input())

def facto(num):
    if num < 2: return 1
    return num * facto(num - 1)
value = list(str(facto(s)))[::-1]
result = 0
for item in value:
    if item == "0":
        result +=1
    else:
        break
print(result)