# 오픈채팅 관리자창
# 누가 들어요면 [닉네임]님이 들어왔습니다.
# 누가 나가면 [닉네임]님이 나갔습니다.

# 닉네임 변경 방법
    # 1. 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
    # 2. 채팅방에서 닉네임을 변경한다.

def solution(record):
    user_store = {}
    inout_record = []
    for r in record:
        info = r.split()
        type = info[0]
        user_id = info[1]
        if type != "Change":
            inout_record.append([user_id,type])
        if type != "Leave":
            user_name = info[2]
            user_store[user_id] = user_name
            
    return [f"{user_store[record[0]]}님이 들어왔습니다." if record[1] == "Enter" else f"{user_store[record[0]]}님이 나갔습니다." for record in inout_record]