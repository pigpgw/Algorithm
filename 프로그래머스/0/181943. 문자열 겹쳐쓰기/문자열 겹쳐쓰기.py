def solution(my_string, overwrite_string, s):
    before = my_string[:s]
    after = my_string[s+len(overwrite_string):]
    return before + overwrite_string + after