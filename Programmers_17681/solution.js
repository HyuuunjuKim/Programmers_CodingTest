function solution(n, arr1, arr2) {
  const changeToBinary = (dec, n) => {
    const tmp = [];
    if (dec === 0) {
      for (let i = 0; i < n; i++) {
        tmp.push(0);
      }
    } else {
      while (dec > 1) {
        tmp.unshift(dec % 2);
        dec = Math.floor(dec / 2);
      }
      tmp.unshift(1);
      if (tmp.length < n) {
        while (tmp.length < n) {
          tmp.unshift(0);
        }
      }
    }
    return tmp;
  };
  var answer = [];
  const binaryArr1 = [];
  arr1.map((col) => {
    binaryArr1.push(changeToBinary(col, n));
  });
  const binaryArr2 = [];
  arr2.map((col) => {
    binaryArr2.push(changeToBinary(col, n));
  });
  let tmp2 = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (binaryArr1[i][j] + binaryArr2[i][j] === 0) {
        tmp2 = tmp2.concat(" ");
      } else {
        tmp2 = tmp2.concat("#");
      }
    }
    answer.push(tmp2);
    tmp2 = "";
  }
  return answer;
}
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
