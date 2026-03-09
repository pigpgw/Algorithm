function solution(sizes) {
    const sorted_sizes = sizes.map(item => item.sort((a,b) => b - a))
    let width = 0
    let height = 0
    for (const [card_width,card_height] of sorted_sizes){
        width = Math.max(width,card_width)
        height = Math.max(height,card_height)
    }
    return width * height
}