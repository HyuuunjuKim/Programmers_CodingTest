function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];

  cities.forEach((item) => {
    item = item.toLowerCase();
  });
  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cacheSize == 0) {
      answer += 5;
    } else {
      if (cache.length == cacheSize) {
        for (let i = 0; i < cache.length; i++) {
          if (cache[i] == city) {
            cache.splice(i, 1);
            answer += 1;
            break;
          }
          if (i == cache.length - 1) {
            cache.shift();
            answer += 5;
          }
        }
        cache.push(city);
      } else {
        if (cache.length == 0) {
          cache.push(city);
          answer += 5;
        } else {
          for (let i = 0; i < cache.length; i++) {
            if (cache[i] == city) {
              cache.splice(i, 1);
              answer += 1;
              break;
            }
            if (i == cache.length - 1) {
              answer += 5;
            }
          }
          cache.push(city);
        }
      }
    }
  });
  return answer;
}
solution(0, []);
