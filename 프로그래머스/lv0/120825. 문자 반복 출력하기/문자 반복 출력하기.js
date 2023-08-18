function solution(my_string, n) {
  let result = "";
  for (string of my_string) {
    result += string.repeat(n);
  }
  return result;
}