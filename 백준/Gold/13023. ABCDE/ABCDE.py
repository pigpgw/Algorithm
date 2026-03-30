N, M = list(map(int, input().split()))

graph = {}
for i in range(M):
    a, b = map(int, input().split())
    if a not in graph:
        graph[a] = []
    if b not in graph:
        graph[b] = []
    graph[a].append(b)
    graph[b].append(a)

result = 0


def dfs(start, depth):
    global result
    if depth == 5:
        result = 1
        return
    if result == 1:
        return
    for next in graph[start]:
        if visited[next]:
            continue
        visited[next] = True
        dfs(next, depth + 1)
        visited[next] = False


keys = list(graph.keys())
visited = [False] * N
for key in keys:
    visited[key] = True
    dfs(key, 1)
    visited[key] = False

print(result)
