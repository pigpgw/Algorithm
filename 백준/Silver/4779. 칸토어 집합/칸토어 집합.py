import sys

def cantor(start, length, s):
    if length == 1:
        return
    third = length // 3
    for i in range(start + third, start + 2 * third):
        s[i] = " "
    cantor(start, third, s)
    cantor(start + 2 * third, third, s)

for line in sys.stdin:
    n = int(line.strip())
    size = 3 ** n
    s = ["-"] * size
    cantor(0, size, s)
    print("".join(s))
