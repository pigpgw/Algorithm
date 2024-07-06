
list = []
for i in range(1,10):
    stripped_line = int(input())
    list.append(stripped_line)

print(max(list))
print(list.index(max(list)) + 1)
