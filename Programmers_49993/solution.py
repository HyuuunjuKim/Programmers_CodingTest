def solution(skill, skill_trees):
    answer = 0
    for tree in skill_trees :
        l = []
        for i in list(tree) :
            if i in skill :
                l.append(i)
        if len(l) != 0 :
            for j in l :
                if l.index(j) != skill.index(j) :
                    break
                if j == l[-1] :
                    answer += 1
        else :
            answer += 1
        
    return answer