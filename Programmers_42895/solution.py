def solution(N, number):
    answer = -1
    dp = []
    dp.append([0])
    dp.append([N])
    if number == N : answer = 1
    else :
        for cnt in range(2, 9) :
            numbers = {int(str(N)*cnt)}
            # dp[i] => i개의 N으로 표현할 수 있는 수의 집합
            for i in range(1, cnt) :
                for j in dp[i] :
                    for k in dp[cnt-i] :
                        numbers.add(j + k)
                        numbers.add(j - k)
                        numbers.add(j * k)
                        if k != 0 :
                            numbers.add(j // k)
            arr_num =  list(numbers)
            print(cnt, arr_num)
            if number in arr_num :
                answer = cnt
                break
            else :
                dp.append(arr_num)

    print(dp)
    print(answer)
    return answer
solution(5, 12)