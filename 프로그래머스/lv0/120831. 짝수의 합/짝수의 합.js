function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => {
    if (cur % 2 === 0) return acc + cur;
    else return acc;
  }, 0);
}