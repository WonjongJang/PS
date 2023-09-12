function solution(hp) {
  let result = 0

  result += parseInt(hp / 5)
  hp %= 5

  result += parseInt(hp / 3)
  hp %= 3

  result += hp
  
  return result
}