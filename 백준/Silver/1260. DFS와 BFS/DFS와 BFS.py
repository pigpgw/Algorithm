from collections import deque

n,m,v = map(int,input().split())
# print(n,m,v)

# 정점의 개수 N
# 간선의 개수 M
# 탐색을 시작할 정점의 번호 V

graph = [[False] * (n + 1) for _ in range (n + 1)]
for i in range(m):
    a,b = map(int,input().split())
    graph[a][b] = graph[b][a] = 1

visited1 = [False] * (n + 1)
visited2 = [False] * (n + 1)

def dfs(v):
    visited1[v] = True
    print(v, end=' ')
    for i in range(1,n + 1):
        if not visited1[i] and graph[v][i] == 1:
            dfs(i)

def bfs(v):
    queue = deque([v])
    visited2[v] = True

    while queue:
        v = queue.popleft()
        print(v,end=' ')
        for i in range(1,n + 1):
            if not visited2[i] and graph[v][i] == 1:
                queue.append(i)
                visited2[i] = 1

dfs(v)
print()
bfs(v)