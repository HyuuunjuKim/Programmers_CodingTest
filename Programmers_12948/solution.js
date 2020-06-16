function solution(phone_number) {
  var answer = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    phone_number = phone_number.replace(phone_number.charAt(i), "*");
  }
  answer = phone_number;
  return answer;
}

solution("132705");
