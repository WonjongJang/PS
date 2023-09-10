function solution(age) {
  const hash = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  let result = "";
  for (a of String(age)) {
    result += hash[a];
  }
  return result;
}