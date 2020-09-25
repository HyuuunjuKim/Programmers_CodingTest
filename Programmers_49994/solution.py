def solution(dirs) :
    global current
    current=[5, 5]
    def movemove(pos):
        global current
        dx = [-1, 1, 0, 0]
        dy = [0, 0, -1, 1]
        move = ["L", "R", "U", "D"]

        nx = current[0] + dx[move.index(pos)]
        ny = current[1] + dy[move.index(pos)]
        
        if 0 <= nx <= 10 and 0 <= ny <= 10:
            if [current, [nx, ny]] not in visited and [[nx, ny], current] not in visited :
                visited.append([current, [nx, ny]])
                current = [nx, ny]
            else : 
                current = [nx, ny]

        
    board = [list(i for i in range(11)) for _ in range(11)]
    visited=[]
    for i in dirs :
        movemove(i)
    print(visited, len(visited))
    return len(visited)

solution("LULLLLLLU")