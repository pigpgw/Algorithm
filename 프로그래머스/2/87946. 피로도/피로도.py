def solution(k, dungeons):
    n = len(dungeons)
    max_count = 0
    def backtrack(fatigue,curr,depth):
        nonlocal max_count
        # 모든경우를 탐색하며 각 경우별 가능한 일일 최대 던전 탐험 개수를 갱신한다.
        # 기저 조건 던전을 다 돌았을 경우
        # 최소 필요 피로도
        # 백트랙으로 한다
        if depth > max_count:
            max_count = depth
        
        for dungeon_info in dungeons:
            if dungeon_info in curr:
                continue
            min_needs_fatigue,consume_fatigue = dungeon_info
            if fatigue >= min_needs_fatigue:
                curr.append(dungeon_info)
                backtrack(fatigue - consume_fatigue,curr,depth + 1)
                curr.pop()
            else:
                continue
    backtrack(k,[],0)
    return max_count
