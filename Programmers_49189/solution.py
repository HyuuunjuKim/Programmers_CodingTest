from collections import deque

def dfs(graph, v, visited, height):
    visited[v] = height
    queue = deque([v])
    while queue:
        cur = queue.popleft()
        for node in graph[cur]:
            if visited[node] == -1:
                queue.append(node)
                visited[node] = visited[cur] + 1

def solution(n, edge):
    answer = 0
    graph = [[] for _ in range(n + 1)]
    for i in edge:
        graph[i[0]].append(i[1])
        graph[i[1]].append(i[0])
    visited = [-1] * (n + 1)

    h = 0
    dfs(graph, 1, visited, h)
    max_height = max(visited)
    answer = len([i for i in visited if i == max_height])

    return answer

solution(7,	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2], [5, 7]])