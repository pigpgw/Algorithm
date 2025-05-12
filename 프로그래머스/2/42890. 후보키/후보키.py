from itertools import combinations

def solution(relation):
    answer = 0
    attribute_len = len(relation[0])
    total_tuple_len = len(relation)
    used = []
    for i in range(1, attribute_len + 1):
        combis = list(combinations(range(attribute_len),i))
        for combi in combis:
            tuple = []
            for row in relation:
                key = ""
                for idx in combi:
                    key += row[idx]
                tuple.append(key)
            if (len(set(tuple)) != len(relation)):
                continue
            
            is_ok = True
            for u in used:
                check = True
                for x in u:
                    if x not in combi:
                        check = False
                        break
                if check:
                    is_ok = False
                    break
            if is_ok:
                answer += 1
                used.append(combi)
                    
            
    return answer