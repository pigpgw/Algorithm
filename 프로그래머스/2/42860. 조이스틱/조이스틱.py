def solution(name):
    answer = 0 
    # 각자리에 필요한 커서 변경 횟수
    for i in range(len(name)):
        if name[i] != "A":
            diff = ord(name[i]) - ord("A")
            answer += min(diff, 26 - diff)
    # 커서 이동 필요 횟수
    move = len(name) - 1
    for i in range(len(name)):
        nextIdx = i + 1
        while nextIdx < len(name) and name[nextIdx] == 'A':
            nextIdx += 1
        move = min(move,i * 2 + len(name) - nextIdx, i + (2 * (len(name) - nextIdx)))
    return answer + move
        