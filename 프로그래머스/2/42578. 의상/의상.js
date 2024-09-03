function solution(clothes) {
    const clothesMap = new Map()
    
    for (const cloth of clothes) {
        const temp = clothesMap.get(cloth[1])
        if (temp) {
            clothesMap.set(cloth[1], [...temp, cloth[0]])
        } else {
            clothesMap.set(cloth[1], [cloth[0]])
        }
    }
    
    let comb = 1
    for (const [key, value] of clothesMap) {
        comb *= value.length + 1
    }
    
    return comb - 1
}