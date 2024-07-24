n, k = list(map(int,input().split()))
total_money = k

coin_list = [ int(input()) for i in range(n)]
coin_list.reverse()

count = 0

for coin in coin_list:
    count += total_money // coin
    total_money = total_money % coin

print(count)