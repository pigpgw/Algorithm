def solution(video_len, pos, op_start, op_end, commands):
    video_min,video_sec = map(int,video_len.split(":"))
    video_total_time = video_min*60 + video_sec
    curr_min,curr_sec = map(int,pos.split(":"))
    curr_second = curr_min*60 + curr_sec
    op_start_min,op_start_sec = map(int,op_start.split(":"))
    op_end_min,op_end_sec = map(int,op_end.split(":"))
    op_start_second = op_start_min * 60 + op_start_sec
    op_end_second = op_end_min * 60 + op_end_sec
    if op_start_second <= curr_second and curr_second <= op_end_second:
        curr_second = op_end_second
    for next_order in commands:
        if next_order == "next":
            if curr_second > video_total_time - 10:
                curr_second = video_total_time
            else:
                curr_second += 10
        elif next_order == "prev":
            if curr_second < 10:
                curr_second = 0
            else:
                curr_second -= 10
        if op_start_second <= curr_second and curr_second <= op_end_second:
            curr_second = op_end_second
    return f"{curr_second // 60:02d}:{curr_second % 60:02d}"

            