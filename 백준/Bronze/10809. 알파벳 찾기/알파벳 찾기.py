s = input()


d = {}

for i in range(26):
    d[chr(ord("a") + i)] = -1

for i in s:
    d[i] = s.index(i)

print(" ".join(map(str,d.values())))