function solution(emergency) {
  const temp = [...emergency];  // 원본 배열을 변경할 배열
  const result = [...emergency];  // 진료 순서 저장할 배열

  // 정렬 (내림차순)
  temp.sort((a, b) => {
    return b - a;
  });

  temp.forEach((v, i) => {
    result[emergency.indexOf(v)] = i + 1;
  });

  return result;
}