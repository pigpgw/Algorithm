import sys

input = sys.stdin.readline

n = int(input())

employee = {}

for _ in range(n):
    name, action = input().strip().split()
    if action == 'enter':
        employee[name] = True
    elif action== 'leave':
        if name in employee:
            del employee[name]

sorted_employee = sorted(employee.keys(), reverse=True)

for name in sorted_employee:
    print(name)