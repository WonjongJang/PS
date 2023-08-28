function solution(my_string) {
  const vowels = "aeiou"; // 모음
  return my_string
    .split("") // -> Array
    .filter((v) => !vowels.includes(v))
    .join(""); // -> String
}