def solution(numbers, target) :
    global answer
    answer = 0
    def dfs(idx, total_sum) :
        global answer
        print(idx, total_sum)
        if idx == len(numbers) :
            if total_sum == target :
                answer+=1
            return 
        return dfs(idx+1, total_sum + numbers[idx]),dfs(idx+1, total_sum - numbers[idx])     

    dfs(1, numbers[0])
    dfs(1, -numbers[0])

    return answer 

solution([1,1,1,1,1], 3)