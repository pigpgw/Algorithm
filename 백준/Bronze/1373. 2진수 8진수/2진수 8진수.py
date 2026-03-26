s = input()
#  2진수 -> 10진수
result = int(s,2)

#  10진수 -> 8진수
result = oct(result)
print(result[2:])