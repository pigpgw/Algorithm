import sys

input = sys.stdin.readline

user_card_number = int(sys.stdin.readline().strip())
user_card_number_list = list(map(int,input().split()))
M = int(input())
M_list = list(map(int,input().split()))


_dict = {}
for i in range(len(user_card_number_list)):
    _dict[user_card_number_list[i]] = 0

for j in range(M):
    if M_list[j] not in _dict:
        print(0, end=' ')
    else:
        print(1, end=' ')