def solution(priorities, location):
    # 동일한 우선 순위 구별 위해 idx부여
    priorities_with_idx = [(p, idx) for idx, p in enumerate(priorities)]
    print_list = []
    while priorities_with_idx :
        pop_item = priorities_with_idx.pop(0)
        for p in priorities_with_idx :
            if p[0] > pop_item[0] :
                priorities_with_idx.append(pop_item)
                pop_item = None

                break
                
        if pop_item != None :
            if pop_item[1] == location :
                return len(print_list)+1
            else :
                print_list.append(pop_item)