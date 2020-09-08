function solution(str1, str2) {
  let answer = 0;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  // console.log(str1, str2);
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    let tmp = str1.substr(i, 2);
    tmp.match(/[^A-Z]/) ? "" : arr1.push(tmp);
  }
  for (let j = 0; j < str2.length - 1; j++) {
    let tmp = str2.substr(j, 2);
    tmp.match(/[^A-Z]/) ? "" : arr2.push(tmp);
  }
  console.log(arr1, arr2);
  let tmpToSwitch = [];
  if (arr1.length > arr2.length) {
    tmpToSwitch = arr1;
    arr1 = arr2;
    arr2 = tmpToSwitch;
  }
  let arr3 = arr2.slice(0);
  console.log(arr3);
  if (arr1.length === 0 && arr2.length === 0) {
    console.log("ass");
    answer = 65536;
  } else {
    let itsc_count = 0;
    arr1.forEach((item) => {
      if (arr3.indexOf(item) !== -1) {
        itsc_count++;
        arr3.splice(arr3.indexOf(item), 1);
      }
    });
    answer = Math.floor(
      (itsc_count / (arr1.length + arr2.length - itsc_count)) * 65536
    );
    console.log(arr1, arr2, itsc_count, answer);
  }
  return answer;
}
solution("aa1+aabbb2", "AAAAbb12");
