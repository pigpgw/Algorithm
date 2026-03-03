const calculateIncline = (line1, line2) => {
    const [x1,y1] = line1
    const [x2,y2] = line2
    return ((x2-x1)/(y2-y1))
}

function solution(dots) {
    for (let i = 0; i < 3; i++){
        for (let j = i+1; j < 3; j++){
            const line1 = dots[i]
            const line2 = dots[j]
            const another_line = dots.filter((_,idx) => idx !== i && idx !==j)
            const [line3,line4] = another_line
            const incline1 = calculateIncline(line1,line2)
            const incline2 = calculateIncline(line3,line4)
            if (incline1 === incline2) return 1
        }
    }
    return 0;
}