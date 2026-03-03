function solution(participant, completion) {
    const store1 = {}
    for (const member of  participant){
        store1[member] = (store1[member] ?? 0) + 1
    }
    const store2 = {}
    for (const member of  completion){
        store2[member] = (store2[member] ?? 0) + 1
    }
    let i = 0
    for (const user of participant){
        if (store1[user] !== store2[user]){
            return user
        }
    }
}