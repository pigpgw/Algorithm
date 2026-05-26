dy = [0,-1,0,1]
dx = [-1,0,1,0]

def bfs(startx,starty,visited,land,n,m):
    queue = [[starty,startx]]
    visited[starty][startx] = True
    count = 1
    columns = set([startx])
    while len(queue) > 0:
        curry,currx = queue.pop(0)
        
        for i in range(4):
            ny = curry + dy[i]
            nx = currx + dx[i]
            if ny < 0 or ny >= n:
                continue
            if nx < 0 or nx >= m:
                continue
            if land[ny][nx] == 0:
                continue
            if visited[ny][nx]:
                continue
            count += 1
            queue.append([ny,nx])
            columns.add(nx)
            visited[ny][nx] = True
    return columns, count

def solution(land):
    n = len(land)
    m = len(land[0])
    oils = [0] * m
    visited = [[False] * m for _ in range(n)]
    for i in range(m):
        for j in range(n):
            if land[j][i] == 1 and not visited[j][i]:
                columns,oil = bfs(i,j,visited,land,n,m)
                for column in columns:
                    oils[column] += oil
    return max(oils)