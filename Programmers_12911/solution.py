def change_to_binary(decimal_num) : # 십진수를 이진수로 바꾸기
    binary_list = []
    while decimal_num > 1 :
        binary_list.append(decimal_num % 2)
        decimal_num = decimal_num // 2
    binary_list.append(decimal_num)
    
    return reversed(binary_list)
def count_num_of_one(n) : # 이진수에서 1의 개수 세기
    count = 0
    binary = change_to_binary(n)
    for b in binary :
        if b == 1 :
            count += 1
    
    return count
def solution(n):
    answer = n + 1
    num_of_one = count_num_of_one(n)
    while 1 :
        if count_num_of_one(answer) == num_of_one :
            break
        answer += 1
        
    return answer