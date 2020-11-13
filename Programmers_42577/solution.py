def solution(phone_book):
    answer = True
    for i in phone_book :
        for j in phone_book :
            if i != j and i == j[0:len(i)] : 
                return False 
    return answer