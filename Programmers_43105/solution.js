function solution(triangle) {
  let answer = 0;
  triangle[1][0] += triangle[0][0];
  triangle[1][1] += triangle[0][0];
  for (let i = 2; i < triangle.length; i++) {
    for (let j = 1; j < i; j++) {
      if (triangle[i - 1][j - 1] < triangle[i - 1][j]) {
        triangle[i][j] += triangle[i - 1][j];
      } else {
        triangle[i][j] += triangle[i - 1][j - 1];
      }
    }
    triangle[i][0] += triangle[i - 1][0];
    triangle[i][i] += triangle[i - 1][i - 1];
  }
  answer = Math.max.apply(null, triangle[triangle.length - 1]);

  return answer;
}
solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
