function solution(participant, completion) {
    const players = new Map()
    
    // 마라톤 참여한 선수
    for (p of participant) {
        const temp = players.get(p)
        if (temp) players.set(p, temp+1)    // 동명이인
        else players.set(p, 1)
    }
    
    // 마라톤 완주한 선수
    for (c of completion) {
        players.set(c, players.get(c)-1)
    }
    
    for (const [key, value] of players) {
        if (value) return key
    }
}