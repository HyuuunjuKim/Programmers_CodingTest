def solution(tickets):
    answer = []
    dictTickets = dict()
    for t in tickets :
        if t[0] in dictTickets :
            dictTickets[t[0]].append(t[1])
        else :
            dictTickets[t[0]] = [t[1]]
    for d in dictTickets :
        dictTickets[d].sort()
        
    path = ["ICN"]
    while path :
        newStart = path[-1]
        if newStart not in dictTickets or len(dictTickets[newStart]) == 0 :
            answer.append(path.pop())
        else :
            path.append(dictTickets[newStart].pop(0))
    answer.reverse()
    return answer
solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]])