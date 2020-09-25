def solution(prices) :
  answer = []
  for index, price in enumerate(prices):
    for idx in range(index+1, len(prices)):
      if prices[idx] < price :
        answer.append(idx-index) 
        break
      if idx == len(prices)-1 :
        answer.append(idx - index)
      print(index, answer, idx - index)  
  answer.append(0)
  print(answer)
  return answer

solution([1, 2, 3, 2, 3])