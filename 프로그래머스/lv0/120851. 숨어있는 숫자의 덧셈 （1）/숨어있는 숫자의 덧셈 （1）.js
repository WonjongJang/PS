function solution(my_string) {
  let result = 0;
  my_string.split("").forEach((s) => {
    if (!isNaN(s)) result += Number(s);
  });
  return result;
}