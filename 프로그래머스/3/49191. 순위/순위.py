# 순위를 어떻게 할까? 이긴놈 진놈 합친수가 n - 1이면 순위구하기 가능
# 순위가 정해진 준서와 붙었을떄 지면 그보다 낮은 순쉬임 근데 그선수 뒤에 여러명이 있다면? 모드는거임 근데 알수있는경우는 n - 1위한테 지면 n위임 (왜냐 실력제라 변수 없음) 2위한테 이기면 1위

def bfs(graph,start,direction,n):
    visited = [False] * (n +1)
    queue = [start]
    visited[start] = True
    count = 0
    while len(queue) > 0:
        curr = queue.pop(0)
        for nextNode in graph[curr][direction]:
            if visited[nextNode]:
                continue
            visited[nextNode] = True
            count +=1
            queue.append(nextNode)
    return count

def solution(n, results):
    graph = {}
    for i in range(1,n + 1):
        if i not in graph:
            graph[i] = [[],[]]
    for winner,looser in results:
        graph[winner][1].append(looser)
        graph[looser][0].append(winner)
    result = 0
    for i in range(1,n + 1):
        looser = bfs(graph,i,1,n)
        winner = bfs(graph,i,0,n)
        if looser + winner == n - 1:
            result += 1
    
    return result