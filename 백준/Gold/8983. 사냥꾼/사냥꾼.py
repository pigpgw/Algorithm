import sys
input = sys.stdin.readline

M, N, L = list(map(int,input().split()))
# 사대 위치
M_list = list(map(int,input().split()))
M_list.sort()
#  동물 위치
animals = [list(map(int,input().split())) for _ in range(N)]


# print('M',M,'N',N)
# print('',L,)
# print('M_list\n',M_list)
# print('animals',animals)

def count_animal(sadae_list,animal_list,gun_range):
    left = 1
    right = len(sadae_list) - 1
    전체_죽은_고라니 = 0

    for 고라니 in animal_list:
        mid = (left + right) // 2
        고라니죽었니=False
        for 사대 in sadae_list:
            고라니가_죽을수_있는_범위 = abs(사대 - 고라니[0]) + 고라니[1]
            if 고라니가_죽을수_있는_범위 <= gun_range:
                고라니죽었니 = True
                break

        if 고라니죽었니:
            전체_죽은_고라니 += 1
    return 전체_죽은_고라니
    
    # 고라니를 기준으로 사로를 다 체크해 업데이트 근데 이진탐색?
                

print(count_animal(M_list,animals,L))