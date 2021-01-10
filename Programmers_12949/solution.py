def solution(arr1, arr2):
    answer = []
    for arr1_row in arr1 :
        row = []
        for col in range(len(arr2[0])) :
            sum = 0
            for idx in range(len(arr2)) :
                sum += arr1_row[idx] * arr2[idx][col]
            row.append(sum)
        answer.append(row)   
        
    return answer