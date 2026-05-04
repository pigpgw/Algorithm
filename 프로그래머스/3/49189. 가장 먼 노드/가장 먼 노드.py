def bfs (graph,n):
    queue = [[1,0]]
    visited = [False] * (n + 1)
    visited[1] = True
    result = [[1,0]]
    
    while len(queue) > 0:
        currNode,currDepth = queue.pop(0)

        for nextNode in graph[currNode]:
            if visited[nextNode]:
                continue
            visited[nextNode] = True
            queue.append([nextNode,currDepth + 1])
            result.append([nextNode,currDepth + 1])
    return result
    
def solution(n, edge):
    graph = {}
    
    for nodeA, nodeB in edge:
        if nodeA not in graph:
            graph[nodeA] = []
        if nodeB not in graph:
            graph[nodeB] = []    
        graph[nodeA].append(nodeB)
        graph[nodeB].append(nodeA)
    
    calculatedDepth = bfs(graph,n)
    
    maxDepth = max([item[1] for item in calculatedDepth])
    
    result = [x for x in calculatedDepth if x[1] == maxDepth]
    
    return len(result)