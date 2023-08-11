function solution(num_list) {
  const result = [0, 0]; // [짝수, 홀수]

  num_list.forEach((num) => {
    if (num % 2) result[1]++;
    else result[0]++;
  });

  return result;
}