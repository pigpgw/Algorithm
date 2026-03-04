function solution(genres, plays) {
    const store = {}
    for (let i = 0; i < genres.length; i++){
        if (!store[genres[i]]) store[genres[i]] = {play:0,songs:[]}
        store[genres[i]].songs.push(i)
        store[genres[i]].play += plays[i]
    }
    for (const genre of genres){
        store[genre].songs = store[genre].songs.sort((a,b) => {
            if (plays[b] === plays[a]){
                return a - b
            }
            return plays[b] - plays[a]
        })
    }
    
    genres = Object.keys(store).sort((a,b) => store[b].play - store[a].play)
    const result = []
    for (const genre of genres){
        if (store[genre].songs.length < 2) {
            result.push(store[genre].songs[0])
        }else {
            let i = 0
            while(true){
                if (i === 2) break
                result.push(store[genre].songs[i])
                i += 1
            }
        }
    }
    return result
}