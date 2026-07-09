# 문제 : 네트워크의 개수를 return
# 본질 : 완전탐색을 통해 네트워크 개수를 파악하라 
    # 먼저 그래프를 만들고 각 노드에서 출발하여 bfs를하여 개수 체크
    # 이어져있는 것들은 방문처리하기

def bfs(visited,start,graph):
    queue = [start]
    visited[start] = True
    while queue:
        curr_node = queue.pop(0)
        for next_node in graph[curr_node]:
            if visited[next_node]:
                continue
            queue.append(next_node)
            visited[next_node] = True
def solution(n, computers):
    answer = 0
    graph = {}
    for i in range(len(computers)):
        if i not in graph:
            graph[i] = []
        for j in range(len(computers)):
            if computers[i][j] == 0:
                continue
            if j not in graph[i]:
                graph[i].append(j)
    visited = [False] * len(graph.keys())
    for node in graph.keys():
        if visited[node]:
            continue
        bfs(visited,node,graph)
        answer += 1
    
    return answer