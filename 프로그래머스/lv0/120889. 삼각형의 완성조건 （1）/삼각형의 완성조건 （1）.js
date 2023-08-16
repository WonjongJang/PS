function solution(sides) {
  const desc = sides.sort((a, b) => {
    return b - a;
  });
  return desc[0] < desc[1] + desc[2] ? 1 : 2;
}