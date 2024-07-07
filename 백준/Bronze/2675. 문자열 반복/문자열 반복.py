n = int(input())
input_list = [list(input().split()) for _ in range(n)]

for line in input_list:
    a,b = line
    for i in range(len(b)):
        print(b[i] * int(a)  ,end='')
    print('')