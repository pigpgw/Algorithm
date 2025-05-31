from collections import deque

def solution(queue1, queue2):
    queue1 = deque(queue1)
    queue2 = deque(queue2)
    total_queue1 = sum(queue1)
    total_queue2 = sum(queue2)
    count = 0
    if (total_queue1 + total_queue2) % 2 != 0:
        return -1  # 총합이 홀수면 불가능
    while total_queue1 != total_queue2:
        # 불가능한 케이스인가
        if count > (len(queue1) + len(queue2)) * 2:
            count = -1
            break
        # 더 큰 큐에서 원소를 추출해 작은 큐에 넣는다
            # 더 큰 큐를 판별한다
            # 원소를 넣는다
        if total_queue1 > total_queue2:
            extract_num = queue1.popleft()
            total_queue1 -= extract_num
            total_queue2 += extract_num
            queue2.append(extract_num)
        else:
            extract_num = queue2.popleft()
            total_queue2 -= extract_num
            total_queue1 += extract_num
            queue1.append(extract_num)
        # 카운트를 세준다
        count += 1
    return count
        