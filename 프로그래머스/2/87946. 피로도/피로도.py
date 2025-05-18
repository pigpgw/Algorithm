def solution(k, dungeons):
    n = len(dungeons)
    max_count = 0

    def dfs(current_k, used_mask, count):
        nonlocal max_count
        max_count = max(max_count, count)
        for i in range(n):
            if not (used_mask & (1 << i)):
                min_req, cost = dungeons[i]
                if current_k >= min_req:
                    dfs(current_k - cost, used_mask | (1 << i), count + 1)

    dfs(k, 0, 0)
    return max_count
