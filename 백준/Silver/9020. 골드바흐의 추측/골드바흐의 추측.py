import math

def isPrime(number):
    is_prmise = [True] * (number + 1)
    is_prmise[0] = is_prmise[1] = False
    for i in range(2, int(number ** 0.5) + 1):
        if is_prmise[i]:
            for j in range(i * i, number + 1, i):
                is_prmise[j] = False
    return is_prmise

T = int(input())

for _ in range(T):
    target_number = int(input())
    is_prmise = isPrime(target_number)
    result = []

    for i in range(2, target_number // 2 + 1):
        j = target_number - i
        if is_prmise[i] and is_prmise[j]:
            result.append((i, j))

    if not result:
        continue  # 아무 쌍도 없을 경우
    elif len(result) == 1:
        print(result[0][0], result[0][1])
    else:
        min_gap = math.inf
        index = -1
        for i in range(len(result)):
            gap = result[i][1] - result[i][0]
            if gap < min_gap:
                min_gap = gap
                index = i
        print(result[index][0], result[index][1])
