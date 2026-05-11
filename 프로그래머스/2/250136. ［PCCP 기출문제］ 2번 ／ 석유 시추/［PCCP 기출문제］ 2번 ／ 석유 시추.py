# bfs로 그냥 한칸씩 해보기

dx = [-1,0,1,0]
dy = [0,-1,0,1]

def bfs (land,visited,starty,startx,N,M):
    queue = [[starty,startx]]
    visited[starty][startx] = True
    head = 0
    count = 0
    cols = set()
    while head < len(queue):
        curry,currx = queue[head]
        count += 1
        head += 1
        cols.add(currx)
        for i in range(4):
            ny = curry + dy[i]
            nx = currx + dx[i]
            if ny < 0 or ny >= N or nx < 0 or nx >= M:
                continue
            if visited[ny][nx]:
                continue
            if land[ny][nx] != 1:
                continue
            visited[ny][nx] = True
            queue.append([ny,nx])
    return count,cols

                
        

def solution(land):
    answer = 0
    N = len(land)
    M = len(land[0])
    visited = [[False] * M for _ in range(N)]
    oils = [0] * M
    for i in range(M):
        for j in range(len(land)):
            if land[j][i] == 1 and not visited[j][i]:
                count,cols = bfs(land, visited, j, i, N, M)     
                for col in cols:
                    oils[col] += count

    return max(oils)