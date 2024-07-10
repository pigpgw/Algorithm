import sys
input = sys.stdin.readline

have, total_need = list(map(int,input().split()))
total_cable = [] 
for i in range(have):
    total_cable.append(int(input()))
total_cable.sort()

def carculate_need_cable_count(len_list,len_needed):
    left = 1
    right = max(len_list)
    while left <= right:
        mid = (left + right) // 2
        possible_len = sum([int((cable // mid)) for cable in len_list])
        # print('possible_len_list',[int((cable // mid)) for cable in len_list])
        if possible_len >= len_needed:
            # print('left 조율',left,'mid',mid,'right',right,'possible_len',possible_len) 
            left = mid + 1
        elif possible_len:
            # print('right 조율',left,'mid',mid,'right',right,'possible_len',possible_len)
            right = mid - 1
    # print(possible_len)
    return right

print(carculate_need_cable_count(total_cable,total_need))