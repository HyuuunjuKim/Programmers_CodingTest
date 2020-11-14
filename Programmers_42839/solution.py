import itertools

def isDecimal(num) :
    if num % 2 == 0 :
        return False
    else :
        for i in range(3, num, 2) :
            if num % i == 0 : 
                return False
    return True

def solution(numbers):
    answer = 0
    listNum = list(numbers)
    setNum = set()
    for digit in range(1, len(numbers) + 1) :
        nPr = itertools.permutations(listNum, digit) 
        for p in nPr :
            setNum.add(int("".join(p)))
    print(setNum)
    for num in setNum :
        if (isDecimal(num) and num != 1 and num != 0) or num == 2 : answer += 1
            
    return answer