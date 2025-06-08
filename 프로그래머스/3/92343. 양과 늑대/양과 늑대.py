def solution(info, edges):
    answer = 0
    graph = {}
    for p_node, c_node in edges:
        if p_node not in graph:
            graph[p_node] = []
        graph[p_node].append(c_node)

    def backtrack(curr, visited, sheep, wolf, candidates):
        nonlocal answer

        if info[curr] == 0:
            sheep += 1
        else:
            wolf += 1

        if sheep <= wolf:
            return

        answer = max(answer, sheep)

        visited[curr] = True
        candidates += graph.get(curr, [])

        for i, node in enumerate(candidates):
            if not visited[node]:
                backtrack(node, visited[:], sheep, wolf, candidates[:i] + candidates[i+1:])

    visited = [False] * len(info)
    backtrack(0, visited, 0, 0, [])

    return answer
