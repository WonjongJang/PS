function solution(nums) {
    const poke = new Set(nums)  // 폰켓몬 종류
    if (poke.size > nums.length / 2) {
        return nums.length / 2
    } else {
        return poke.size
    }    
}