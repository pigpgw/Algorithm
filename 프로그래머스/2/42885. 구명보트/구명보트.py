def solution(people, limit):
    answer = 0
    people.sort(reverse=True) # nlogn
    lIdx = 0
    rIdx = len(people) - 1
    # 시간복잡도 n^2
    while lIdx <= rIdx: # 몇번돌까 고민하기 pop으로 최대 n번이니 n
        onePerson = people[lIdx]
        lIdx += 1
        secondPerson = people[rIdx]
        if onePerson + secondPerson <= limit:
            rIdx -= 1
        answer += 1
    return answer