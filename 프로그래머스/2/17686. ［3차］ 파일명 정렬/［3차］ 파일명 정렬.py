# 파일명은 100 글자 이내로, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만으로 이루어져, 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함
# 파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성
    # HEAD : 문자 최소 한글자
    # NUMBER : 한 글자에서 최대 다섯 글자 사이의 연속된 숫자 앞쪽 0가능
    # TAIL의 : 문자, 숫자, 글자x
# 정렬 기준
    # 1. HEAD 기준 사전 정렬, 대소문자 구분x
    # 2. 대소문자 차이 외에 같을경우 NUMVER의 숫자 순 정렬
    # 3. HEAD,NUMBER 같을시 입력 순서 유지

def solution(files):
    answer = []
    for file in files:
        idx = 0
        while not file[idx].isdigit():
            idx += 1
        HEAD = file[:idx]
        
        start = idx
        while idx < len(file) and file[idx].isdigit() and idx - start < 5:
            idx += 1
        NUMBER = file[start:idx]
        
        answer.append([HEAD,NUMBER,file])
    answer.sort(key=lambda file: (file[0].lower(), int(file[1])))
    return [file[2] for file in answer]
            