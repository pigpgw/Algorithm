def solution(s):
    arr = s.split(" ")
    result = []
    for word in arr:
        if word == "":
            result.append("")
            continue
        firstWord = word[0]
        if firstWord.isalpha():
            result.append(firstWord.upper()+word[1:].lower())
        else:
            result.append(word.lower())
    return " ".join(result)