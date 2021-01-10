def solution(s):
    answer = []
    s = s[2:len(s)-2].split("},{") # 앞 뒤 중괄호 제거 및 ","으로 분리
    data = [list(map(int, item.split(","))) for item in s] # str형 s를 list로 변경
    data.sort(key = lambda x: len(x)) # list의 길이 오름차순으로 정렬
    
    answer.append(data[0][0])
    for idx in range(1, len(data)) :
        answer.append(sum(data[idx]) - sum(data[idx-1]))

    return answer