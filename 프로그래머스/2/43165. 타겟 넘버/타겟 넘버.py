# 문제 : 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수
# 본질 : 모든 방법을 시도하여 가능한 방법의 총 수 구하기
def solution(numbers, target):
    answer = 0
    N = len(numbers)
    # 중복이 되지 않아야한다
    # dfs를 진행한다
    # backtrack으로 진행한다. arr대신 더한 값을 넘긴다. 백트랙 로직을 같은걸 안해버리면 되지 않을까?
    # 시작점도 +1과 -1로 시작따로 해야할거같다.
    def backtrack(value,depth):
        nonlocal answer
        if depth == N:
            if value == target:
                answer += 1
            return
        backtrack(value + (numbers[depth] * 1),depth + 1)
        backtrack(value + (numbers[depth] * -1),depth + 1)
    backtrack(-numbers[0],1)
    backtrack(numbers[0],1)
    return answer