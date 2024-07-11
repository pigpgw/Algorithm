import sys
input = sys.stdin.readline

dwarf_list = [int(input()) for _ in range(9)]
dwarf_list.sort()
total_height = 0
a=0
b = 0

total_dwarf_tall = sum(dwarf_list)

for i in dwarf_list:
    for j in dwarf_list:
        if i != j:
            if total_dwarf_tall - i - j == 100:
                a = i
                b = j

dwarf_list.remove(a)
dwarf_list.remove(b)

print('\n'.join(map(str,dwarf_list)))