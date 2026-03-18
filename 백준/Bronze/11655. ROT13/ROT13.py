s = input()
result = ""
for item in s:
    if item >= 'a' and item <= "z":
        value = ord(item) + 13
        if value >= 123:
            value -= 26
        result += chr(value)
    elif item >= 'A' and item <= "Z":
        value = ord(item) + 13
        if value >= 91:
            value -= 26
        result += chr(value)
    else:
        result += item
print(result)