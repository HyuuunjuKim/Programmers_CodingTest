import heapq

def solution(operations):
    answer = []
    heap = []
    for op in operations :
        type, num = op.split(" ")
        if type == "I":
            heapq.heappush(heap, int(num))
        else :
            if len(heap) > 0 :
                if num == "-1" :
                    heapq.heappop(heap)
                else : 
                    del heap[heap.index(max(heap))]
                    
        print(heap)
    if len(heap) == 0 :
        answer = [0, 0]
    else :
        answer.append(max(heap))
        answer.append(min(heap))
                                  
    return answer