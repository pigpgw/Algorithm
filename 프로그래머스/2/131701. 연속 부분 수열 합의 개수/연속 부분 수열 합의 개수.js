function solution(elements) {
    var answer = 0;
    const set = new Set()
    for (let i = 0; i < elements.length; i++){
        let total = 0;
        for (let j = i; j < elements.length + i; j++){
            total += elements[j % elements.length]
            set.add(total)
        }
    }
    
    return set.size;
}