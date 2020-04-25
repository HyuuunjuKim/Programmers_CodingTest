function solution(strings, n) {
  var answer = [];
  const charArray = [];
  strings.map((string) => {
    charArray.push(string.substring(n, n + 1));
  });
  charArray.sort();
  const charArray2 = [...new Set(charArray)]; // 중복 삭제된 문자 배열

  charArray2.map((item) => {
    var tmp = [];
    strings.map((string) => {
      if (string[n] === item) {
        tmp.push(string);
      }
    });
    if (tmp.length === 1) {
      answer.push(tmp[0]);
      tmp = [];
    } else {
      tmp.sort();
      for (var i = 0; i < tmp.length; i++) {
        answer.push(tmp[i]);
      }
      tmp = [];
    }
  });
  return answer;
}
solution(["abce", "abcd", "cdx"], 2);
