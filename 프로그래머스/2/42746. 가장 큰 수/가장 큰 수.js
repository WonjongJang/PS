function solution(numbers) {
    const newNumbers = numbers.map(number => String(number))
    newNumbers.sort((a, b) => {
        return Number(b + a) - Number(a + b)
    })
    
    const result = newNumbers.join('')
    return Number(result) === 0 ? '0' : result
}