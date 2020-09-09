function solution(files) {
  let answer = [];
  let info = [];
  files.forEach((file, index) => {
    const head = [];
    const number = [];
    let tail = [];

    let idx = 0;
    for (let i = 0; i < file.length; i++) {
      if (isNaN(file.charAt(i)) || file.charAt(i) === " ") {
        head.push(file.charAt(i));
      } else {
        idx = i;
        break;
      }
    }
    for (let i = idx; i < file.length; i++) {
      if (!isNaN(file.charAt(i) * 1) && file.charAt(i) !== " ") {
        number.push(file.charAt(i) * 1);
        if (i === file.length - 1) {
          idx = file.length;
          break;
        }
      } else {
        idx = i;
        break;
      }
    }
    console.log(idx, file.length);
    tail = file.substring(idx, file.length).split("");
    // if (idx === file.length) tail = "";
    info.push([index, head.join(""), number.join("") * 1, tail.join("")]);
  });
  info.sort((a, b) => {
    const tmp_a = a[1].toUpperCase();
    const tmp_b = b[1].toUpperCase();
    if (tmp_a < tmp_b) return -1;
    else if (tmp_a > tmp_b) return 1;
    else {
      if (a[2] < b[2]) return -1;
      else if (a[2] > b[2]) return 1;
      else {
        if (a[0] < b[0]) return -1;
        else return 1;
      }
    }
  });
  console.log(info);
  info.forEach((item) => {
    answer.push(files[item[0]]);
  });
  console.log(answer);
  return answer;
}
solution([
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
]);
