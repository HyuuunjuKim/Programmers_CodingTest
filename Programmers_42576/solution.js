function solution(participant, completion) {
  var answer = "";
  var answerArray = [];
  participant.sort();
  console.log(participant);
  completion.sort();
  console.log(completion);

  participant.map((participant, index) => {
    participant === completion[index] ? "" : answerArray.push(participant);
    console.log(answerArray[0]);
  });
  return (answer = answerArray[0]);
}
solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
