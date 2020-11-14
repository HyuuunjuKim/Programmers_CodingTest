def solution(n):
    answer = []
    tree = [[-1] * (i+1) for i in range(n) ]
    x = -1
    y = 0
    i = 1
    for j in range(n) :
        for _ in range(n-j) :
            if j % 3 == 0 :
                # go down for (n-j)
                x += 1
            elif j % 3 == 1 :
                # go right for (n-j)
                y += 1
            else :
                #go left and up for (n-j) 
                x -= 1
                y -= 1
            tree[x][y] = i
            i += 1
    for t in tree :
        answer += t
    return answer