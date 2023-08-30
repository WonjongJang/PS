function solution(money) {
  const a = 5500;
  return [parseInt(money / a), money % a];
}