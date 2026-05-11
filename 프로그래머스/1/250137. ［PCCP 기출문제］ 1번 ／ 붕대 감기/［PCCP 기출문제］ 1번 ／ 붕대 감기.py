def solution(bandage, health, attacks):
    t,x,y = bandage
    last_time = attacks[-1][0]
    curr_time = 0
    curr_helth = health
    continue_time = 0
    while curr_time < last_time:
        # t초동안 1초마다 x만큼 체력 회복
        curr_time += 1
        if len(attacks) > 0:
            attack_time,attack_power = attacks[0]
        # 공격당하면 그순간 회복 불가
        if curr_time == attack_time:
            curr_helth -= attack_power
            attacks.pop(0)
            continue_time = 0
            if curr_helth <= 0:
                return -1
            continue
        continue_time += 1
        curr_helth += x
        # t초 연속으로 붕대 감는데 성공하면 y만큼 추가 회복
        if continue_time == t:
            curr_helth += y
            continue_time = 0
        # 최대체력보다 커지는것 불가능
        if curr_helth > health:
            curr_helth = health
        
    return curr_helth
        
            