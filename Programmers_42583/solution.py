def solution(bridge_length, weight, truck_weights):
    second = 1
    bridge = [0] * bridge_length
    while 1 :
        # 트럭 하나씩 앞으로 전진
        bridge.pop(0)
        
        # 대기 트럭 없을 때
        if len(truck_weights) == 0 :
            bridge.append(0)
            if sum(bridge) == 0 :
                return second
        #대기 트럭 있을 때
        else :
            pop_truck_weight = truck_weights[0]
            if sum(bridge) + pop_truck_weight <= weight and len(bridge) < bridge_length:
                # 트럭 하나 꺼낸 후 다리에 올리기
                pop_truck = truck_weights.pop(0)
                bridge.append(pop_truck)
            else :
                bridge.append(0)

        second += 1

    return second

solution(	2, 10, [7, 4, 5, 6])