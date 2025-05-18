from  itertools import permutations
def solution(k, dungeons):
    answer = -1
    n = len(dungeons)
    for order in permutations(range(n)):
        cur = k
        local_ans = 0
        for t in order:
            require,consume = dungeons[t]
            if cur >= require:
                cur -= consume
                local_ans += 1
        answer = max(answer,local_ans)
    return answer