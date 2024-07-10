
import sys
input = sys.stdin.readline

M, N, L = list(map(int,input().split()))
# 사대 위치
M_list = list(map(int,input().split()))
M_list.sort()
#  동물 위치
animals = [list(map(int,input().split())) for _ in range(N)]



def count_animal(sadae_list,animal_list,gun_range):
    전체_죽은_고라니 = 0

    for 고라니 in animal_list:
        고라니_x,고라니_y = 고라니
        left = 0 
        right = len(sadae_list) - 1
        고라니죽었니 = False

        while left <= right:
            mid = (left + right) // 2
            사대 = sadae_list[mid]
            고라니_죽는_범위 = abs(사대 - 고라니_x) + 고라니_y

            if 고라니_죽는_범위 <= gun_range:
                고라니죽었니 = True
                break
            elif 사대 < 고라니_x:
                left = mid + 1
            else:
                right = mid - 1
        if 고라니죽었니:
            전체_죽은_고라니 += 1
    return 전체_죽은_고라니

print(count_animal(M_list,animals,L))