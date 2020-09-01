function solution(genres, plays) {
  var answer = [];
  let genreList = new Set(genres);
  let divideByGenres = [];
  genreList.forEach((one) => {
    const tmp = [];
    let sum = 0;
    genres.forEach((current_genre, idx) => {
      if (current_genre === one) {
        tmp.push([plays[idx], idx]);
        sum += plays[idx];
      }
    });
    tmp.sort((a, b) => {
      return b[0] - a[0];
    });
    tmp.unshift(sum);
    divideByGenres.push(tmp);
  });
  divideByGenres.sort((a, b) => {
    return b[0] - a[0];
  });
  for (let i = 0; i < divideByGenres.length; i++) {
    if (divideByGenres[i].length === 2) {
      answer.push(divideByGenres[i][1][1]);
    } else {
      answer.push(divideByGenres[i][1][1]);
      answer.push(divideByGenres[i][2][1]);
    }
  }
  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
