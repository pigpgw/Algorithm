from  itertools import permutations
def solution(k, dungeons):
    n = len(dungeons)
    max_valid_advanture = 0
    def backtrack(fatigue,path):
        nonlocal max_valid_advanture
        max_valid_advanture = max(max_valid_advanture,len(path))
        
        for i in range(n):
            dungeons_need_fatigue,after_dungeons_fatigue = dungeons[i]
            if i not in path and fatigue >= dungeons_need_fatigue:
                path.append(i)
                backtrack(fatigue - after_dungeons_fatigue,path)
                path.pop()
    backtrack(k,[])
    return max_valid_advanture